// CourseCard.jsx — a catalog tile used in the "oferta formativa" section.
const CourseCard = ({ kicker, title, duration, modality, level, accent = "blue" }) => {
  const [hover, setHover] = React.useState(false);
  const stripe = accent === "green" ? "var(--sm-green)" : "var(--sm-blue)";
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--sm-card)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-xs)",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        transition: "all 220ms var(--ease-out)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Course cover — colored block w/ subtle pattern; placeholder for real photography */}
      <div style={{ aspectRatio: "16 / 9", background: `linear-gradient(135deg, ${accent === "green" ? "#1FB76C" : "#5557A6"} 0%, ${stripe} 100%)`, position: "relative" }}>
        <svg viewBox="0 0 320 180" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <path d="M0,140 C90,80 200,170 320,90 L320,180 L0,180 Z" fill="rgba(255,255,255,.08)" />
          <circle cx="280" cy="40" r="60" fill="rgba(255,255,255,.06)" />
        </svg>
        <span style={{ position: "absolute", top: 12, left: 12, background: "rgba(255,255,255,.92)", color: "var(--sm-ink-2)", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 999 }}>
          {kicker}
        </span>
      </div>
      <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
        <h4 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600, lineHeight: 1.25, color: "var(--sm-ink)", margin: 0 }}>
          {title}
        </h4>
        <div style={{ display: "flex", gap: 14, fontSize: 12, color: "var(--sm-ink-3)", alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            {duration}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2" /><line x1="2" y1="20" x2="22" y2="20" /></svg>
            {modality}
          </span>
        </div>
        <div style={{ marginTop: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, fontWeight: 500, color: stripe, background: accent === "green" ? "var(--sm-green-50)" : "var(--sm-blue-50)", padding: "4px 10px", borderRadius: 999 }}>
            Nivel · {level}
          </span>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 13, fontWeight: 500, color: stripe }}>Ver detalle →</a>
        </div>
      </div>
    </article>
  );
};

Object.assign(window, { CourseCard });
