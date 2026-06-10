// DevDetail.jsx — plantilla de página interna de "desarrollo a medida".
// Reutiliza Button + Footer. Recibe `data` y un `screenshot` (nodo React: el mockup del producto).

const DDHeader = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const nav = [
    ["Servicios", "index.html#servicios"],
    ["Aula virtual", "index.html#desarrollos"],
    ["Mercado", "index.html#mercado"],
    ["Contacto", "index.html#contacto"],
  ];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.92)", backdropFilter: "saturate(160%) blur(12px)", WebkitBackdropFilter: "saturate(160%) blur(12px)", boxShadow: scrolled ? "var(--shadow-sm)" : "none", borderBottom: "1px solid var(--border)", transition: "box-shadow 220ms var(--ease-out)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "16px var(--gutter)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
        <a href="index.html" style={{ display: "inline-flex", alignItems: "center" }}>
          <img src="assets/logo-color.png" alt="Sé Música" style={{ height: 32, width: "auto", display: "block" }} />
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {nav.map(([l, h]) => (
            <a key={l} href={h} style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 400, color: "var(--sm-ink-2)", padding: "8px 14px", borderRadius: 10, textDecoration: "none" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--sm-blue-50)"; e.currentTarget.style.color = "var(--sm-blue)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--sm-ink-2)"; }}>
              {l}
            </a>
          ))}
        </nav>
        <Button variant="primary" size="sm" onClick={() => { window.location.href = "index.html#contacto"; }}>Agendar diagnóstico</Button>
      </div>
    </header>
  );
};

const DevBrowserFrame = ({ url = "semusica.com/aula", children }) => (
  <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--shadow-lg)", background: "#fff" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", background: "#EDEEF4", borderBottom: "1px solid var(--border)" }}>
      <div style={{ display: "flex", gap: 7 }}>
        {["#E0524D", "#E5A93D", "#5BBE5F"].map((c) => <span key={c} style={{ width: 12, height: 12, borderRadius: 999, background: c }} />)}
      </div>
      <div style={{ flex: 1, maxWidth: 460, margin: "0 auto", background: "#fff", border: "1px solid var(--border)", borderRadius: 8, padding: "6px 14px", fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--sm-ink-3)", textAlign: "center" }}>{url}</div>
    </div>
    <div className="sm-mock">{children}</div>
  </div>
);

const DevDetail = ({ data, screenshot }) => {
  const accent = data.accent === "green" ? "var(--sm-green)" : "var(--sm-blue)";
  const accentDark = data.accent === "green" ? "var(--sm-green-700)" : "var(--sm-blue-600)";
  const accentSoft = data.accent === "green" ? "var(--sm-green-50)" : "var(--sm-blue-50)";
  const heroBg = data.accent === "green" ? "var(--sm-green)" : "var(--sm-blue)";

  return (
    <div>
      <SiteHeader />

      {/* Hero */}
      <section style={{ background: heroBg, color: "#fff", padding: "var(--sp-20) var(--gutter) var(--sp-24)", position: "relative", overflow: "hidden" }}>
        <svg aria-hidden="true" viewBox="0 0 1440 600" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .3 }}>
          <ellipse cx="1180" cy="120" rx="640" ry="360" fill="none" stroke={data.accent === "green" ? "#fff" : "#00A859"} strokeWidth="1.4" opacity=".6" />
          <ellipse cx="1180" cy="120" rx="820" ry="460" fill="none" stroke={data.accent === "green" ? "#fff" : "#80D3A6"} strokeWidth="1" opacity=".4" />
        </svg>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", position: "relative" }}>
          <a href="index.html#desarrollos" style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.8)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
            Aula virtual
          </a>
          <div style={{ maxWidth: 860 }}>
            {data.labs && (
              <div style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.22)", borderRadius: 999, padding: "6px 14px 6px 6px", marginBottom: 20 }}>
                <span style={{ width: 24, height: 24, borderRadius: 7, background: "#fff", color: data.accent === "green" ? "var(--sm-green)" : "var(--sm-blue)", fontFamily: "var(--font-display-ext)", fontSize: 13, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>L</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff" }}>Sé Música Labs</span>
                <span style={{ color: "rgba(255,255,255,.5)" }}>·</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 400, color: "rgba(255,255,255,.85)" }}>{data.labs}</span>
              </div>
            )}
            <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: data.accent === "green" ? "#fff" : "#80D3A6", marginBottom: 18 }}>
              {data.tag}
            </div>
            {data.icon && (
              <BrandIcon name={data.icon} size={42} strokeWidth={1.5} color={data.accent === "green" ? "#fff" : "#80D3A6"} style={{ marginBottom: 18, opacity: 0.92 }} />
            )}
            <h1 style={{ fontFamily: "var(--font-display-ext)", fontSize: "clamp(1.9rem, 3.6vw, 3rem)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "0.01em", color: "#fff", margin: 0, textTransform: "uppercase", textWrap: "balance" }}>
              {data.title}
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 19, lineHeight: 1.55, color: "rgba(255,255,255,.86)", marginTop: 20, maxWidth: 680 }}>
              {data.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Screenshot principal — superpuesto sobre el hero */}
      <section style={{ background: `linear-gradient(to bottom, ${heroBg} 0%, ${heroBg} 90px, var(--sm-card) 90px, var(--sm-card) 100%)`, padding: "0 var(--gutter) var(--sp-24)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <DevBrowserFrame url={data.url}>{screenshot}</DevBrowserFrame>
          {data.caption && (
            <p style={{ fontFamily: "var(--font-sans)", fontStyle: "italic", fontSize: 14, color: "var(--sm-ink-3)", textAlign: "center", marginTop: 18 }}>{data.caption}</p>
          )}
        </div>
      </section>

      {/* Qué resuelve */}
      <section style={{ background: "var(--sm-surface)", padding: "var(--sp-24) var(--gutter)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 64, alignItems: "start" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: accent, marginBottom: 18 }}>
              —&nbsp;&nbsp;Qué resuelve
            </div>
            <h2 style={{ fontFamily: "var(--font-display-ext)", fontWeight: 700, fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", lineHeight: 1.08, letterSpacing: "0.01em", margin: 0, textTransform: "uppercase", color: "var(--sm-ink)", textWrap: "balance" }}>
              {data.problemaTitle}
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 18, lineHeight: 1.65, color: "var(--sm-ink-2)", margin: 0 }}>
            {data.problema}
          </p>
        </div>
      </section>

      {/* Funciones clave */}
      <section style={{ background: "var(--sm-card)", padding: "var(--sp-24) var(--gutter)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: accent, marginBottom: 44 }}>
            —&nbsp;&nbsp;Funciones clave
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, border: "1px solid var(--border)", borderRadius: 24, overflow: "hidden", background: "var(--sm-card)" }}>
            {data.funciones.map((f, i) => (
              <div key={f.t} style={{ padding: "32px 36px", borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none", borderBottom: i < data.funciones.length - 2 ? "1px solid var(--border)" : "none", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <span style={{ fontFamily: "var(--font-display-ext)", fontSize: 22, fontWeight: 700, color: accent }}>{String(i + 1).padStart(2, "0")}</span>
                  {f.icon && <BrandIcon name={f.icon} size={26} strokeWidth={1.6} color={accent} style={{ opacity: 0.8 }} />}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "var(--sm-ink)", margin: 0, textTransform: "uppercase", letterSpacing: "0.02em" }}>{f.t}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: "var(--sm-ink-3)", margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: heroBg, color: "#fff", padding: "var(--sp-20) var(--gutter)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display-ext)", fontWeight: 700, fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", lineHeight: 1.1, letterSpacing: "0.01em", margin: 0, textTransform: "uppercase", color: "#fff", textWrap: "balance" }}>
              ¿Lo quiere en su aula virtual?
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontStyle: "italic", fontWeight: 300, fontSize: 17, color: "rgba(255,255,255,.85)", marginTop: 12 }}>
              Le mostramos el módulo funcionando y lo adaptamos a su operación.
            </p>
          </div>
          <Button variant="onBrand" size="lg" onClick={() => window.semAgendar()}>Solicitar una demo</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

Object.assign(window, { DevDetail });
