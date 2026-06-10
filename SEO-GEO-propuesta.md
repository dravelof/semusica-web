# Propuesta SEO + GEO · Sé Música

> Objetivo: que buscadores (Google/Bing) y **motores generativos** (ChatGPT,
> Perplexity, Google AI Overviews, Claude) puedan leer, indexar y **citar** el
> contenido del sitio — sin alterar la comunicación ni el tono de marca de la home.

---

## El problema raíz (1 solo, y es grave)

Todas las páginas sirven un `<div id="root">` **vacío** y renderizan el contenido
100% en el cliente, **transpilando JSX con Babel en el navegador** (`@babel/standalone`
+ `type="text/babel"`, todo desde unpkg.com).

Consecuencia:

| Quién | ¿Ejecuta JS? | ¿Ve el contenido? |
|---|---|---|
| Googlebot | Sí, en 2ª pasada (diferida) | A medias — Babel en runtime es lento/frágil, retrasa y arriesga la indexación |
| Bingbot | Limitado | Casi nunca |
| Bots sociales (WhatsApp, LinkedIn, X) | No | Solo `<head>` (OG ya está OK) |
| **Bots de IA** (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) | **No** | **Nada → 0 presencia en respuestas generativas** |

El `<head>` (title, description, canonical, Open Graph, JSON-LD) es estático y
está **muy bien resuelto**. El problema es exclusivamente el **cuerpo**: H1,
párrafos, servicios, cifras — todo vive en los `.jsx` y solo existe tras ejecutar JS.

**Mientras el contenido no esté en el HTML servido, el GEO es prácticamente nulo.**

---

## La solución: contenido en HTML estático (pre-render)

El principio es único: **el contenido textual debe existir en el HTML antes de
ejecutar JavaScript.** Hay tres caminos, de menor a mayor solidez.

### Opción A — Migrar a un build con pre-render *(recomendada)*

Compilar el sitio una vez (Vite / esbuild + un pre-render) para que cada página
se publique como **HTML completo y estático**, con React hidratando encima para
las partes interactivas (formulario, menú, etc.).

- ✅ Resuelve SEO y GEO de raíz, para todos los bots.
- ✅ Elimina Babel y React en runtime → carga mucho más rápida (mejor Core Web Vitals).
- ✅ Permite endurecer el CSP (quitar `unsafe-eval`, `unsafe-inline`, unpkg).
- ⚠️ Requiere introducir un paso de build (no romper el flujo actual de edición).
- Esfuerzo: medio. Es la "migración a build de producción" que el propio brief anticipa.

### Opción B — Snapshot estático incrustado *(puente, sin build)*

Incrustar dentro de cada `#root` una versión **estática y rastreable** del
contenido (el DOM ya renderizado, como HTML plano). React lo reemplaza al cargar;
los bots que no ejecutan JS leen el snapshot.

- ✅ Da contenido a todos los bots ya, sin pipeline de build.
- ⚠️ Hay que regenerar el snapshot cuando cambie el contenido (mantenimiento manual).
- Esfuerzo: bajo-medio. Buen puente hasta la Opción A.

### Opción C — Pre-render de Netlify / servicio externo

Servir HTML pre-renderizado solo a los user-agents de bots.

- ⚠️ "Cloaking" técnico, frágil y desaconsejado por Google para GEO. **No recomendada.**

> **Recomendación:** Opción A como destino. Si se necesita impacto inmediato sin
> tocar el flujo de trabajo, hacer la Opción B ahora y planificar A después.

---

## Capa GEO (optimización para motores generativos)

Una vez el contenido sea estático, maximizar la *citabilidad* por IA:

1. **`robots.txt` explícito con los bots de IA.** Hoy hay `Allow: /` genérico;
   declarar intencionalmente GPTBot, ClaudeBot, PerplexityBot, Google-Extended,
   CCBot, etc. (permitir o bloquear, pero de forma consciente).
2. **`llms.txt`** en la raíz (estándar emergente): resumen de qué es Sé Música,
   servicios y enlaces clave, en texto plano para motores de IA.
3. **HTML semántico y "citable":** un solo `<h1>` por página, `<h2>`/`<h3>`
   jerárquicos, listas y tablas reales (no divs maquetados). Las afirmaciones con
   dato + fuente (ya las hay: "USD 3.4B · Holoniq") son ideales para citar.
4. **FAQPage schema** en home y servicios: preguntas reales del comprador
   ("¿qué es un aula virtual corporativa?", "¿cuánto cuesta virtualizar un curso?").
   Es el formato que las IA extraen con más frecuencia.
5. **Reforzar entidades** en el JSON-LD existente: `Organization` con
   `founder`, `numberOfEmployees`, `award`, `knowsAbout` ampliado, y
   `BreadcrumbList` por sección.

---

## Estructura (segunda etapa, ya prevista en el brief)

Sin tocar la home, crear páginas SEO como puertas de entrada por intención de
búsqueda — cada una **estática y rastreable** desde el día uno:

- `/elearning-corporativo-peru/`
- `/implementacion-moodle-peru/`
- `/aulas-virtuales-empresas-peru/`
- `/desarrollo-cursos-elearning/`
- `/diseno-instruccional-elearning/`

Añadirlas al `sitemap.xml` y enlazarlas internamente desde footer/servicios.

---

## Qué NO cambiar

- La **comunicación y el tono** de la home (H1 "Tecnologías digitales para la
  formación humana" se mantiene).
- El `_headers` actual (ya es mejor que el del brief).
- El `<head>` de meta/OG/JSON-LD (ya es sólido) — solo se amplía, no se rehace.

---

## Orden sugerido

1. ✅ `_redirects` (hecho).
2. `robots.txt` explícito + `llms.txt`. *(rápido, alto valor GEO)*
3. Pre-render del contenido (Opción B ahora, o saltar directo a A).
4. FAQPage + entidades ampliadas en JSON-LD.
5. Páginas SEO de segunda etapa.
6. Endurecer CSP cuando se elimine Babel/unpkg (tras Opción A).
