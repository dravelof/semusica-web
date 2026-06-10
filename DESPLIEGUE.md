# Despliegue · Sé Música (Opción A — pre-render para SEO/GEO)

## Qué se añadió y por qué

El sitio renderiza su contenido en el navegador (React + Babel). Eso deja el
HTML servido casi vacío para quien **no ejecuta JavaScript** — sobre todo los
motores de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) → 0 presencia
en respuestas generativas, y peor rastreo general.

La **Opción A** resuelve esto pre-renderizando cada página en el momento del
despliegue: el HTML que se publica ya contiene todo el contenido (titulares,
textos, servicios, enlaces) listo para rastrear. React vuelve a montar encima al
cargar, así que **lo que ve la persona usuaria no cambia en absoluto**.

## Archivos nuevos

| Archivo | Para qué |
|---|---|
| `prerender.mjs` | El build: copia el sitio a `dist/` y le inyecta el HTML pre-renderizado. |
| `package.json` | Define `npm run build` y la dependencia (Puppeteer). |
| `netlify.toml` | Le dice a Netlify que ejecute el build y publique `dist/`. |

> **A prueba de fallos:** si el pre-render falla por lo que sea, el deploy **no
> se rompe** — `dist/` ya contiene el sitio funcionando igual que hoy. El
> pre-render solo *añade* contenido estático; nunca puede dejar el sitio peor
> que ahora.

## Requisito único

Netlify (o tú, en local) tiene que **ejecutar el build**. Hay dos formas:

### A) Despliegue conectado a Git *(recomendado)*
Si tu sitio en Netlify está enlazado a un repositorio, no hay que hacer nada
manual: en cada push Netlify corre `npm run build` y publica `dist/`.

- En **Site settings → Build & deploy**, confirma:
  - **Base directory:** la carpeta del sitio (donde está `package.json`).
  - **Build command:** `npm run build`
  - **Publish directory:** `dist`
- El `netlify.toml` ya deja estos valores por defecto.

### B) Despliegue manual (arrastrar carpeta)
Si subes la carpeta a mano (drag-and-drop), antes ejecuta una vez en tu equipo:

```bash
npm install      # instala Puppeteer (descarga Chromium)
npm run build    # genera dist/ con el contenido pre-renderizado
```

…y arrastra la carpeta **`dist/`** (no la carpeta de origen) a Netlify.

> Si **no puedes** ejecutar un build en ninguno de los dos modos, dímelo: hay
> una alternativa sin build (contenido estático escrito a mano en cada página),
> con una pequeña contrapartida visual de menos de un segundo.

## Comprobar que funcionó

Tras desplegar, abre el sitio y haz **clic derecho → Ver código fuente** (no
"Inspeccionar"). Deberías ver el contenido real (titulares, párrafos) dentro de
`<div id="root">…</div>`, entre los comentarios `PRERENDER:START`/`END`.
Si solo ves `<div id="root"></div>` vacío, el build no corrió (revisa el log de
Netlify) — pero el sitio sigue funcionando con normalidad.

## Importante para no perder fidelidad

`prerender.mjs` lee los **mismos `.jsx`** de siempre como fuente de verdad. No
edites nunca el HTML inyectado a mano: cámbialo en los componentes y el siguiente
build lo regenera. Así nunca hay desajuste (drift) entre lo estático y lo que
renderiza React.
