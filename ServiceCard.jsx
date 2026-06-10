// ServiceCard.jsx — one of the four service offerings.
// Uses Lucide-style stroke icons (inline SVGs), 1.75 stroke, no bubble fills.
const ServiceCard = ({ icon, eyebrow, title, body, accent = "blue", featured }) => {
  const [hover, setHover] = React.useState(false);
  const accentColor = accent === "green" ? "var(--sm-green)" : "var(--sm-blue)";
  const accentColorDark = accent === "green" ? "var(--sm-green-700)" : "var(--sm-blue-600)";

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--sm-card)",
        border: featured ? "0" : "1px solid var(--border)",
        borderRadius: 16,
        padding: featured ? "28px 24px 24px" : "24px",
        boxShadow: featured ? "var(--shadow-md)" : (hover ? "var(--shadow-sm)" : "none"),
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        transition: "transform 220ms var(--ease-out), box-shadow 220ms var(--ease-out)",
        fontFamily: "var(--font-sans)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        minHeight: 240,
      }}
    >
      {featured && (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: accentColor }} />
      )}
      <div style={{ width: 44, height: 44, borderRadius: 12, background: accent === "green" ? "var(--sm-green-50)" : "var(--sm-blue-50)", display: "flex", alignItems: "center", justifyContent: "center", color: accentColorDark }}>
        {icon}
      </div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: accentColorDark }}>
        {eyebrow}
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, lineHeight: 1.2, color: "var(--sm-ink)", margin: 0 }}>
        {title}
      </h3>
      <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.55, color: "var(--sm-ink-3)", margin: 0 }}>
        {body}
      </p>
      <a href="#" onClick={(e) => e.preventDefault()} style={{ marginTop: "auto", fontSize: 13, fontWeight: 500, color: accentColor, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
        Conocer más
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
      </a>
    </article>
  );
};

Object.assign(window, { ServiceCard });
