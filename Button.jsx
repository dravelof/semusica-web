// Button.jsx — Sé Música primary button primitive
const Button = ({ children, variant = "primary", size = "md", icon, onClick, type = "button", disabled, full }) => {
  const base = {
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    border: 0,
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    transition: "background 220ms var(--ease-out), color 220ms var(--ease-out), transform 80ms var(--ease-out), box-shadow 220ms var(--ease-out)",
    opacity: disabled ? 0.45 : 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    width: full ? "100%" : undefined,
  };
  const sizes = {
    sm: { fontSize: 13, padding: "6px 14px", borderRadius: 10 },
    md: { fontSize: 14, padding: "10px 20px", borderRadius: 12 },
    lg: { fontSize: 16, padding: "14px 28px", borderRadius: 14 },
  };
  const variants = {
    primary:   { background: "var(--sm-blue)", color: "#fff" },
    secondary: { background: "var(--sm-green)", color: "#fff" },
    outline:   { background: "transparent", color: "var(--sm-blue)", boxShadow: "inset 0 0 0 1.5px var(--sm-blue)" },
    ghost:     { background: "transparent", color: "var(--sm-ink)" },
    onBrand:   { background: "#fff", color: "var(--sm-blue)" },
    onBrandOutline: { background: "transparent", color: "#fff", boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,.65)" },
  };

  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverBg = {
    primary:   { background: "var(--sm-blue-600)" },
    secondary: { background: "var(--sm-green-600)" },
    outline:   { background: "var(--sm-blue-50)" },
    ghost:     { background: "var(--sm-surface-2)" },
    onBrand:   { background: "var(--sm-blue-50)" },
    onBrandOutline: { background: "rgba(255,255,255,.12)" },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        ...base,
        ...sizes[size],
        ...variants[variant],
        ...(hover && !disabled ? hoverBg[variant] : null),
        transform: press && !disabled ? "scale(0.98)" : "scale(1)",
      }}
    >
      {icon && <span style={{ display: "inline-flex", alignItems: "center" }}>{icon}</span>}
      {children}
    </button>
  );
};

Object.assign(window, { Button });
