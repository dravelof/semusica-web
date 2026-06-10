// Hero.jsx — recreates the brand-book "gráfica con fotografía" pattern.
// Solid-blue asymmetric block on the left with a curved diagonal edge,
// white logo, eyebrow, headline and CTAs; photo block on the right.

// Abstract classroom graphic — original placeholder, kept as the fail-safe
// fallback when the hero photo is missing or fails to load.
const HeroPlaceholderArt = () => (
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
    <rect width="400" height="500" fill="#1FB76C" />
    <rect x="60" y="120" width="280" height="170" rx="10" fill="#fff" opacity="0.92" />
    <rect x="80" y="140" width="120" height="10" rx="3" fill="#3E4095" opacity="0.4" />
    <rect x="80" y="160" width="220" height="6" rx="3" fill="#3E4095" opacity="0.2" />
    <rect x="80" y="174" width="180" height="6" rx="3" fill="#3E4095" opacity="0.2" />
    <rect x="80" y="200" width="80" height="50" rx="6" fill="#00A859" opacity="0.25" />
    <rect x="170" y="200" width="80" height="50" rx="6" fill="#3E4095" opacity="0.2" />
    <rect x="260" y="200" width="40" height="50" rx="6" fill="#1FB76C" opacity="0.4" />
    <rect x="60" y="320" width="280" height="120" rx="10" fill="#fff" opacity="0.18" />
    <circle cx="100" cy="380" r="22" fill="#fff" opacity="0.35" />
    <rect x="140" y="368" width="100" height="8" rx="3" fill="#fff" opacity="0.5" />
    <rect x="140" y="386" width="160" height="6" rx="3" fill="#fff" opacity="0.35" />
  </svg>
);

const Hero = () => {
  return (
    <section id="inicio" style={{ position: "relative", marginTop: -1 }}>
      {/* Outer container — full bleed, with the asymmetric blue/green block layered behind */}
      <div style={{ position: "relative", overflow: "hidden", background: "var(--sm-surface)" }}>
        {/* Curved blue block — drawn with inline SVG clip so the arc is exact */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 720"
          preserveAspectRatio="none"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
        >
          <defs>
            <linearGradient id="heroBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3E4095" />
              <stop offset="100%" stopColor="#25275F" />
            </linearGradient>
            <linearGradient id="heroArc" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00A859" />
              <stop offset="55%" stopColor="#1BAA86" />
              <stop offset="100%" stopColor="#3E4095" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Main blue block with curved right edge */}
          <path
            d="M0,0 L900,0 C760,200 820,520 1040,720 L0,720 Z"
            fill="url(#heroBlue)"
          />
          {/* Signature arc — the green→blue orbit motif from the logo */}
          <path
            d="M-40,560 C420,320 880,460 1280,180"
            stroke="url(#heroArc)"
            strokeWidth="3"
            fill="none"
            opacity="0.55"
          />
          {/* Soft green orb echo */}
          <circle cx="1080" cy="560" r="220" fill="#00A859" opacity="0.06" />
        </svg>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "var(--container)", margin: "0 auto", padding: "96px var(--gutter) 112px", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 64, alignItems: "center" }}>
          {/* Left — copy on blue */}
          <div style={{ color: "#fff" }}>
            <h1 style={{ fontFamily: "var(--font-display-ext)", fontSize: "clamp(2.4rem, 4.4vw, 4.2rem)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "0.01em", color: "#fff", margin: 0, textWrap: "balance", textTransform: "uppercase" }}>
              Tecnologías digitales<br />
              para la <span style={{ color: "#80D3A6" }}>formación humana</span>
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontStyle: "italic", fontWeight: 300, fontSize: 19, lineHeight: 1.55, color: "rgba(255,255,255,.86)", maxWidth: 540, marginTop: 28 }}>
              E-learning corporativo diseñado con la precisión, creatividad y eficacia que su empresa requiere.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
              <Button variant="onBrand" size="lg" onClick={() => window.semAgendar()}>Agendar diagnóstico</Button>
              <Button variant="onBrandOutline" size="lg" onClick={() => window.semGoToSection("servicios")}>Conocer servicios</Button>
            </div>
            <div style={{ marginTop: 36, display: "flex", gap: 28, fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.65)", fontWeight: 500 }}>
              <span>Sé Música EIRL</span>
              <span>·</span>
              <span>Lima, Perú</span>
              <span>·</span>
              <span>LATAM</span>
            </div>
          </div>

          {/* Right — the "fotografía" half of the brand-book pattern: real photo
              with brand duotone; falls back to the abstract graphic if it fails. */}
          <div className="sm-hero-visual" style={{ position: "relative" }}>
            <div style={{
              aspectRatio: "4 / 5",
              borderRadius: 24,
              overflow: "hidden",
              background: "linear-gradient(180deg, #80D3A6 0%, #00A859 55%, #008C4A 100%)",
              boxShadow: "var(--shadow-xl)",
              position: "relative",
            }}>
              <DuotonePhoto
                src={window.SEMUSICA && window.SEMUSICA.photos && window.SEMUSICA.photos.hero}
                alt="Personas aprendiendo en un entorno de formación colaborativa"
                tone="green"
                priority
                fallback={<HeroPlaceholderArt />}
              />
            </div>

            {/* Floating stat card — establishes credibility, common in institutional marketing */}
            <div className="sm-hero-stat" style={{
              position: "absolute",
              left: -32,
              bottom: -32,
              background: "#fff",
              borderRadius: 16,
              padding: "18px 22px",
              boxShadow: "var(--shadow-lg)",
              fontFamily: "var(--font-sans)",
              minWidth: 220,
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--sm-green-700)" }}>
                —&nbsp;&nbsp;Trayectoria
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 10 }}>
                <span style={{ fontFamily: "var(--font-display-ext)", fontSize: 40, fontWeight: 700, color: "var(--sm-blue)", lineHeight: 1, letterSpacing: "0.01em" }}>60,000+</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 300, color: "var(--sm-ink-3)", marginTop: 6, lineHeight: 1.5 }}>
                personas capacitadas en 14 países de Latinoamérica a lo largo de 14 años.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
