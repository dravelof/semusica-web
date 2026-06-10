// ServiceDetail.jsx — plantilla de página interna de servicio (data-driven).
// Reutiliza Button + Footer del kit. Header propio (slim) que vuelve al home.
const { useState: useStateSD } = React;

const SDHeader = () => {
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
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.92)",
      backdropFilter: "saturate(160%) blur(12px)", WebkitBackdropFilter: "saturate(160%) blur(12px)",
      boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      borderBottom: "1px solid var(--border)",
      transition: "box-shadow 220ms var(--ease-out)",
    }}>
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

const ServiceDetail = ({ data }) => {
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
          <a href="index.html#servicios" style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.8)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
            Servicios
          </a>
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 28, alignItems: "start", maxWidth: 1000 }}>
            <div style={{ fontFamily: "var(--font-display-ext)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 0.9, color: data.accent === "green" ? "#fff" : "#80D3A6" }}>
              {data.n}
            </div>
            <div>
              {data.icon && (
                <BrandIcon name={data.icon} size={44} strokeWidth={1.5} color={data.accent === "green" ? "#fff" : "#80D3A6"} style={{ marginBottom: 22, opacity: 0.92 }} />
              )}
              <h1 style={{ fontFamily: "var(--font-display-ext)", fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "0.01em", color: "#fff", margin: 0, textTransform: "uppercase", textWrap: "balance" }}>
                {data.title}
              </h1>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 19, lineHeight: 1.55, color: "rgba(255,255,255,.86)", marginTop: 20, maxWidth: 640 }}>
                {data.intro}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 24 }}>
                {data.tags.map((t) => (
                  <span key={t} style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#fff", padding: "6px 14px", borderRadius: 4, background: "rgba(255,255,255,.14)" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alcance */}
      <section style={{ background: "var(--sm-card)", padding: "var(--sp-24) var(--gutter)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 64, alignItems: "start" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: accent, marginBottom: 18 }}>
              —&nbsp;&nbsp;Alcance
            </div>
            <h2 style={{ fontFamily: "var(--font-display-ext)", fontWeight: 700, fontSize: "clamp(1.7rem, 3vw, 2.4rem)", lineHeight: 1.05, letterSpacing: "0.01em", margin: 0, textTransform: "uppercase", color: "var(--sm-ink)", textWrap: "balance" }}>
              {data.alcanceTitle}
            </h2>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {data.alcance.map((a) => (
              <li key={a} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: "var(--font-sans)" }}>
                <span style={{ marginTop: 6, width: 18, height: 2, background: accent, flexShrink: 0 }} />
                <span style={{ fontSize: 16, fontWeight: 300, color: "var(--sm-ink-2)", lineHeight: 1.5 }}>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Poder / capacidades que nos distinguen (opcional) — banda fuerte */}
      {data.poder && (
        <section style={{ background: "var(--sm-blue)", color: "#fff", padding: "var(--sp-24) var(--gutter)", position: "relative", overflow: "hidden" }}>
          <svg aria-hidden="true" viewBox="0 0 1440 600" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .3 }}>
            <ellipse cx="1240" cy="120" rx="640" ry="360" fill="none" stroke="#00A859" strokeWidth="1.4" />
            <ellipse cx="1240" cy="120" rx="820" ry="460" fill="none" stroke="#80D3A6" strokeWidth="1" />
          </svg>
          <div style={{ maxWidth: "var(--container)", margin: "0 auto", position: "relative" }}>
            <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "center", marginBottom: 56 }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--sm-green-200)", marginBottom: 18 }}>
                  —&nbsp;&nbsp;Lo que nos distingue
                </div>
                <h2 style={{ fontFamily: "var(--font-display-ext)", fontWeight: 700, fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)", lineHeight: 1.05, letterSpacing: "0.01em", margin: 0, textTransform: "uppercase", color: "#fff", textWrap: "balance" }}>
                  {data.poder.title}
                </h2>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
                <div style={{ fontFamily: "var(--font-display-ext)", fontSize: "clamp(4rem, 9vw, 7rem)", fontWeight: 700, lineHeight: 0.9, color: "#fff" }}>{data.poder.stat}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 18, lineHeight: 1.45, color: "rgba(255,255,255,.85)", maxWidth: 260 }}>{data.poder.statLabel}</div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid rgba(255,255,255,.2)", borderRadius: 20, overflow: "hidden" }}>
              {data.poder.items.map((it, i) => (
                <div key={it.t} style={{
                  padding: "30px 28px",
                  borderLeft: i % 3 === 0 ? "none" : "1px solid rgba(255,255,255,.2)",
                  borderTop: i >= 3 ? "1px solid rgba(255,255,255,.2)" : "none",
                  display: "flex", flexDirection: "column", gap: 10,
                }}>
                  {it.icon && <BrandIcon name={it.icon} size={28} strokeWidth={1.6} color="var(--sm-green-200)" style={{ marginBottom: 4 }} />}
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#fff", margin: 0, textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1.2 }}>{it.t}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 300, lineHeight: 1.6, color: "rgba(255,255,255,.82)", margin: 0 }}>{it.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Niveles (opcional) */}
      {data.niveles && (
        <section style={{ background: "var(--sm-surface)", padding: "var(--sp-24) var(--gutter)", borderBottom: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
            <div style={{ marginBottom: 48, maxWidth: 640 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: accent, marginBottom: 18 }}>
                —&nbsp;&nbsp;Niveles de desarrollo
              </div>
              <h2 style={{ fontFamily: "var(--font-display-ext)", fontWeight: 700, fontSize: "clamp(1.7rem, 3vw, 2.4rem)", lineHeight: 1.05, letterSpacing: "0.01em", margin: 0, textTransform: "uppercase", color: "var(--sm-ink)", textWrap: "balance" }}>
                {data.nivelesTitle}
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {data.niveles.map((nv, i) => {
                const featured = i === 1;
                const nvAccent = featured ? "var(--sm-green)" : "var(--sm-blue)";
                return (
                  <article key={nv.t} style={{ background: "var(--sm-card)", border: "1px solid var(--border)", borderRadius: 20, padding: "36px 32px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: 16, boxShadow: featured ? "var(--shadow-md)" : "none" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: nvAccent }} />
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: featured ? "var(--sm-green-700)" : "var(--sm-blue-600)" }}>{nv.kicker}</span>
                      {nv.badge && <span style={{ fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", background: nvAccent, padding: "5px 11px", borderRadius: 999 }}>{nv.badge}</span>}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, lineHeight: 1.15, color: "var(--sm-ink)", margin: 0, textTransform: "uppercase", letterSpacing: "0.02em" }}>{nv.t}</h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                      {nv.features.map((f) => (
                        <li key={f} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 300, color: "var(--sm-ink-2)", lineHeight: 1.5 }}>
                          <span style={{ marginTop: 7, width: 7, height: 7, borderRadius: 999, background: nvAccent, flexShrink: 0 }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    {nv.tiempo && (
                      <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--border)", fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--sm-ink-3)" }}>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--sm-ink-4)", marginRight: 8 }}>Tiempo</span>
                        {nv.tiempo}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Metodología específica */}
      <section style={{ background: "var(--sm-surface)", padding: "var(--sp-24) var(--gutter)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <div style={{ marginBottom: 56, maxWidth: 620 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: accent, marginBottom: 18 }}>
              —&nbsp;&nbsp;Metodología específica
            </div>
            <h2 style={{ fontFamily: "var(--font-display-ext)", fontWeight: 700, fontSize: "clamp(1.7rem, 3vw, 2.4rem)", lineHeight: 1.05, letterSpacing: "0.01em", margin: 0, textTransform: "uppercase", color: "var(--sm-ink)", textWrap: "balance" }}>
              {data.metodoTitle}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0, border: "1px solid var(--border)", borderRadius: 24, overflow: "hidden", background: "var(--sm-card)" }}>
            {data.metodo.map((m, i) => (
              <div key={m.t} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 28, padding: "32px 40px", borderBottom: i < data.metodo.length - 1 ? "1px solid var(--border)" : "none", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ fontFamily: "var(--font-display-ext)", fontSize: 40, fontWeight: 700, color: accent, lineHeight: 1 }}>{String(i + 1).padStart(2, "0")}</div>
                  {m.icon && <BrandIcon name={m.icon} size={26} strokeWidth={1.6} color={accent} style={{ opacity: 0.7 }} />}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "0.7fr 1.3fr", gap: 28, alignItems: "baseline" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, color: "var(--sm-ink)", margin: 0, textTransform: "uppercase", letterSpacing: "0.03em" }}>{m.t}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: "var(--sm-ink-3)", margin: 0 }}>{m.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entregables (opcional) */}
      {data.entregables && (
      <section style={{ background: "var(--sm-card)", padding: "var(--sp-24) var(--gutter)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: accent, marginBottom: 40 }}>
            —&nbsp;&nbsp;Entregables
          </div>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(data.entregables.length, 5)}, 1fr)`, gap: 0, borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            {data.entregables.map((e, i) => (
              <div key={e} style={{ padding: "32px 24px", borderLeft: i === 0 ? "none" : "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ fontFamily: "var(--font-display-ext)", fontSize: 20, fontWeight: 700, color: accent }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 400, color: "var(--sm-ink)", lineHeight: 1.4 }}>{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* SLA (opcional) */}
      {data.sla && (
        <section style={{ background: "var(--sm-surface)", padding: "var(--sp-24) var(--gutter)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
            <div style={{ marginBottom: 44, maxWidth: 640 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: accent, marginBottom: 18 }}>
                —&nbsp;&nbsp;Niveles de servicio (SLA)
              </div>
              <h2 style={{ fontFamily: "var(--font-display-ext)", fontWeight: 700, fontSize: "clamp(1.7rem, 3vw, 2.4rem)", lineHeight: 1.05, letterSpacing: "0.01em", margin: 0, textTransform: "uppercase", color: "var(--sm-ink)", textWrap: "balance" }}>
                {data.slaTitle}
              </h2>
            </div>
            {data.slaText ? (
              <div style={{ display: "grid", gridTemplateColumns: "0.5fr 1.5fr", gap: 40, alignItems: "start", border: "1px solid var(--border)", borderRadius: 20, background: "var(--sm-card)", padding: "44px 48px" }}>
                <div style={{ fontFamily: "var(--font-display-ext)", fontSize: "clamp(2.6rem, 5vw, 4rem)", fontWeight: 700, color: accent, lineHeight: 0.95, textTransform: "uppercase" }}>
                  Los más<br />rápidos
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 18, lineHeight: 1.65, color: "var(--sm-ink-2)", margin: 0 }}>
                  {data.slaText}
                </p>
              </div>
            ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden", background: "var(--sm-card)" }}>
              {data.sla.map((s, i) => (
                <div key={s.t} style={{ padding: "32px 26px", borderLeft: i === 0 ? "none" : "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 14 }}>
                  <span style={{ fontFamily: "var(--font-display-ext)", fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", fontWeight: 700, color: accent, lineHeight: 1 }}>{s.time}</span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--sm-ink)" }}>{s.t}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: "var(--sm-ink-3)" }}>{s.d}</span>
                </div>
              ))}
            </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: heroBg, color: "#fff", padding: "var(--sp-20) var(--gutter)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display-ext)", fontWeight: 700, fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", lineHeight: 1.1, letterSpacing: "0.01em", margin: 0, textTransform: "uppercase", color: "#fff", textWrap: "balance" }}>
              ¿Conversamos sobre su caso?
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontStyle: "italic", fontWeight: 300, fontSize: 17, color: "rgba(255,255,255,.85)", marginTop: 12 }}>
              Una reunión de diagnóstico de 30 min. Sin venta, sin presión.
            </p>
          </div>
          <Button variant="onBrand" size="lg" onClick={() => window.semAgendar()}>Agendar diagnóstico</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

Object.assign(window, { ServiceDetail });
