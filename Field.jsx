// Field.jsx — text + select input primitive
const Field = ({ label, type = "text", value, onChange, placeholder, hint, error, name, required, autoFocus, options, onBrand }) => {
  const [focus, setFocus] = React.useState(false);
  const labelColor = onBrand ? "rgba(255,255,255,.92)" : "var(--sm-ink-2)";
  const hintColor = onBrand ? "rgba(255,255,255,.7)" : "var(--sm-ink-3)";
  const inputBg = onBrand ? "rgba(255,255,255,.08)" : "#fff";
  const inputColor = onBrand ? "#fff" : "var(--sm-ink)";
  const borderColor = error
    ? "var(--sm-danger)"
    : focus
    ? (onBrand ? "#fff" : "var(--sm-blue)")
    : (onBrand ? "rgba(255,255,255,.22)" : "var(--border)");
  const ring = focus && !error ? (onBrand ? "0 0 0 3px rgba(255,255,255,.20)" : "0 0 0 3px rgba(62,64,149,.28)") : "none";

  const inputStyle = {
    font: "inherit",
    fontSize: 14,
    fontWeight: 300,
    padding: "10px 14px",
    border: `1px solid ${borderColor}`,
    borderRadius: 8,
    background: inputBg,
    color: inputColor,
    outline: "none",
    transition: "border-color 140ms var(--ease-out), box-shadow 140ms var(--ease-out), background 140ms var(--ease-out)",
    boxShadow: ring,
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-sans)" }}>
      {label && (
        <span style={{ fontSize: 13, fontWeight: 500, color: labelColor }}>{label}</span>
      )}
      {options ? (
        <select
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={inputStyle}
        >
          {options.map((o) => (
            <option key={o.value || o} value={o.value || o}>{o.label || o}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          value={value || ""}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          style={inputStyle}
        />
      )}
      {(hint || error) && (
        <span style={{ fontSize: 12, color: error ? "var(--sm-danger)" : hintColor }}>{error || hint}</span>
      )}
    </label>
  );
};

Object.assign(window, { Field });
