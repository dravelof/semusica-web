// SiteHeader.jsx — cabecera única compartida (home + páginas internas).
// home=true: los enlaces de sección hacen scroll suave en el propio home.
// home=false: los enlaces de sección apuntan a index.html#id.
// "Servicios" y "Desarrollo" son menús desplegables hacia las páginas internas.

const SERVICIOS = [
  { label: "Consultoría y ecosistemas digitales", href: "servicio-consultoria.html" },
  { label: "Virtualización de cursos", href: "servicio-virtualizacion.html" },
  { label: "Aulas virtuales a medida", href: "servicio-aulas-virtuales.html" },
];
const DESARROLLOS = [
  { label: "Módulo ERP de capacitaciones", href: "desarrollo-erp.html" },
  { label: "Panel avanzado de perfil de usuario", href: "desarrollo-perfil.html" },
  { label: "Gestión de matrículas y pensiones", href: "desarrollo-matriculas.html" },
  { label: "Desarrollos a medida", href: "index.html#desarrollos" },
];
const NOSOTROS = [
  { label: "Nuestra historia y enfoque", href: "nuestra-historia.html" },
  { label: "Quiénes somos", href: "index.html#nosotros" },
  { label: "Nuestra misión", href: "index.html#mision" },
  { label: "Acción social", href: "index.html#accion" },
];

// — Filas del menú móvil —
const MobileLink = ({ href, onClick, children }) => (
  <a href={href} onClick={onClick}
    style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, letterSpacing: "0.01em", color: "var(--sm-ink)", textDecoration: "none", padding: "13px 6px", borderBottom: "1px solid var(--border)" }}>
    {children}
  </a>
);

const MobileGroup = ({ label, href, onHead, items, onItem }) => (
  <div style={{ borderBottom: "1px solid var(--border)" }}>
    <a href={href} onClick={onHead}
      style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, letterSpacing: "0.01em", color: "var(--sm-ink)", textDecoration: "none", padding: "13px 6px 8px" }}>
      {label}
    </a>
    <div style={{ display: "flex", flexDirection: "column", paddingBottom: 10 }}>
      {items.map((it) => (
        <a key={it.href} href={it.href} onClick={onItem}
          style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 400, color: "var(--sm-ink-3)", textDecoration: "none", padding: "9px 6px 9px 18px" }}>
          {it.label}
        </a>
      ))}
    </div>
  </div>
);

const SiteHeader = ({ home = false, active = "", onNavigate }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(null); // "servicios" | "desarrollo" | null
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const closeTimer = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // En el home el header arranca transparente; en páginas internas siempre sólido.
  const solid = scrolled || !home;
  const base = home ? "" : "index.html";
  const sectionHref = (id) => `${base}#${id}`;
  const handleSection = (e, id) => {
    if (home && onNavigate) { e.preventDefault(); onNavigate(id); }
  };

  const openMenu = (k) => { clearTimeout(closeTimer.current); setOpen(k); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setOpen(null), 140); };

  const linkBase = {
    fontFamily: "var(--font-sans)", fontSize: 14.5, padding: "8px 14px",
    borderRadius: 10, textDecoration: "none", cursor: "pointer",
    transition: "color 140ms, background 140ms", whiteSpace: "nowrap",
    display: "inline-flex", alignItems: "center", gap: 6, background: "transparent", border: "none",
  };

  const SectionLink = ({ id, label }) => (
    <a href={sectionHref(id)} onClick={(e) => handleSection(e, id)}
      style={{ ...linkBase, fontWeight: active === id ? 600 : 400, color: active === id ? "var(--sm-blue)" : "var(--sm-ink-2)" }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--sm-blue-50)"; e.currentTarget.style.color = "var(--sm-blue)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = active === id ? "var(--sm-blue)" : "var(--sm-ink-2)"; }}>
      {label}
    </a>
  );

  const PageLink = ({ id, href, label }) => (
    <a href={href}
      style={{ ...linkBase, fontWeight: active === id ? 600 : 400, color: active === id ? "var(--sm-blue)" : "var(--sm-ink-2)" }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--sm-blue-50)"; e.currentTarget.style.color = "var(--sm-blue)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = active === id ? "var(--sm-blue)" : "var(--sm-ink-2)"; }}>
      {label}
    </a>
  );

  const Caret = ({ up }) => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: up ? "rotate(180deg)" : "none", transition: "transform 160ms", opacity: .7 }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );

  const Dropdown = ({ id, label, sectionId, headHref, items, header }) => {
    const isOpen = open === id;
    const headStyle = { ...linkBase, fontWeight: active === (sectionId || id) ? 600 : 400, color: isOpen || active === (sectionId || id) ? "var(--sm-blue)" : "var(--sm-ink-2)", background: isOpen ? "var(--sm-blue-50)" : "transparent" };
    return (
      <div style={{ position: "relative" }} onMouseEnter={() => openMenu(id)} onMouseLeave={scheduleClose}>
        {headHref ? (
          <a href={headHref} style={headStyle}>{label}<Caret up={isOpen} /></a>
        ) : (
          <a href={sectionHref(sectionId)} onClick={(e) => handleSection(e, sectionId)} style={headStyle}>
            {label}<Caret up={isOpen} />
          </a>
        )}
        {isOpen && (
          <div style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, minWidth: 300, background: "#fff", border: "1px solid var(--border)", borderRadius: 14, boxShadow: "var(--shadow-lg)", padding: 8, zIndex: 60 }}>
            {header && (
              <div style={{ padding: "8px 14px 10px", margin: "0 0 4px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 9 }}>
                <span style={{ width: 22, height: 22, borderRadius: 6, background: "var(--sm-gradient-arc)", color: "#fff", fontFamily: "var(--font-display-ext)", fontSize: 12, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>L</span>
                <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "var(--sm-ink)", letterSpacing: "0.01em" }}>{header.title}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 400, color: "var(--sm-ink-4)" }}>{header.subtitle}</span>
                </span>
              </div>
            )}
            {items.map((it) => (
              <a key={it.href} href={it.href}
                style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, color: "var(--sm-ink)", padding: "11px 14px", borderRadius: 9, textDecoration: "none", transition: "background 120ms, color 120ms" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--sm-surface)"; e.currentTarget.style.color = "var(--sm-blue)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--sm-ink)"; }}>
                {it.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: solid ? "rgba(255,255,255,0.93)" : "rgba(255,255,255,0)",
      backdropFilter: solid ? "saturate(160%) blur(12px)" : "none",
      WebkitBackdropFilter: solid ? "saturate(160%) blur(12px)" : "none",
      boxShadow: solid && scrolled ? "var(--shadow-sm)" : "none",
      borderBottom: solid ? "1px solid var(--border)" : "1px solid transparent",
      transition: "background 220ms var(--ease-out), box-shadow 220ms var(--ease-out), border-color 220ms var(--ease-out)",
    }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "14px var(--gutter)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href={home ? "#inicio" : "index.html"} onClick={(e) => { if (home) handleSection(e, "inicio"); }} style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
          <img src="assets/logo-color.png" alt="Sé Música" style={{ height: 54, width: "auto", display: "block" }} />
        </a>

        <nav className="sm-nav-desktop" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <SectionLink id="inicio" label="Inicio" />
          <Dropdown id="nosotros" label="Nosotros" headHref="nuestra-historia.html" items={NOSOTROS} />
          <Dropdown id="servicios" label="Servicios" sectionId="servicios" items={SERVICIOS} />
          <Dropdown id="desarrollo" label="Labs" sectionId="desarrollos" items={DESARROLLOS} header={{ title: "Sé Música Labs", subtitle: "Desarrollos de innovación" }} />
          <SectionLink id="mercado" label="Mercado" />
          <PageLink id="blog" href="blog.html" label="Blog" />
          <SectionLink id="contacto" label="Contacto" />
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div className="sm-cta-desktop">
            <Button variant="primary" size="sm" onClick={() => window.semAgendar()}>Agendar diagnóstico</Button>
          </div>
          <button
            className="sm-burger"
            aria-label="Abrir menú"
            onClick={() => setMobileOpen(v => !v)}
            style={{ display: "none", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 12, border: "1px solid var(--border)", background: "var(--sm-card)", cursor: "pointer", padding: 0 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sm-ink)" strokeWidth="2" strokeLinecap="round">
              {mobileOpen
                ? (<g><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></g>)
                : (<g><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></g>)}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {mobileOpen && (
        <div className="sm-mobile-panel" style={{ borderTop: "1px solid var(--border)", background: "#fff", boxShadow: "var(--shadow-md)", maxHeight: "calc(100vh - 76px)", overflowY: "auto" }}>
          <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "16px var(--gutter) 28px", display: "flex", flexDirection: "column", gap: 4 }}>
            <MobileLink href={sectionHref("inicio")} onClick={(e) => { if (home) handleSection(e, "inicio"); setMobileOpen(false); }}>Inicio</MobileLink>
            <MobileGroup label="Nosotros" href="nuestra-historia.html" onHead={() => setMobileOpen(false)} items={NOSOTROS} onItem={() => setMobileOpen(false)} />

            <MobileGroup label="Servicios" href={sectionHref("servicios")} onHead={(e) => { if (home) handleSection(e, "servicios"); setMobileOpen(false); }} items={SERVICIOS} onItem={() => setMobileOpen(false)} />
            <MobileGroup label="Sé Música Labs" href={sectionHref("desarrollos")} onHead={(e) => { if (home) handleSection(e, "desarrollos"); setMobileOpen(false); }} items={DESARROLLOS} onItem={() => setMobileOpen(false)} />

            <MobileLink href={sectionHref("mercado")} onClick={(e) => { if (home) handleSection(e, "mercado"); setMobileOpen(false); }}>Mercado</MobileLink>
            <MobileLink href="blog.html" onClick={() => setMobileOpen(false)}>Blog</MobileLink>
            <MobileLink href={sectionHref("contacto")} onClick={(e) => { if (home) handleSection(e, "contacto"); setMobileOpen(false); }}>Contacto</MobileLink>

            <div style={{ marginTop: 14 }}>
              <Button variant="primary" size="md" onClick={() => { setMobileOpen(false); window.semAgendar(); }}>Agendar diagnóstico</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

Object.assign(window, { SiteHeader });
