// Header.jsx — sticky top nav, becomes opaque + shadow on scroll
const Header = ({ active = "inicio", onNavigate }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { id: "inicio",       label: "Inicio" },
    { id: "nosotros",     label: "Nosotros" },
    { id: "servicios",    label: "Servicios" },
    { id: "desarrollos",  label: "Aula virtual" },
    { id: "mercado",      label: "Mercado" },
    { id: "contacto",     label: "Contacto" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0)",
        backdropFilter: scrolled ? "saturate(160%) blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(160%) blur(12px)" : "none",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 220ms var(--ease-out), box-shadow 220ms var(--ease-out), border-color 220ms var(--ease-out)",
      }}
    >
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "16px var(--gutter)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
        <a href="#inicio" onClick={(e) => { e.preventDefault(); onNavigate?.("inicio"); }} style={{ display: "inline-flex", alignItems: "center" }}>
          <img src="assets/logo-color.png" alt="Sé Música" style={{ height: 32, width: "auto", display: "block" }} />
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              onClick={(e) => { e.preventDefault(); onNavigate?.(it.id); }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: active === it.id ? 600 : 400,
                color: active === it.id ? "var(--sm-blue)" : "var(--sm-ink-2)",
                padding: "8px 14px",
                borderRadius: 10,
                textDecoration: "none",
                transition: "color 140ms, background 140ms",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--sm-blue-50)"; e.currentTarget.style.color = "var(--sm-blue)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = active === it.id ? "var(--sm-blue)" : "var(--sm-ink-2)"; }}
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Button variant="ghost" size="sm">contacto@semusica.com</Button>
          <Button variant="primary" size="sm">Agendar diagnóstico</Button>
        </div>
      </div>
    </header>
  );
};

Object.assign(window, { Header });
