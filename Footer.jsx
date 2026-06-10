// Footer.jsx — solid blue footer, brochure 2026 voice + contacto.
const Footer = () => {
  const columns = [
    {
      title: "Servicios",
      links: [
        { label: "Consultoría y ecosistemas digitales", href: "servicio-consultoria.html" },
        { label: "Virtualización de cursos", href: "servicio-virtualizacion.html" },
        { label: "Aulas virtuales a medida", href: "servicio-aulas-virtuales.html" },
        { label: "Sé Música Labs", href: "index.html#desarrollos" },
        { label: "Gamificación interactiva", href: "servicio-virtualizacion.html" },
      ],
    },
    {
      title: "Sectores",
      links: [
        { label: "Retail", href: "index.html#sectores" },
        { label: "Construcción", href: "index.html#sectores" },
        { label: "Minería", href: "index.html#sectores" },
        { label: "Servicios financieros", href: "index.html#sectores" },
        { label: "Salud", href: "index.html#sectores" },
        { label: "Industria", href: "index.html#sectores" },
      ],
    },
    {
      title: "Sé Música",
      links: [
        { label: "Nuestra historia y enfoque", href: "nuestra-historia.html" },
        { label: "Quiénes somos", href: "index.html#nosotros" },
        { label: "Nuestra misión", href: "index.html#mision" },
        { label: "Acción social", href: "index.html#accion" },
        { label: "Blog", href: "blog.html" },
        { label: "Mercado LATAM", href: "index.html#mercado" },
        { label: "Conversemos", href: "index.html#contacto" },
      ],
    },
  ];

  return (
    <footer style={{ position: "relative", background: "#0F1146", color: "#fff", overflow: "hidden" }}>
      {/* Closer line — tagline restated, brochure-style */}
      <div style={{ background: "var(--sm-blue)", padding: "var(--sp-20) var(--gutter)", position: "relative", overflow: "hidden" }}>
        <svg aria-hidden="true" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .3 }}>
          <ellipse cx="720" cy="500" rx="900" ry="420" fill="none" stroke="#00A859" strokeWidth="1.4" />
          <ellipse cx="720" cy="500" rx="1100" ry="540" fill="none" stroke="#80D3A6" strokeWidth="1" />
        </svg>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", position: "relative", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-display-ext)", fontSize: "clamp(2rem, 4.4vw, 3.8rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "0.01em", textTransform: "uppercase", color: "#fff", textWrap: "balance" }}>
            Tecnologías digitales para la <span style={{ color: "#80D3A6" }}>formación humana</span>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(1rem, 1.5vw, 1.2rem)", lineHeight: 1.6, color: "rgba(255,255,255,.82)", maxWidth: 780, margin: "22px auto 0", textWrap: "balance" }}>
            Ayudamos a las organizaciones a formar equipos capaces de <span style={{ fontStyle: "normal", fontWeight: 500, color: "#fff" }}>pensar, sentir, imaginar, decidir y actuar con conciencia</span> en una época tecnológica.
          </p>
          <div style={{ marginTop: 28, fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,.72)", display: "flex", justifyContent: "center", gap: 18, flexWrap: "wrap" }}>
            <span>Sé Música · 2026</span>
            <span style={{ opacity: .5 }}>·</span>
            <span>contacto@semusica.com</span>
            <span style={{ opacity: .5 }}>·</span>
            <span>semusica.com</span>
          </div>
        </div>
      </div>

      {/* Sitemap */}
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "64px var(--gutter) 36px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          <img src="assets/logo-white.png" alt="Sé Música" style={{ height: 36, width: "auto", display: "block", marginBottom: 24 }} />
          <p style={{ fontFamily: "var(--font-sans)", fontStyle: "italic", fontWeight: 300, fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,.78)", maxWidth: 340, margin: 0 }}>
            E-learning corporativo diseñado con la precisión, creatividad y eficacia que su empresa requiere.
          </p>
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10, fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,.85)" }}>
            <div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", display: "block", marginBottom: 4 }}>Correo</span>
              contacto@semusica.com
            </div>
            <div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", display: "block", marginBottom: 4 }}>Lima, Perú</span>
              Sé Música EIRL — atendemos a toda Latinoamérica
            </div>
          </div>

          <a href="libro-de-reclamaciones.html" style={{ marginTop: 24, display: "inline-flex", alignItems: "center", gap: 9, color: "rgba(255,255,255,.72)", border: "1px solid rgba(255,255,255,.22)", borderRadius: 8, padding: "8px 13px", textDecoration: "none", maxWidth: "fit-content" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,.45)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,.72)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.22)"; }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4 4h11l5 5v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M14 4v5h5"/><line x1="8" y1="13" x2="15" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 400, letterSpacing: "0.01em", lineHeight: 1.15 }}>Libro de Reclamaciones</span>
          </a>

          <a href="https://www.linkedin.com/company/sé-música" target="_blank" rel="noopener noreferrer" style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,.85)", textDecoration: "none", fontFamily: "var(--font-sans)", fontSize: 14 }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#80D3A6"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,.85)"; }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0z"/></svg>
            Síguenos en LinkedIn
          </a>
        </div>

        {columns.map((c) => (
          <div key={c.title}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#80D3A6", marginBottom: 18 }}>
              —&nbsp;&nbsp;{c.title}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 14, color: "rgba(255,255,255,.82)", textDecoration: "none", transition: "color 140ms" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#80D3A6")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.82)")}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "20px var(--gutter)", borderTop: "1px solid rgba(255,255,255,.14)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,.6)" }}>
        <div>© {new Date().getFullYear()} Sé Música EIRL. Todos los derechos reservados.</div>
        <div style={{ display: "flex", gap: 18 }}>
          <a href="politica-privacidad.html" style={{ color: "inherit", textDecoration: "none", transition: "color 140ms" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#80D3A6")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}>Política de privacidad</a>
          <a href="politica-privacidad.html#cookies" style={{ color: "inherit", textDecoration: "none", transition: "color 140ms" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#80D3A6")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}>Cookies</a>
          <a href="#" onClick={(e) => { e.preventDefault(); if (window.semAbrirCookies) window.semAbrirCookies(); }} style={{ color: "inherit", textDecoration: "none", transition: "color 140ms" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#80D3A6")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}>Configurar cookies</a>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Footer });
