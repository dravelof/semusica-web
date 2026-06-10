// App.jsx — Sé Música marketing site, aligned with Brochure Corporativo 2026.
const { useState } = React;

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// Section helpers
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
const Eyebrow = ({ index, label, color = "var(--sm-blue)" }) => (
  <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color, marginBottom: 18, display: "flex", alignItems: "center", gap: 10 }}>
    <span>—</span>
    {index ? <span>{index}</span> : null}
    {index ? <span style={{ opacity: .5 }}>·</span> : null}
    <span>{label}</span>
  </div>
);

const DisplayTitle = ({ children, color = "var(--sm-ink)" }) => (
  <h2 style={{ fontFamily: "var(--font-display-ext)", fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 3.1rem)", lineHeight: 1.05, letterSpacing: "0.01em", margin: 0, textTransform: "uppercase", color, textWrap: "balance" }}>
    {children}
  </h2>
);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// 02 · Servicios — cuatro líneas del brochure
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
const Servicios = () => {
  const items = [
    {
      n: "01",
      slug: "servicio-consultoria",
      icon: "compass",
      title: "Consultoría y desarrollo de ecosistemas educativos digitales",
      body: "Asesoría personalizada y horas de consultoría para crear o mejorar ecosistemas digitales — asegurando que su empresa esté a la vanguardia en capacitación.",
      tags: ["Diagnóstico", "Roadmap", "Gobernanza"],
      accent: "blue",
    },
    {
      n: "02",
      slug: "servicio-virtualizacion",
      icon: "play-circle",
      title: "Virtualización de cursos empresariales",
      body: "Transformamos sus programas en multimedia interactivo — guion, ilustración, locución y animación — empaquetado en SCORM. Dos niveles: estándar y avanzado/gamificado.",
      tags: ["Diseño instruccional", "SCORM 1.2", "Gamificación"],
      accent: "green",
    },
    {
      n: "03",
      slug: "servicio-aulas-virtuales",
      icon: "building-2",
      title: "Instalación, soporte y mantenimiento de aulas virtuales",
      body: "Implementamos su aula virtual en la nube, personalizada con su identidad, con soporte técnico y actualizaciones que garantizan operatividad continua.",
      tags: ["A medida", "Cloud", "Soporte 24/7"],
      accent: "blue",
    },
  ];

  return (
    <section id="servicios" style={{ background: "var(--sm-surface)", padding: "var(--sp-24) var(--gutter)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "end", marginBottom: 56 }}>
          <div>
            <Eyebrow index="02" label="Servicios corporativos" />
            <DisplayTitle>Tres líneas<br />de servicio</DisplayTitle>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 18, lineHeight: 1.6, color: "var(--sm-ink-2)", margin: 0, maxWidth: 500 }}>
            Cubrimos el ciclo completo de e-learning corporativo: desde la estrategia hasta la operación diaria de las plataformas. Puede contratarnos por servicio o como <em style={{ fontWeight: 400 }}>partner integral</em>.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid var(--border)", borderRadius: 24, overflow: "hidden", background: "var(--sm-card)" }}>
          {items.map((it, i) => {
            const accentColor = it.accent === "green" ? "var(--sm-green)" : "var(--sm-blue)";
            const accentDark  = it.accent === "green" ? "var(--sm-green-700)" : "var(--sm-blue-600)";
            const borderRight = i < 2 ? "1px solid var(--border)" : "none";
            const borderBottom = "none";
            return (
              <article key={it.n} className="m-card" style={{ padding: "44px 40px", borderRight, borderBottom, display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: 64, height: 4, background: accentColor }} />
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  <span style={{ fontFamily: "var(--font-display-ext)", fontSize: 44, fontWeight: 700, color: accentColor, lineHeight: 1 }}>{it.n}</span>
                  <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                  <BrandIcon name={it.icon} size={30} strokeWidth={1.6} color={accentColor} style={{ opacity: 0.85 }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, lineHeight: 1.2, color: "var(--sm-ink)", margin: 0, textTransform: "uppercase", letterSpacing: "0.02em", textWrap: "balance" }}>
                  {it.title}
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: "var(--sm-ink-3)", margin: 0 }}>
                  {it.body}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6 }}>
                  {it.tags.map((t) => (
                    <span key={t} style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase",
                      color: accentDark,
                      padding: "6px 12px",
                      borderRadius: 4,
                      background: it.accent === "green" ? "var(--sm-green-50)" : "var(--sm-blue-50)",
                    }}>{t}</span>
                  ))}
                </div>
                <a href={`${it.slug}.html`} style={{ marginTop: 10, fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: accentColor, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}
                  onMouseEnter={(e) => { e.currentTarget.style.gap = "12px"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.gap = "8px"; }}>
                  Ver servicio
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// 03 · Misión — solid blue block + italic quote + 3 pilares
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
const Mision = () => (
  <section id="mision" style={{ background: "var(--sm-blue)", color: "#fff", padding: "var(--sp-24) var(--gutter)", position: "relative", overflow: "hidden" }}>
    <svg aria-hidden="true" viewBox="0 0 1440 600" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .35 }}>
      <ellipse cx="720" cy="900" rx="900" ry="520" fill="none" stroke="#00A859" strokeWidth="1.4" opacity=".55" />
      <ellipse cx="720" cy="900" rx="1100" ry="640" fill="none" stroke="#80D3A6" strokeWidth="1" opacity=".4" />
    </svg>
    <div style={{ maxWidth: "var(--container)", margin: "0 auto", position: "relative" }}>
      <Eyebrow index="03" label="Nuestra misión" color="rgba(255,255,255,.78)" />
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "start", maxWidth: 1100 }}>
        <div style={{ fontFamily: "var(--font-display-ext)", fontSize: 120, lineHeight: 0.8, fontWeight: 700, color: "#80D3A6", marginTop: -12 }}>
          “
        </div>
        <p style={{ fontFamily: "var(--font-sans)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", lineHeight: 1.3, color: "#fff", margin: 0, maxWidth: 880, textWrap: "balance" }}>
          Fortalecer las capacidades de su organización a través de <span style={{ fontStyle: "normal", fontWeight: 600 }}>soluciones educativas digitales innovadoras y efectivas</span>, garantizando una oferta formativa acorde con los desafíos y oportunidades del mercado actual.
        </p>
      </div>

      <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid rgba(255,255,255,.18)" }}>
        {[
          { n: "I", icon: "graduation-cap", title: "Pedagogía y andragogía", body: "Diseño centrado en quien aprende, no en el software — con especialización en andragogía, el arte de formar adultos. Cada decisión arranca de un objetivo formativo verificable." },
          { n: "II", icon: "sparkle", title: "Estética", body: "Cada pantalla compuesta con cuidado artesanal. La forma comunica el rigor del contenido." },
          { n: "III", icon: "cpu", title: "Tecnología invisible", body: "Plataformas que no estorban. El aprendizaje brilla; la infraestructura desaparece." },
        ].map((p, i) => (
          <div key={p.n} className="m-pillar" style={{
            padding: "36px 36px 0 0",
            paddingLeft: i === 0 ? 0 : 36,
            borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,.18)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
              <BrandIcon name={p.icon} size={26} strokeWidth={1.6} color="#80D3A6" />
              <div style={{ fontFamily: "var(--font-display-ext)", fontSize: 14, fontWeight: 700, letterSpacing: "0.22em", color: "#80D3A6" }}>
                {p.n}
              </div>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "#fff", marginBottom: 12 }}>
              {p.title}
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: "rgba(255,255,255,.78)", margin: 0 }}>
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// 04 · Mercado LATAM
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
const Mercado = () => {
  const stats = [
    { value: "USD 3.4B", label: "Mercado e-learning LATAM 2024", source: "Holoniq" },
    { value: "+14%", label: "Crecimiento anual estimado al 2030", source: "Statista" },
    { value: "7 de 10", label: "Empresas LATAM han adoptado plataformas LMS", source: "GlobalData" },
    { value: "60%", label: "Reducción promedio en costos vs. capacitación presencial", source: "Brandon Hall" },
  ];
  return (
    <section id="mercado" style={{ background: "var(--sm-card)", padding: "var(--sp-24) var(--gutter)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end", marginBottom: 56 }}>
          <div>
            <Eyebrow index="04" label="Contexto de mercado" />
            <DisplayTitle>El e-learning<br />corporativo en<br />Latinoamérica</DisplayTitle>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 18, lineHeight: 1.6, color: "var(--sm-ink-2)", margin: 0, maxWidth: 500 }}>
            La región vive una transformación acelerada en formación corporativa. La pregunta ya no es <em style={{ fontWeight: 400 }}>si</em> virtualizar — es <strong style={{ fontWeight: 600 }}>cómo hacerlo bien</strong>.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          {stats.map((s, i) => (
            <div key={i} className="m-card" style={{
              padding: "40px 28px",
              borderLeft: i === 0 ? "none" : "1px solid var(--border)",
              display: "flex", flexDirection: "column", gap: 14,
            }}>
              <div style={{ fontFamily: "var(--font-display-ext)", fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)", fontWeight: 700, lineHeight: 1, letterSpacing: "0.005em", color: i % 2 === 0 ? "var(--sm-blue)" : "var(--sm-green)" }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 400, lineHeight: 1.45, color: "var(--sm-ink)", flex: 1 }}>
                {s.label}
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--sm-ink-3)" }}>
                Fuente · {s.source}
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: "var(--font-sans)", fontStyle: "italic", fontSize: 12, fontWeight: 300, color: "var(--sm-ink-3)", marginTop: 18, marginBottom: 0, maxWidth: 720 }}>
          Cifras referenciales tomadas de reportes públicos 2023–2024. El mercado evoluciona rápido — las cifras son indicativas de tendencia, no proyecciones cerradas.
        </p>
      </div>
    </section>
  );
};

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// 05 · Acción social
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
const AccionSocial = () => (
  <section id="accion" style={{ background: "var(--sm-green)", color: "#fff", padding: "var(--sp-24) var(--gutter)", position: "relative", overflow: "hidden" }}>
    <svg aria-hidden="true" viewBox="0 0 1440 600" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .35 }}>
      <ellipse cx="200" cy="-200" rx="800" ry="500" fill="none" stroke="#fff" strokeWidth="1" opacity=".4" />
      <ellipse cx="200" cy="-200" rx="1000" ry="620" fill="none" stroke="#fff" strokeWidth="1" opacity=".25" />
    </svg>
    <div style={{ maxWidth: "var(--container)", margin: "0 auto", position: "relative" }}>
      <Eyebrow index="05" label="Acción social" color="rgba(255,255,255,.8)" />
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "start" }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-display-ext)", fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1.05, letterSpacing: "0.01em", margin: 0, textTransform: "uppercase", color: "#fff", textWrap: "balance" }}>
            Docentes formados<br />gratuitamente durante<br />la pandemia
          </h2>
          <div style={{ marginTop: 24, display: "flex", gap: 18, flexWrap: "wrap", fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.92)" }}>
            <span>14 países</span>
            <span style={{ opacity: .5 }}>·</span>
            <span>3 programas</span>
            <span style={{ opacity: .5 }}>·</span>
            <span>2020–2022</span>
          </div>
          <div style={{ marginTop: 36, display: "flex", alignItems: "baseline", gap: 18, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-display-ext)", fontSize: "clamp(3rem, 5.5vw, 4.6rem)", fontWeight: 700, lineHeight: 0.95, color: "#fff", letterSpacing: "0.005em" }}>+4,500</span>
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 17, lineHeight: 1.4, color: "rgba(255,255,255,.9)", maxWidth: 200 }}>docentes capacitados gratuitamente.</span>
          </div>
        </div>

        <div className="m-accion-aside" style={{ borderLeft: "1px solid rgba(255,255,255,.3)", paddingLeft: 36 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.78)", marginBottom: 14 }}>
            —&nbsp;&nbsp;Lo que hicimos
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontStyle: "italic", fontWeight: 300, fontSize: 19, lineHeight: 1.55, color: "#fff", margin: 0, maxWidth: 460 }}>
            Cuando los escenarios cerraron, lanzamos 3 programas de <strong style={{ fontStyle: "normal", fontWeight: 600 }}>Formación de Competencias Digitales para la Enseñanza Remota.</strong>
          </p>
          <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.25)", fontFamily: "var(--font-sans)", fontSize: 14, color: "rgba(255,255,255,.85)" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.7)", display: "block", marginBottom: 6 }}>Aliado institucional</span>
            Ministerio de Cultura del Perú
          </div>
        </div>
      </div>

      <div className="m-accion-photo" style={{ marginTop: 56, borderRadius: 20, overflow: "hidden", aspectRatio: "21 / 7", boxShadow: "var(--shadow-lg)" }}>
        <PhotoSlot photoKey="accionSocial" tone="blue" label="Acción social" hint="Docentes en una capacitación / formación remota" radius={20} priority={false} />
      </div>
    </div>
  </section>
);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// 06 · Clientes y sectores — logo wall (pendiente) + verticales
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
const ClientesSectores = () => {
  const verticales = [
    "Retail",
    "Construcción",
    "Minería",
    "Servicios financieros",
    "Salud",
    "Industria",
  ];
  return (
    <section id="sectores" style={{ background: "var(--sm-surface)", padding: "var(--sp-24) var(--gutter)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <Eyebrow index="06" label="Clientes y sectores" />

        {/* Headline + intro */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "start", marginBottom: 56 }}>
          <DisplayTitle>Confían<br />en nosotros</DisplayTitle>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 18, lineHeight: 1.6, color: "var(--sm-ink-2)", margin: 0, maxWidth: 460, alignSelf: "center" }}>
            Instituciones educativas y corporativas de toda Latinoamérica implementan su formación digital con nosotros — sin pausar su operación.
          </p>
        </div>

        {/* Logo wall — clientes */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0, border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden", background: "var(--sm-card)", marginBottom: 96 }}>
          {[
            { src: "minsur", alt: "Minsur" },
            { src: "raura", alt: "Compañía Minera Raura" },
            { src: "unicon", alt: "Unicon" },
            { src: "sgs-academy", alt: "SGS Academy" },
            { src: "upc", alt: "UPC" },
            { src: "projazz", alt: "Instituto Profesional Projazz", contained: true, bg: "#0e0e10" },
            { src: "marcobre", alt: "Marcobre" },
            { src: "tottus", alt: "Tottus" },
            { src: "layher", alt: "Layher" },
            { src: "escuela-moderna", alt: "Escuela Moderna de Música y Danza", contained: true, bg: "#ff0005" },
            { src: "emmat-online", alt: "EMMAT Online" },
            { src: "unm", alt: "Universidad Nacional de Música" },
          ].map((c, i) => (
            <div key={c.src} style={{
              aspectRatio: "3 / 2",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: c.cover ? 0 : (c.contained ? "18px 22px" : "26px 28px"),
              background: c.bg || "transparent",
              borderLeft: i % 6 === 0 ? "none" : "1px solid var(--border)",
              borderTop: i >= 6 ? "1px solid var(--border)" : "none",
              overflow: "hidden",
            }}>
              <img
                src={`assets/clients/${c.src}.png`}
                alt={c.alt}
                title={c.alt}
                style={c.cover
                  ? { width: "100%", height: "100%", objectFit: "cover", display: "block" }
                  : { maxWidth: "100%", maxHeight: 64, width: "auto", height: "auto", objectFit: "contain", display: "block" }}
              />
            </div>
          ))}
        </div>

        {/* Verticales */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56, alignItems: "end", marginBottom: 32 }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--sm-blue)", marginBottom: 14 }}>
              —&nbsp;&nbsp;Sectores que atendemos
            </div>
            <DisplayTitle>Seis verticales,<br />una metodología</DisplayTitle>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0, borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          {verticales.map((v, i) => (
            <div key={v} style={{
              padding: "36px 16px",
              borderLeft: i === 0 ? "none" : "1px solid var(--border)",
              display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start",
            }}>
              <div style={{ fontFamily: "var(--font-display-ext)", fontSize: 22, fontWeight: 700, color: i % 2 === 0 ? "var(--sm-blue)" : "var(--sm-green)", letterSpacing: "0.005em" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sm-ink)", lineHeight: 1.3 }}>
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// 07 · Conversemos — CTA de contacto
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
const Contacto = () => {
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" style={{ background: "var(--sm-blue)", padding: "var(--sp-24) var(--gutter)", position: "relative", overflow: "hidden", color: "#fff" }}>
      <svg aria-hidden="true" viewBox="0 0 1440 700" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .35 }}>
        <ellipse cx="1240" cy="200" rx="700" ry="380" fill="none" stroke="#00A859" strokeWidth="1.4" opacity=".6" />
        <ellipse cx="1240" cy="200" rx="900" ry="500" fill="none" stroke="#80D3A6" strokeWidth="1" opacity=".4" />
      </svg>

      <div style={{ maxWidth: "var(--container)", margin: "0 auto", position: "relative" }}>
        <Eyebrow index="07" label="Conversemos" color="rgba(255,255,255,.78)" />

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display-ext)", fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1.05, letterSpacing: "0.01em", margin: 0, textTransform: "uppercase", color: "#fff", textWrap: "balance" }}>
              ¿Acaso existe<br />algo más importante<br />que ayudar a formar<br />a un <span style={{ color: "#80D3A6" }}>ser humano</span>?
            </h2>

            <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr", gap: 18, maxWidth: 460 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.78)" }}>
                —&nbsp;&nbsp;Propuesta
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontStyle: "italic", fontSize: 19, fontWeight: 300, lineHeight: 1.5, margin: 0, color: "#fff" }}>
                Una reunión de diagnóstico de 30 min. <strong style={{ fontStyle: "normal", fontWeight: 600 }}>Sin venta, sin presión.</strong>
              </p>
            </div>

            <div style={{ marginTop: 44, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,.2)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, fontFamily: "var(--font-sans)" }}>
                {[
                  ["Correo", "contacto@semusica.com"],
                  ["Web", "semusica.com"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.6)", marginBottom: 6 }}>
                      {k}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 400, color: "#fff" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form card */}
          {sent ? (
            <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.18)", borderRadius: 24, padding: 40, backdropFilter: "blur(8px)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#80D3A6" }}>
                —&nbsp;&nbsp;Solicitud recibida
              </div>
              <h3 style={{ fontFamily: "var(--font-display-ext)", fontWeight: 700, fontSize: 28, lineHeight: 1.1, marginTop: 14, marginBottom: 14, textTransform: "uppercase", color: "#fff" }}>
                Casi listo, {form.nombre.split(" ")[0] || "un último paso"}.
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,.85)", margin: 0 }}>
                Abrimos su aplicación de correo con la consulta ya redactada. <strong style={{ fontWeight: 600, color: "#fff" }}>Complete el envío pulsando “Enviar” desde su cuenta de correo</strong> para que la recibamos en contacto@semusica.com. Le responderemos dentro de las próximas 24 horas hábiles.
              </p>
              <div style={{ marginTop: 24 }}>
                <Button variant="onBrand" onClick={() => { setSent(false); setForm({ nombre: "", empresa: "", email: "", mensaje: "" }); }}>Enviar otra consulta</Button>
              </div>
            </div>
          ) : (
            <form name="contacto" method="POST" action="index.html?enviado=contacto" data-netlify="true" netlify-honeypot="bot-field" onSubmit={(e) => window.semSubmitForm(e, "contacto")} className="sm-form-onbrand" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.18)", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", gap: 16, backdropFilter: "blur(8px)" }}>
              <input type="hidden" name="form-name" value="contacto" />
              <p style={{ display: "none" }}><label>No llenar: <input name="bot-field" /></label></p>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#80D3A6", marginBottom: 4 }}>
                —&nbsp;&nbsp;Agendar diagnóstico
              </div>
              <Field onBrand name="nombre" required label="Nombre completo" value={form.nombre} onChange={(v) => setForm({ ...form, nombre: v })} placeholder="María Gutiérrez" />
              <Field onBrand name="empresa" label="Empresa" value={form.empresa} onChange={(v) => setForm({ ...form, empresa: v })} placeholder="Nombre de su empresa" />
              <Field onBrand name="email" required label="Correo corporativo" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="usted@empresa.com" />
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,.92)" }}>¿Qué desea resolver?</span>
                <textarea
                  rows={4}
                  name="mensaje"
                  required
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  placeholder="Cuéntenos brevemente el alcance del proyecto…"
                  style={{ font: "inherit", fontSize: 14, fontWeight: 300, padding: "10px 14px", border: "1px solid rgba(255,255,255,.22)", borderRadius: 8, background: "rgba(255,255,255,.08)", color: "#fff", outline: "none", resize: "vertical" }}
                />
              </label>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                <span style={{ fontSize: 12, fontStyle: "italic", color: "rgba(255,255,255,.65)" }}>Sin venta, sin presión.</span>
                <Button type="submit" variant="onBrand" size="lg">Enviar</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// Enfoque — filosofía: tecnología al servicio del desarrollo humano
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
const Enfoque = () => (
  <section id="enfoque" style={{ background: "var(--sm-card)", padding: "var(--sp-24) var(--gutter)", borderBottom: "1px solid var(--border)" }}>
    <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 72, alignItems: "start" }}>
        <div>
          <Eyebrow label="Por qué existimos" />
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", lineHeight: 1.35, color: "var(--sm-ink)", margin: 0, textWrap: "balance" }}>
            Diseñamos experiencias digitales para <strong style={{ fontWeight: 600 }}>devolverle sentido al aprendizaje</strong> y poner la tecnología al servicio del <em style={{ fontStyle: "italic", color: "var(--sm-green-700)" }}>desarrollo humano</em>.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 17, lineHeight: 1.65, color: "var(--sm-ink-2)", marginTop: 26, marginBottom: 0, maxWidth: 620 }}>
            No surgimos de una fascinación técnica por digitalizar contenidos, sino de una <strong style={{ fontWeight: 600, color: "var(--sm-ink)" }}>pregunta pedagógica más profunda</strong>: cómo poner la tecnología al servicio de la persona, evitando que el aprendizaje digital se vuelva consumo pasivo, fragmentación de la atención o simple automatización corporativa.
          </p>
        </div>
        <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: 36 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--sm-ink-3)", marginBottom: 22 }}>
            —&nbsp;&nbsp;Lo que evitamos
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              ["Consumo pasivo", "El aprendizaje no es ver videos en bucle — es transformar capacidades."],
              ["Fragmentación de la atención", "Una sola obra coherente, no una colección de notificaciones."],
              ["Automatización sin sentido", "Automatizamos los procesos formativos, sí — pero con la persona que aprende como eje del proceso."],
            ].map(([t, d]) => (
              <li key={t} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ marginTop: 7, width: 18, height: 2, background: "var(--sm-green)", flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 600, color: "var(--sm-ink)" }}>{t}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 300, color: "var(--sm-ink-3)", lineHeight: 1.55, marginTop: 3 }}>{d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Remate — a lo que aspiramos (idea-fuerza #3) */}
      <div style={{ marginTop: 64, paddingTop: 48, borderTop: "1px solid var(--border)", display: "grid", gridTemplateColumns: "auto 1fr", gap: 40, alignItems: "center" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--sm-green-700)", whiteSpace: "nowrap" }}>
          —&nbsp;&nbsp;A lo que aspiramos
        </div>
        <div>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.4rem, 2.4vw, 2rem)", lineHeight: 1.3, color: "var(--sm-ink)", margin: 0, letterSpacing: "0.005em", textWrap: "balance" }}>
            Ayudamos a las organizaciones a formar equipos capaces de <span style={{ color: "var(--sm-green-700)" }}>pensar, sentir, imaginar, decidir</span> y <span style={{ color: "var(--sm-blue)" }}>actuar con conciencia</span> en una época tecnológica.
          </p>
          <div className="m-aspiramos-icons" style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, borderTop: "1px solid var(--border)" }}>
            {[
              ["lightbulb", "Pensar", "blue"],
              ["heart", "Sentir", "green"],
              ["sparkle", "Imaginar", "blue"],
              ["compass", "Decidir", "green"],
              ["zap", "Actuar", "blue"],
            ].map(([ic, lbl, ac], idx) => (
              <div key={lbl} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12, padding: "22px 16px 0 0", borderLeft: idx === 0 ? "none" : "1px solid var(--border)", paddingLeft: idx === 0 ? 0 : 20 }}>
                <BrandIcon name={ic} size={26} strokeWidth={1.6} color={ac === "green" ? "var(--sm-green)" : "var(--sm-blue)"} />
                <span style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--sm-ink-2)" }}>{lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// Desarrollos a medida — Sé Música Labs — módulos propios para el aula virtual
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
const BrowserFrame = ({ url = "semusica.com/aula", children }) => (
  <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--shadow-lg)", background: "#fff" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", background: "#EDEEF4", borderBottom: "1px solid var(--border)" }}>
      <div style={{ display: "flex", gap: 7 }}>
        {["#E0584F", "#E9B43C", "#5EBE62"].map((c) => <span key={c} style={{ width: 11, height: 11, borderRadius: 999, background: c }} />)}
      </div>
      <div style={{ flex: 1, background: "#fff", border: "1px solid var(--border)", borderRadius: 8, padding: "6px 14px", fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--sm-ink-3)", display: "flex", alignItems: "center", gap: 8 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
        {url}
      </div>
    </div>
    <div style={{ overflow: "hidden" }}>{children}</div>
  </div>
);

const Desarrollos = () => {
  const modulos = [
    {
      n: "01",
      slug: "desarrollo-erp",
      icon: "bar-chart",
      title: "Módulo ERP de Gestión de Capacitaciones",
      tag: "Dentro del aula virtual",
      body: "Tableros de cumplimiento, asignación de itinerarios, control presupuestal y exportación — toda la gestión académica y operativa integrada en la propia aula virtual, sin saltar entre sistemas.",
      accent: "blue",
    },
    {
      n: "02",
      slug: "desarrollo-perfil",
      icon: "user",
      title: "Panel avanzado de perfil de usuario",
      tag: "Experiencia del colaborador",
      body: "Una vista enriquecida del progreso: competencias, insignias, itinerarios y avance por curso, para que cada persona entienda exactamente dónde está y qué sigue.",
      accent: "green",
    },
    {
      n: "03",
      slug: "desarrollo-matriculas",
      icon: "credit-card",
      title: "Módulo de gestión de matrículas y pensiones",
      tag: "Ideal para institutos y academias",
      body: "Matrículas, cobros y pensiones administrados dentro del aula virtual — sin plataformas externas ni conciliaciones manuales entre sistemas.",
      accent: "blue",
    },
  ];

  return (
    <section id="desarrollos" style={{ background: "var(--sm-surface)", padding: "var(--sp-24) var(--gutter)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "end", marginBottom: 56 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <span style={{ width: 30, height: 30, borderRadius: 8, background: "var(--sm-gradient-arc)", color: "#fff", fontFamily: "var(--font-display-ext)", fontSize: 16, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>L</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--sm-green-700)" }}>Sé Música Labs</span>
            </div>
            <DisplayTitle>Innovación<br />que construimos<br />sobre su aula</DisplayTitle>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 18, lineHeight: 1.6, color: "var(--sm-ink-2)", margin: 0, maxWidth: 500 }}>
            <strong style={{ fontWeight: 600 }}>Sé Música Labs</strong> es nuestra línea de desarrollo de innovación para el aula virtual: módulos propios que amplían lo que su plataforma puede hacer. No son plantillas — los construimos según la operación real de cada institución.
          </p>
        </div>

        {/* Módulos — tarjetas */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid var(--border)", borderRadius: 24, overflow: "hidden", background: "var(--sm-card)" }}>
          {modulos.map((m, i) => {
            const accentColor = m.accent === "green" ? "var(--sm-green)" : "var(--sm-blue)";
            return (
              <article key={m.n} className="m-card" style={{ padding: "36px 32px", borderRight: i < 2 ? "1px solid var(--border)" : "none", position: "relative", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: 56, height: 4, background: accentColor }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <div style={{ fontFamily: "var(--font-display-ext)", fontSize: 40, fontWeight: 700, color: accentColor, lineHeight: 1 }}>{m.n}</div>
                  <BrandIcon name={m.icon} size={28} strokeWidth={1.6} color={accentColor} style={{ opacity: 0.85 }} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: m.accent === "green" ? "var(--sm-green-700)" : "var(--sm-blue-600)" }}>{m.tag}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, lineHeight: 1.25, color: "var(--sm-ink)", margin: 0, textTransform: "uppercase", letterSpacing: "0.01em" }}>{m.title}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: "var(--sm-ink-3)", margin: 0 }}>{m.body}</p>
                <a href={`${m.slug}.html`} style={{ marginTop: "auto", paddingTop: 14, fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: accentColor, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}
                  onMouseEnter={(e) => { e.currentTarget.style.gap = "12px"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.gap = "8px"; }}>
                  Ver desarrollo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
              </article>
            );
          })}
        </div>

        <div style={{ marginTop: 28, background: "var(--sm-card)", border: "1px solid var(--border)", borderRadius: 20, padding: "30px 36px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 28, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 620 }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, lineHeight: 1.25, color: "var(--sm-ink)", margin: 0, textTransform: "uppercase", letterSpacing: "0.01em" }}>¿Necesita algo que no está aquí?</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: "var(--sm-ink-3)", margin: "8px 0 0" }}>
              También desarrollamos <strong style={{ fontWeight: 600, color: "var(--sm-ink)" }}>módulos y soluciones a medida</strong> sobre su aula virtual, según la operación real de su organización.
            </p>
          </div>
          <Button variant="primary" onClick={() => window.semGoToSection("contacto")}>Conversemos</Button>
        </div>
      </div>
    </section>
  );
};
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
const Alianzas = () => {
  const aliados = [
    { src: "ion", alt: "Institute Of NeuroCoaching", well: "#ffffff", name: "Institute Of NeuroCoaching", desc: "Estrategas en transformación organizacional y divulgadores de la neurociencia aplicada al management: diseño de soluciones que convierten el comportamiento humano en resultados de negocio.", director: "Dirigido por PhDc Mauricio Bock", accent: "blue" },
    { src: "security-expert", alt: "Security Expert", well: "#0a111f", name: "Security Expert", desc: "Aliados en ciberseguridad, resiliencia y estrategia para entornos de formación digital seguros.", accent: "green" },
    { src: "apel", alt: "Asociación Peruana de e-Learning (APEL)", well: "#ffffff", name: "Asociación Peruana de e-Learning", desc: "Miembros fundadores de la APEL, el gremio que articula el e-learning en el Perú.", badge: "Miembros fundadores", accent: "blue" },
  ];
  return (
    <section id="alianzas" style={{ background: "var(--sm-card)", padding: "var(--sp-24) var(--gutter)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "end", marginBottom: 56 }}>
          <div>
            <Eyebrow label="Alianzas" color="var(--sm-green-700)" />
            <DisplayTitle>No trabajamos<br />solos</DisplayTitle>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 18, lineHeight: 1.6, color: "var(--sm-ink-2)", margin: 0, maxWidth: 460, alignSelf: "center" }}>
            Nos rodeamos de <strong style={{ fontWeight: 600 }}>aliados que suman conocimiento</strong> — neurociencia, ciberseguridad y el gremio que articula el e-learning en el Perú.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden", background: "var(--sm-card)" }}>
          {aliados.map((a, i) => {
            const accentColor = a.accent === "green" ? "var(--sm-green)" : "var(--sm-blue)";
            return (
              <article key={a.src} className="m-card" style={{ borderLeft: i === 0 ? "none" : "1px solid var(--border)", display: "flex", flexDirection: "column" }}>
                <div style={{ height: 132, background: a.well, borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 32px" }}>
                  <img src={`assets/clients/${a.src}.png`} alt={a.alt} title={a.alt} style={{ maxWidth: "100%", maxHeight: 64, width: "auto", height: "auto", objectFit: "contain", display: "block" }} />
                </div>
                <div style={{ padding: "30px 32px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                  {a.badge && (
                    <span style={{ alignSelf: "flex-start", fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#fff", background: accentColor, padding: "5px 11px", borderRadius: 999 }}>{a.badge}</span>
                  )}
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, lineHeight: 1.2, color: "var(--sm-ink)", margin: 0, textTransform: "uppercase", letterSpacing: "0.02em" }}>{a.name}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: "var(--sm-ink-3)", margin: 0 }}>{a.desc}</p>
                  {a.director && (
                    <p style={{ fontFamily: "var(--font-sans)", fontStyle: "italic", fontSize: 13, fontWeight: 400, color: accentColor, margin: "2px 0 0" }}>{a.director}</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
// Root
// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —
const App = () => {
  const [active, setActive] = useState("inicio");
  return (
    <div>
      <SiteHeader home active={active} onNavigate={(id) => {
        setActive(id);
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }} />
      <Hero />
      <StatStrip />
      <Enfoque />
      <Servicios />
      <Desarrollos />
      <Mision />
      <Mercado />
      <AccionSocial />
      <ClientesSectores />
      <Alianzas />
      <Contacto />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
