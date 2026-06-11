# Despliegue de semusica.com

El sitio es **estático**: HTML, CSS y JavaScript que se sirven tal cual.
No hay build, ni Node, ni Chrome. El contenido que leen Google y los
buscadores ya está escrito dentro de cada página (bloques `<noscript>`),
así que el despliegue es instantáneo y no puede fallar por compilación.

## Opción 1 · Publicar desde Git (recomendada)

1. Sube/actualiza los archivos en tu repositorio de GitHub.
2. En Netlify, el sitio ya está enlazado al repo. Cada vez que hagas
   *commit*, Netlify publica solo. No requiere comando de build:
   `netlify.toml` indica `publish = "."` (publica los archivos directamente).

## Opción 2 · Arrastrar y soltar

1. Entra a tu sitio en Netlify → pestaña **Deploys**.
2. Arrastra la carpeta del sitio a la zona "Drag and drop your site folder".
3. Listo: se publica al instante.

## Verificar que el contenido es indexable (adiós al "SM")

Tras desplegar, abre el sitio y haz **clic derecho → Ver código fuente**
(no "Inspeccionar"). Busca (Ctrl/Cmd+F) un texto como
**"Sé Música diseña, implementa"** en la home, o el titular de cualquier
página. Si aparece el texto real → el contenido es legible para buscadores
y motores de IA. Ya no aparece solo "SM".

Cada página incluye:

- un único `<h1>`, subtítulos `<h2>`/`<h3>` y párrafos reales dentro de
  un bloque `<noscript>` (invisible para los visitantes con JavaScript:
  React monta la versión interactiva idéntica sobre `#root`).
- metadatos Open Graph / Twitter, JSON-LD (datos estructurados) y
  `sitemap.xml` + `robots.txt` para indexación.

## Redirecciones (archivo `_redirects`)

- `/inicio` → `/`
- `/nosotros` → `/nuestra-historia.html`
- `/index.html` → `/`

Esto evita contenido duplicado y que las rutas antiguas compitan con la home.
