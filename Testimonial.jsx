// Testimonial.jsx — green-block quote that mirrors the brand-book "gráfica con fotografía" Titular treatment.
const Testimonial = ({ quote, name, role, org }) => {
  return (
    <section style={{ position: "relative", overflow: "hidden", margin: "var(--sp-24) 0 0", background: "var(--sm-surface)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "var(--sm-green)" }}>
          {/* Curved white area on the right — the brand-book asymmetric block */}
          <svg aria-hidden="true" viewBox="0 0 1200 460" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <defs>
              <linearGradient id="testiArc" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3E4095" stopOpacity="0" />
                <stop offset="100%" stopColor="#3E4095" stopOpacity=".5" />
              </linearGradient>
            </defs>
            <path d="M0,460 C260,260 520,420 760,140 C880,0 1100,40 1200,80 L1200,460 Z" fill="#008C4A" opacity="0.45" />
            <path d="M-40,360 C420,180 740,300 1180,80" stroke="url(#testiArc)" strokeWidth="2" fill="none" opacity="0.6" />
          </svg>

          <div style={{ position: "relative", padding: "64px 64px 60px", display: "grid", gridTemplateColumns: "1fr 280px", gap: 48, alignItems: "center" }}>
            <div style={{ color: "#fff", fontFamily: "var(--font-sans)" }}>
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none" style={{ marginBottom: 16, opacity: .9 }}>
                <path d="M0 32V16C0 7.16 7.16 0 16 0v6C10.48 6 6 10.48 6 16h10v16H0zm24 0V16C24 7.16 31.16 0 40 0v6c-5.52 0-10 4.48-10 10h10v16H24z" fill="#fff" opacity="0.65"/>
              </svg>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(1.5rem, 2.4vw, 2rem)", lineHeight: 1.25, letterSpacing: "0.01em", margin: 0, textWrap: "balance" }}>
                {quote}
              </p>
              <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: 999, background: "rgba(255,255,255,.18)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff" }}>
                  {name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{name}</div>
                  <div style={{ fontSize: 13, opacity: .85 }}>{role} · {org}</div>
                </div>
              </div>
            </div>

            <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
              <div style={{ background: "rgba(255,255,255,.14)", borderRadius: 12, padding: "14px 16px", color: "#fff" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", opacity: .8 }}>Implementación</div>
                <div style={{ fontSize: 14, marginTop: 4 }}>8 semanas · LMS personalizado</div>
              </div>
              <div style={{ background: "rgba(255,255,255,.14)", borderRadius: 12, padding: "14px 16px", color: "#fff" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", opacity: .8 }}>Alcance</div>
                <div style={{ fontSize: 14, marginTop: 4 }}>3.200 colaboradores capacitados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Testimonial });
