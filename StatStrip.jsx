// StatStrip.jsx — "Quiénes somos" credibility row from Brochure 2026.
const StatStrip = () => {
  const stats = [
    { value: "14", icon: "clock", label: "años de experiencia", caption: "Pioneros en e-learning regional desde 2011." },
    { value: "14", icon: "globe", label: "países de LATAM atendidos", caption: "Implementaciones en toda Latinoamérica." },
    { value: "60,000+", icon: "users", label: "personas capacitadas", caption: "A través de aulas y programas que diseñamos." },
  ];
  return (
    <section id="nosotros" style={{ background: "var(--sm-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "var(--sp-20) var(--gutter)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "end", marginBottom: 56 }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--sm-blue)", marginBottom: 18 }}>
              —&nbsp;&nbsp;01 · Quiénes somos
            </div>
            <h2 style={{ fontFamily: "var(--font-display-ext)", fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 3.1rem)", lineHeight: 1.05, letterSpacing: "0.01em", margin: 0, textTransform: "uppercase", color: "var(--sm-ink)" }}>
              14 años<br />implementando<br />aprendizaje
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 18, lineHeight: 1.6, color: "var(--sm-ink-2)", margin: 0, maxWidth: 520 }}>
              <strong style={{ fontWeight: 600 }}>Pioneros en e-learning en Latinoamérica.</strong> Sé Música es una entidad pionera en soluciones de e-learning en Latinoamérica. Desde hace 14 años trascendemos el ámbito musical para brindar servicios de implementación digital a instituciones educativas y corporativas.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 17, lineHeight: 1.6, color: "var(--sm-ink-2)", marginTop: 20, marginBottom: 0, maxWidth: 520 }}>
              Nuestro trabajo se concentra en tres frentes: la <strong style={{ fontWeight: 600, color: "var(--sm-ink)" }}>personalización de aulas virtuales</strong>, la <strong style={{ fontWeight: 600, color: "var(--sm-ink)" }}>virtualización de cursos</strong> y los <strong style={{ fontWeight: 600, color: "var(--sm-ink)" }}>programas de capacitación técnica y metodológica</strong> — diseñados para maximizar la eficacia del aprendizaje en línea.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--border)" }}>
          {stats.map((s, i) => (
            <div key={i} className="m-stat-cell" style={{
              display: "flex", flexDirection: "column", gap: 8,
              fontFamily: "var(--font-sans)",
              padding: "36px 32px 36px 0",
              borderLeft: i === 0 ? "none" : "1px solid var(--border)",
              paddingLeft: i === 0 ? 0 : 32,
            }}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 18 }}>
                <div style={{ fontFamily: "var(--font-display-ext)", fontSize: "clamp(3rem, 5.5vw, 4.6rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "0.005em", color: i === 1 ? "var(--sm-green)" : "var(--sm-blue)" }}>
                  {s.value}
                </div>
                <BrandIcon name={s.icon} size={38} strokeWidth={1.6} color={i === 1 ? "var(--sm-green)" : "var(--sm-blue)"} style={{ marginBottom: 8, opacity: 0.55, flexShrink: 0 }} />
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--sm-ink)", marginTop: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {s.label}
              </div>
              <div style={{ fontSize: 13, fontWeight: 300, color: "var(--sm-ink-3)", lineHeight: 1.5, maxWidth: 280 }}>
                {s.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { StatStrip });
