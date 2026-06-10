// prerender.mjs — Sé Música · pre-render fail-safe para Netlify (Opción A).
//
// Qué hace, en una frase: copia el sitio tal cual a dist/ (sigue funcionando
// igual que hoy) y, ENCIMA, inyecta en cada página el HTML ya renderizado por
// React dentro de #root, para que buscadores y motores de IA lean el contenido
// sin ejecutar JavaScript.
//
// Propiedad clave — A PRUEBA DE FALLOS: si el pre-render falla por cualquier
// motivo, el script NO rompe el despliegue. dist/ ya contiene el sitio que
// funciona (React + Babel en el navegador, idéntico a hoy); el pre-render solo
// AÑADE contenido estático. En el peor caso, el deploy queda como está hoy.
//
// No cambia nada visual ni funcional: React vuelve a montar sobre #root al
// cargar y reemplaza el contenido estático por la versión interactiva idéntica.
//
// Nota técnica: este script es SOLO para Node (lo ejecuta Netlify en el build:
// `node prerender.mjs`). Por eso todos los módulos se cargan con import()
// dinámico dentro de main() — así ningún empaquetador de navegador intenta
// resolver dependencias de Node al analizar el archivo.

async function main() {
  const { default: http } = await import('node:' + 'http');
  const { default: fs } = await import('node:' + 'fs');
  const { default: path } = await import('node:' + 'path');

  // Carpeta del propio script (equivale a __dirname, sin usar import.meta).
  const SRC = path.dirname(path.resolve(process.argv[1]));
  const DIST = path.join(SRC, 'dist');

  // Archivos/carpetas que NO se copian a dist (infra de build y herramientas dev).
  const EXCLUDE = new Set([
    'dist', 'node_modules', 'prerender.mjs', 'package.json', 'package-lock.json',
    'netlify.toml', '__prerender.html', '.git', '.netlify'
  ]);

  // ── 1 · Copiar el sitio a dist/ (esto solo ya deja un deploy funcional) ──
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });
  (function copyDir(from, to) {
    for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
      if (from === SRC && EXCLUDE.has(entry.name)) continue;
      const s = path.join(from, entry.name);
      const d = path.join(to, entry.name);
      if (entry.isDirectory()) { fs.mkdirSync(d, { recursive: true }); copyDir(s, d); }
      else fs.copyFileSync(s, d);
    }
  })(SRC, DIST);
  console.log('[prerender] sitio copiado a dist/');

  // ── 2 · Pre-render (envuelto en try/catch: nunca tumba el deploy) ──
  try {
    const { default: puppeteer } = await import('puppeteer');

    // Servidor estático mínimo sobre dist/ (sin dependencias).
    const MIME = {
      '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
      '.css': 'text/css', '.json': 'application/json', '.png': 'image/png',
      '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
      '.svg': 'image/svg+xml', '.xml': 'application/xml', '.txt': 'text/plain',
      '.ttf': 'font/ttf', '.woff': 'font/woff', '.woff2': 'font/woff2',
      '.ico': 'image/x-icon', '.webp': 'image/webp'
    };
    const server = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p === '/') p = '/index.html';
      const fp = path.join(DIST, p);
      if (fp.startsWith(DIST) && fs.existsSync(fp) && fs.statSync(fp).isFile()) {
        res.writeHead(200, { 'Content-Type': MIME[path.extname(fp).toLowerCase()] || 'application/octet-stream' });
        fs.createReadStream(fp).pipe(res);
      } else { res.writeHead(404); res.end('not found'); }
    });
    await new Promise(r => server.listen(0, r));
    const port = server.address().port;

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    // Páginas .html de primer nivel (no parciales/herramientas).
    const pages = fs.readdirSync(DIST).filter(f => f.endsWith('.html'));
    let ok = 0;
    for (const page of pages) {
      try {
        const tab = await browser.newPage();
        await tab.goto(`http://localhost:${port}/${page}`, { waitUntil: 'networkidle0', timeout: 60000 });
        // Esperar a que React monte (#root con hijos reales).
        await tab.waitForFunction(
          () => { const r = document.getElementById('root'); return r && r.children.length > 0; },
          { timeout: 60000 }
        );
        const rootHtml = await tab.evaluate(() => {
          const r = document.getElementById('root');
          return r ? r.innerHTML : '';
        });
        await tab.close();

        if (!rootHtml || rootHtml.length < 200) { console.warn('[prerender] sin contenido suficiente:', page); continue; }

        const file = path.join(DIST, page);
        let html = fs.readFileSync(file, 'utf8');
        const marker = '<div id="root"></div>';
        if (!html.includes(marker)) { console.warn('[prerender] sin marcador #root vacío:', page); continue; }
        const injected = '<div id="root"><!-- PRERENDER:START (HTML estático generado en el build · regenerable) -->'
          + rootHtml + '<!-- PRERENDER:END --></div>';
        html = html.split(marker).join(injected);
        fs.writeFileSync(file, html);
        ok++;
        console.log(`[prerender] OK ${page} (+${rootHtml.length} chars)`);
      } catch (e) {
        console.warn(`[prerender] falló ${page}: ${e.message} — se deja la versión client-side.`);
      }
    }

    await browser.close();
    server.close();
    console.log(`[prerender] terminado: ${ok}/${pages.length} páginas pre-renderizadas.`);
  } catch (e) {
    // Falla todo el pre-render (p. ej. Chromium no disponible): NO rompemos el deploy.
    console.warn('[prerender] omitido (' + e.message + '). dist/ conserva el sitio funcional client-side.');
  }
}

// Solo se ejecuta en Node (build de Netlify). En un navegador, no hace nada.
if (typeof process !== 'undefined' && process.versions && process.versions.node) {
  main();
}
