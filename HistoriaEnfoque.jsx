// HistoriaEnfoque.jsx — long-read editorial "Nuestra historia y enfoque".
const HistoriaEnfoque = () => {
  const dims = [
    { k: "Pedagógica", icon: "book-open", d: "Ordena los contenidos, define objetivos claros, estructura actividades y acompaña el proceso de aprendizaje.", accent: "blue" },
    { k: "Tecnológica", icon: "cpu", d: "Implementa aulas virtuales, recursos digitales, cursos interactivos, sistemas de seguimiento y soluciones adaptadas a cada proyecto.", accent: "green" },
    { k: "Humana", icon: "heart", d: "Recuerda que detrás de cada curso hay personas: estudiantes, docentes, colaboradores, equipos, instituciones y comunidades que necesitan aprender, comunicarse y crecer.", accent: "blue" },
  ];
  const hoy = [
    "Diseño e implementación de aulas virtuales.",
    "Virtualización de cursos y programas formativos.",
    "Diseño instruccional para formación online.",
    "Desarrollo de cursos interactivos.",
    "Producción de recursos digitales para el aprendizaje.",
    "Implementación y organización de entornos virtuales de aprendizaje.",
    "Integración de contenidos SCORM y recursos creados en herramientas especializadas.",
    "Acompañamiento pedagógico y técnico para equipos de formación.",
    "Consultoría en tecnología educativa y capacitación digital.",
  ];

  const SectionTitle = ({ eyebrow, children }) => (
    <div style={{ marginBottom: 26 }}>
      {eyebrow && (
        <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--sm-green-700)", marginBottom: 16 }}>
          —&nbsp;&nbsp;{eyebrow}
        </div>
      )}
      <h2 style={{ fontFamily: "var(--font-display-ext)", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.3rem)", lineHeight: 1.08, letterSpacing: "0.01em", textTransform: "uppercase", color: "var(--sm-ink)", margin: 0, textWrap: "balance" }}>
        {children}
      </h2>
    </div>
  );

  const P = ({ children, lead, style }) => (
    <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: lead ? 19 : 17, lineHeight: 1.7, color: lead ? "var(--sm-ink)" : "var(--sm-ink-2)", margin: "0 0 18px", maxWidth: 720, ...(style || {}) }}>
      {children}
    </p>
  );

  return (
    <div>
      <SiteHeader active="nosotros" />

      {/* Hero */}
      <section style={{ background: "var(--sm-blue)", color: "#fff", padding: "var(--sp-20) var(--gutter) var(--sp-24)", position: "relative", overflow: "hidden" }}>
        <svg aria-hidden="true" viewBox="0 0 1440 600" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .3 }}>
          <ellipse cx="1200" cy="120" rx="640" ry="360" fill="none" stroke="#00A859" strokeWidth="1.4" />
          <ellipse cx="1200" cy="120" rx="820" ry="460" fill="none" stroke="#80D3A6" strokeWidth="1" />
        </svg>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", position: "relative" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#80D3A6", marginBottom: 22 }}>
            Nuestra historia y enfoque
          </div>
          <h1 style={{ fontFamily: "var(--font-display-ext)", fontSize: "clamp(2.1rem, 4.6vw, 3.7rem)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "0.01em", textTransform: "uppercase", color: "#fff", margin: 0, maxWidth: 1000, textWrap: "balance" }}>
            De la educación musical al <span style={{ color: "#80D3A6" }}>aprendizaje digital</span>
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "clamp(1.05rem, 1.7vw, 1.35rem)", lineHeight: 1.6, color: "rgba(255,255,255,.86)", marginTop: 24, maxWidth: 760, textWrap: "balance" }}>
            Sé Música nace de una convicción sencilla y profunda: la tecnología puede ampliar, ordenar y enriquecer los procesos de aprendizaje cuando está al servicio de las personas.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "var(--sm-card)", padding: "var(--sp-24) var(--gutter)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }} className="h-two-col">
          <P lead>En Sé Música creemos que la tecnología alcanza su mayor valor cuando está al servicio de las personas. Por eso no entendemos el e-learning como la simple carga de contenidos en una plataforma, sino como el <strong style={{ fontWeight: 600, color: "var(--sm-ink)" }}>diseño de experiencias de aprendizaje con propósito, estructura y sentido humano</strong>.</P>
          <P lead style={{ margin: 0 }}><strong style={{ fontWeight: 600, color: "var(--sm-ink)" }}>Desde 2012</strong> acompañamos a instituciones educativas, culturales y corporativas en la virtualización de cursos, la implementación de aulas virtuales, el diseño instruccional y el desarrollo de soluciones digitales de aprendizaje — integrando <strong style={{ fontWeight: 600, color: "var(--sm-ink)" }}>pedagogía, tecnología y estrategia institucional</strong> para transformar contenidos, programas y necesidades de capacitación en experiencias e-learning claras, efectivas y humanamente significativas.</P>
        </div>
      </section>

      {/* De la educación musical al aprendizaje digital */}
      <section style={{ background: "var(--sm-surface)", padding: "var(--sp-24) var(--gutter)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 64, alignItems: "start" }} className="h-two-col">
          <div>
            <SectionTitle eyebrow="Origen">De la educación musical al aprendizaje digital</SectionTitle>
            {/* Foto duotono (provisional · genérica) — si falla, no se muestra nada y el layout queda como antes. */}
            <div style={{ marginTop: 34, borderRadius: 20, overflow: "hidden", aspectRatio: "4 / 3", boxShadow: "var(--shadow-md)" }} className="h-origen-photo">
              <DuotonePhoto
                src={window.SEMUSICA && window.SEMUSICA.photos && window.SEMUSICA.photos.historia}
                alt="Equipo de trabajo colaborando en el diseño de una experiencia de aprendizaje"
                tone="blue"
              />
            </div>
          </div>
          <div>
            <P>Nuestra trayectoria comenzó en el campo de la educación musical, un territorio especialmente exigente para el aprendizaje online. Enseñar música a distancia implica mucho más que trasladar contenidos a una plataforma: requiere escucha, secuencia, práctica, retroalimentación, sensibilidad pedagógica y una comprensión profunda de cómo las personas desarrollan habilidades.</P>
            <P>Esa experiencia inicial nos permitió comprender que un buen entorno virtual no se construye solo con recursos tecnológicos. Se construye con criterio pedagógico, claridad metodológica y una arquitectura de aprendizaje que ayude a cada persona a avanzar paso a paso.</P>
            <P>A partir de ese recorrido, Sé Música fue ampliando su campo de acción hacia la virtualización de cursos, el diseño de aulas virtuales, la producción de recursos interactivos y la consultoría e-learning para distintos sectores.</P>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)", lineHeight: 1.3, color: "var(--sm-blue)", margin: "10px 0 0", textWrap: "balance" }}>
              La música fue el origen; la formación humana, el horizonte.
            </p>
          </div>
        </div>
      </section>

      {/* Tres dimensiones */}
      <section style={{ background: "var(--sm-card)", padding: "var(--sp-24) var(--gutter)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <div style={{ maxWidth: 720, marginBottom: 48 }}>
            <SectionTitle eyebrow="Nuestro enfoque">Una mirada pedagógica y humanista</SectionTitle>
            <P>En Sé Música entendemos la tecnología como un medio, no como un fin. Una plataforma, un curso online o un recurso interactivo solo tienen sentido cuando ayudan a mejorar la experiencia de aprendizaje. Por eso, nuestro enfoque combina tres dimensiones que hacemos dialogar de manera coherente.</P>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden" }} className="h-dims">
            {dims.map((d, i) => {
              const ac = d.accent === "green" ? "var(--sm-green)" : "var(--sm-blue)";
              return (
                <div key={d.k} className="m-card" style={{ padding: "38px 34px", borderLeft: i === 0 ? "none" : "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 14, position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: i === 0 ? 0 : -1, width: 56, height: 4, background: ac }} />
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                    <span style={{ fontFamily: "var(--font-display-ext)", fontSize: 16, fontWeight: 700, color: ac, letterSpacing: "0.04em", textTransform: "uppercase" }}>0{i + 1}</span>
                    <BrandIcon name={d.icon} size={28} strokeWidth={1.6} color={ac} style={{ opacity: 0.85 }} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--sm-ink)", margin: 0, textTransform: "uppercase", letterSpacing: "0.01em" }}>{d.k}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: "var(--sm-ink-3)", margin: 0 }}>{d.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Qué hacemos hoy */}
      <section style={{ background: "var(--sm-surface)", padding: "var(--sp-24) var(--gutter)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 64, alignItems: "start" }} className="h-two-col">
          <div>
            <SectionTitle eyebrow="Qué hacemos hoy">Soluciones de e-learning a medida</SectionTitle>
            <P>Desarrollamos soluciones para instituciones educativas, organizaciones culturales y empresas. Cada proyecto se aborda desde sus necesidades reales: no creemos en soluciones genéricas aplicadas de manera automática, sino en escuchar, comprender, ordenar y diseñar.</P>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 28px" }} className="h-hoy">
            {hoy.map((h) => (
              <li key={h} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: "var(--font-sans)" }}>
                <span style={{ marginTop: 8, width: 16, height: 2, background: "var(--sm-green)", flexShrink: 0 }} />
                <span style={{ fontSize: 15.5, fontWeight: 300, color: "var(--sm-ink-2)", lineHeight: 1.5 }}>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Dirección y trayectoria */}
      <section style={{ background: "var(--sm-blue)", color: "#fff", padding: "var(--sp-24) var(--gutter)", position: "relative", overflow: "hidden" }}>
        <svg aria-hidden="true" viewBox="0 0 1440 600" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .25 }}>
          <ellipse cx="240" cy="480" rx="640" ry="360" fill="none" stroke="#80D3A6" strokeWidth="1.2" />
        </svg>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", position: "relative" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#80D3A6", marginBottom: 28 }}>
            —&nbsp;&nbsp;Dirección y trayectoria
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "0.62fr 1.38fr", gap: 56, alignItems: "start" }} className="h-fundador">
            <div style={{ aspectRatio: "4 / 5", borderRadius: 20, overflow: "hidden", boxShadow: "var(--shadow-lg)" }} className="h-fundador-photo">
              <PhotoSlot photoKey="fundador" tone="neutral" label="Retrato del fundador" hint="Daniel Ravelo Franco — músico, educador y consultor e-learning" radius={20} />
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "clamp(1.2rem, 2vw, 1.6rem)", lineHeight: 1.55, color: "#fff", margin: 0, textWrap: "balance" }}>
                Sé Música fue fundada por <strong style={{ fontWeight: 600 }}>Daniel Ravelo Franco</strong> —músico, educador y consultor e-learning— con experiencia en educación musical, formación docente, diseño instruccional, docencia digital, andragogía y desarrollo de aulas virtuales.
              </p>
              <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }} className="h-two-col">
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,.85)", margin: 0 }}>
                  Su trayectoria integra la práctica artística, la reflexión pedagógica y la implementación tecnológica. Esta combinación ha marcado el carácter de Sé Música desde sus inicios.
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,.85)", margin: 0 }}>
                  Una empresa que no entiende la tecnología como reemplazo de la experiencia humana, sino como una herramienta para potenciarla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propósito + forma de trabajar */}
      <section style={{ background: "var(--sm-card)", padding: "var(--sp-24) var(--gutter)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <div style={{ maxWidth: 720 }}>
            <SectionTitle eyebrow="Nuestro propósito">Aprendizaje sólido, claro y humano</SectionTitle>
            <P>Contribuimos al desarrollo de experiencias de aprendizaje digitales que sean técnicamente sólidas, pedagógicamente claras y humanamente relevantes.</P>
            <P>Muchas instituciones y empresas tienen contenidos valiosos, pero no siempre cuentan con el tiempo, el equipo o la metodología para convertirlos en cursos online efectivos. Allí es donde Sé Música aporta valor: transformamos ideas, contenidos y necesidades formativas en soluciones e-learning estructuradas, accesibles y sostenibles.</P>
            <P>Creemos que una buena experiencia digital de aprendizaje no debe complicar el proceso. Debe facilitarlo: ayudar a que las personas comprendan mejor, practiquen mejor, se involucren más y encuentren sentido en lo que aprenden.</P>
          </div>

          <div style={{ marginTop: 56, paddingTop: 48, borderTop: "1px solid var(--border)", maxWidth: 720 }}>
            <SectionTitle eyebrow="Nuestra forma de trabajar">Desde la escucha y el acompañamiento</SectionTitle>
            <P>Antes de proponer una solución, buscamos comprender el contexto, los objetivos, el público, los contenidos disponibles y las condiciones reales de implementación.</P>
            <P>A partir de allí, diseñamos una ruta que puede incluir diagnóstico, estructura del curso, guion instruccional, diseño del aula virtual, producción de recursos, configuración técnica, pruebas, ajustes y acompañamiento posterior. Un aula virtual bien diseñada debe ser clara para quien aprende, manejable para quien administra y coherente con los objetivos de la institución.</P>
          </div>
        </div>
      </section>

      {/* Tecnología con sentido — cierre */}
      <section style={{ background: "var(--sm-green)", color: "#fff", padding: "var(--sp-24) var(--gutter)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", position: "relative", maxWidth: 900 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.8)", marginBottom: 20 }}>
            —&nbsp;&nbsp;Tecnología con sentido
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "clamp(1.15rem, 1.9vw, 1.5rem)", lineHeight: 1.55, color: "#fff", margin: "0", textWrap: "balance" }}>
            En un mundo donde la digitalización avanza rápidamente, creemos que el desafío no es usar más tecnología, sino usarla mejor. Una solución e-learning tiene sentido cuando ayuda a formar personas, fortalecer equipos, preservar saberes, compartir conocimiento y abrir nuevas posibilidades de aprendizaje.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--sm-blue)", color: "#fff", padding: "var(--sp-20) var(--gutter)", borderTop: "1px solid rgba(255,255,255,.15)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <h2 style={{ fontFamily: "var(--font-display-ext)", fontWeight: 700, fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", lineHeight: 1.1, letterSpacing: "0.01em", margin: 0, textTransform: "uppercase", color: "#fff", textWrap: "balance" }}>
            Conversemos sobre su proyecto
          </h2>
          <Button variant="onBrand" size="lg" onClick={() => window.semAgendar()}>Agendar diagnóstico</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

Object.assign(window, { HistoriaEnfoque });
