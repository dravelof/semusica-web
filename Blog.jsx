// Blog.jsx — portada del blog (BlogIndex), plantilla de artículo (BlogArticle)
// y barra de compartir (ShareBar). Todo on-brand. Sin backend: las entradas
// se co-diseñan como archivos; "compartir" usa los enlaces nativos de cada red.

// ── Color de marca por entrada ──────────────────────────────────────────────
// Las cabeceras del blog INTERCALAN los dos colores de la marca (azul y verde)
// según el orden cronológico de las entradas: la 1.ª azul, la 2.ª verde, la 3.ª
// azul… Esto sustituye al "accent" fijo de cada post, de modo que al añadir o
// reordenar entradas la alternancia se mantiene sola. (Requiere posts.js cargado.)
const sortPosts = (list) => (list || []).slice().sort((a, b) => {
  if (!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
  return a.iso < b.iso ? 1 : -1;
});
const accentForSlug = (slug) => {
  const posts = sortPosts(window.SEMUSICA_POSTS);
  const i = posts.findIndex((p) => p.slug === slug);
  if (i < 0) return null; // sin índice cargado → se usa el accent propio del post
  return i % 2 === 0 ? "blue" : "green";
};
// Ancla URL-safe a partir del texto de un encabezado (para el índice del artículo).
const slugify = (s) => String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
Object.assign(window, { sortPosts, accentForSlug, slugify });

// ── Barra de compartir (LinkedIn / WhatsApp / Copiar enlace) ─────────────────
const ShareBar = ({ title }) => {
  const [copied, setCopied] = React.useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const enc = encodeURIComponent(url);
  const encT = encodeURIComponent(title || document.title);

  const liStyle = {
    display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-sans)",
    fontSize: 14, fontWeight: 500, textDecoration: "none", padding: "10px 16px",
    borderRadius: 999, border: "1px solid var(--border)", color: "var(--sm-ink)",
    background: "var(--sm-card)", cursor: "pointer", transition: "background 140ms, color 140ms, border-color 140ms",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--sm-ink-4)", marginRight: 4 }}>Compartir</span>

      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc}`} target="_blank" rel="noopener noreferrer" style={liStyle}
        onClick={() => { if (window.semTrack) window.semTrack("blog_compartir", { red: "linkedin", titulo: title || document.title }); }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#0A66C2"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#0A66C2"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "var(--sm-card)"; e.currentTarget.style.color = "var(--sm-ink)"; e.currentTarget.style.borderColor = "var(--border)"; }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0z"/></svg>
        LinkedIn
      </a>

      <a href={`https://wa.me/?text=${encT}%20${enc}`} target="_blank" rel="noopener noreferrer" style={liStyle}
        onClick={() => { if (window.semTrack) window.semTrack("blog_compartir", { red: "whatsapp", titulo: title || document.title }); }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#25D366"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#25D366"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "var(--sm-card)"; e.currentTarget.style.color = "var(--sm-ink)"; e.currentTarget.style.borderColor = "var(--border)"; }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.16c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2.01.89 2.16.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.19.68-.79.86-1.07.18-.27.36-.22.61-.13.25.09 1.57.74 1.84.87.27.14.45.2.51.32.07.12.07.66-.17 1.34z"/></svg>
        WhatsApp
      </a>

      <button onClick={() => { navigator.clipboard?.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1800); if (window.semTrack) window.semTrack("blog_compartir", { red: "copiar_enlace", titulo: title || document.title }); }} style={liStyle}
        onMouseEnter={(e) => { e.currentTarget.style.background = "var(--sm-blue-50)"; e.currentTarget.style.borderColor = "var(--sm-blue)"; e.currentTarget.style.color = "var(--sm-blue)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "var(--sm-card)"; e.currentTarget.style.color = "var(--sm-ink)"; e.currentTarget.style.borderColor = "var(--border)"; }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        {copied ? "¡Copiado!" : "Copiar enlace"}
      </button>
    </div>
  );
};

// ── Tarjeta cover (imagen del usuario o fallback de marca con la categoría) ──
const Cover = ({ cover, category, accent, height }) => {
  const ac = accent === "green" ? "var(--sm-green)" : "var(--sm-blue)";
  if (cover) {
    return <img src={cover} alt="" style={{ width: "100%", height, objectFit: "cover", display: "block" }} />;
  }
  return (
    <div style={{ width: "100%", height, background: accent === "green" ? "var(--sm-green)" : "var(--sm-blue)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg aria-hidden="true" viewBox="0 0 400 300" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .35 }}>
        <ellipse cx="320" cy="60" rx="180" ry="120" fill="none" stroke="#80D3A6" strokeWidth="1.4" />
        <ellipse cx="320" cy="60" rx="240" ry="160" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1" />
      </svg>
      <span className="b-cover-cat" style={{ fontFamily: "var(--font-display-ext)", fontSize: 20, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,.9)", position: "relative", textAlign: "center", lineHeight: 1.15, padding: "0 28px", maxWidth: "100%" }}>{category}</span>
    </div>
  );
};

// ── Portada del blog ─────────────────────────────────────────────────────────
const BlogIndex = () => {
  // Alterna azul/verde por posición cronológica (cabeceras intercaladas).
  const allPosts = sortPosts(window.SEMUSICA_POSTS).map((p, i) => ({ ...p, accent: i % 2 === 0 ? "blue" : "green" }));
  const [cat, setCat] = React.useState("Todas");
  const cats = ["Todas", ...Array.from(new Set(allPosts.map((p) => p.category)))];
  const list = cat === "Todas" ? allPosts : allPosts.filter((p) => p.category === cat);
  const showFeatured = cat === "Todas" && list.length > 0;
  const feat = showFeatured ? list[0] : null;
  const rest = showFeatured ? list.slice(1) : list;

  return (
    <div>
      <SiteHeader active="blog" />

      {/* Hero */}
      <section style={{ background: "var(--sm-blue)", color: "#fff", padding: "var(--sp-20) var(--gutter) var(--sp-24)", position: "relative", overflow: "hidden" }}>
        <svg aria-hidden="true" viewBox="0 0 1440 500" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .3 }}>
          <ellipse cx="1200" cy="80" rx="620" ry="320" fill="none" stroke="#00A859" strokeWidth="1.4" />
        </svg>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", position: "relative" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#80D3A6", marginBottom: 20 }}>Blog</div>
          <h1 style={{ fontFamily: "var(--font-display-ext)", fontSize: "clamp(2.1rem, 4.6vw, 3.6rem)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "0.01em", textTransform: "uppercase", color: "#fff", margin: 0, maxWidth: 900, textWrap: "balance" }}>
            Ideas sobre <span style={{ color: "#80D3A6" }}>aprendizaje y tecnología</span>
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)", lineHeight: 1.6, color: "rgba(255,255,255,.85)", marginTop: 22, maxWidth: 640 }}>
            Reflexiones, guías y casos sobre e-learning, diseño instruccional y tecnología educativa con sentido humano.
          </p>
        </div>
      </section>

      {/* Listado */}
      <section style={{ background: "var(--sm-card)", padding: "var(--sp-24) var(--gutter)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          {/* Índice por categoría — navegación temática del blog */}
          {allPosts.length > 0 && (
            <div className="b-filter" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
              {cats.map((c) => {
                const active = c === cat;
                return (
                  <button key={c} type="button" onClick={() => setCat(c)} aria-pressed={active} style={{
                    font: "inherit", cursor: "pointer", fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700,
                    letterSpacing: "0.08em", textTransform: "uppercase", padding: "9px 18px", borderRadius: 999,
                    border: "1px solid " + (active ? "var(--sm-blue)" : "var(--border)"),
                    background: active ? "var(--sm-blue)" : "var(--sm-card)", color: active ? "#fff" : "var(--sm-ink-3)",
                    transition: "background 140ms, color 140ms, border-color 140ms",
                  }} onClick={() => { setCat(c); if (window.semTrack) window.semTrack("blog_filtro", { categoria: c }); }}>{c}</button>
                );
              })}
            </div>
          )}

          {list.length === 0 && (
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 18, color: "var(--sm-ink-3)" }}>Pronto publicaremos nuevas entradas en esta categoría.</p>
          )}

          {/* Destacada */}
          {feat && (
            <a href={`blog-${feat.slug}.html`} style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: 56 }}>
              <article className="b-feat" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 0, border: "1px solid var(--border)", borderRadius: 24, overflow: "hidden", background: "var(--sm-card)", boxShadow: "var(--shadow-sm)" }}>
                <Cover cover={feat.cover} category={feat.category} accent={feat.accent} height={360} />
                <div style={{ padding: "44px 44px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                    <span style={{ color: feat.accent === "green" ? "var(--sm-green-700)" : "var(--sm-blue)" }}>{feat.category}</span>
                    <span style={{ color: "var(--sm-ink-4)" }}>·</span>
                    <span style={{ color: "var(--sm-ink-4)" }}>{feat.date}</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-display-ext)", fontSize: "clamp(1.6rem, 2.6vw, 2.3rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "0.01em", textTransform: "uppercase", color: "var(--sm-ink)", margin: 0, textWrap: "balance" }}>{feat.title}</h2>
                  <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 16, lineHeight: 1.6, color: "var(--sm-ink-2)", margin: 0 }}>{feat.excerpt}</p>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: feat.accent === "green" ? "var(--sm-green-700)" : "var(--sm-blue)", marginTop: 4 }}>Leer artículo →</span>
                </div>
              </article>
            </a>
          )}

          {/* Resto en grilla */}
          {rest.length > 0 && (
            <div className="b-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
              {rest.map((p) => (
                <a key={p.slug} href={`blog-${p.slug}.html`} style={{ textDecoration: "none", color: "inherit" }}>
                  <article style={{ border: "1px solid var(--border)", borderRadius: 18, overflow: "hidden", background: "var(--sm-card)", height: "100%", display: "flex", flexDirection: "column", transition: "box-shadow 160ms, transform 160ms" }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                    <Cover cover={p.cover} category={p.category} accent={p.accent} height={180} />
                    <div style={{ padding: "24px 26px 28px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                        <span style={{ color: p.accent === "green" ? "var(--sm-green-700)" : "var(--sm-blue)" }}>{p.category}</span>
                        <span style={{ color: "var(--sm-ink-4)" }}>·</span>
                        <span style={{ color: "var(--sm-ink-4)" }}>{p.date}</span>
                      </div>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, lineHeight: 1.25, color: "var(--sm-ink)", margin: 0 }}>{p.title}</h3>
                      <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 14.5, lineHeight: 1.6, color: "var(--sm-ink-3)", margin: 0 }}>{p.excerpt}</p>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

// ── Entradas sugeridas (navegación entre artículos) ────────────────────────
const SuggestedPosts = ({ currentSlug }) => {
  const posts = sortPosts(window.SEMUSICA_POSTS).map((p, i) => ({ ...p, accent: i % 2 === 0 ? "blue" : "green" }));
  if (posts.length < 2) return null;
  const idx = Math.max(0, posts.findIndex((p) => p.slug === currentSlug));
  // Las dos entradas siguientes en orden cronológico (circular), sin repetir la actual.
  const picks = [];
  for (let k = 1; picks.length < 2 && k < posts.length; k++) {
    const p = posts[(idx + k) % posts.length];
    if (p.slug !== currentSlug) picks.push(p);
  }
  if (picks.length === 0) return null;

  return (
    <section style={{ background: "var(--sm-card)", padding: "var(--sp-20) var(--gutter) var(--sp-24)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--sm-ink-4)", marginBottom: 22 }}>Continúe leyendo</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }}>
          {picks.map((p) => {
            const ac = p.accent === "green" ? "var(--sm-green)" : "var(--sm-blue)";
            const acDark = p.accent === "green" ? "var(--sm-green-700)" : "var(--sm-blue)";
            return (
              <a key={p.slug} href={`blog-${p.slug}.html`} style={{ textDecoration: "none", color: "inherit" }}>
                <article style={{ border: "1px solid var(--border)", borderRadius: 18, overflow: "hidden", background: "var(--sm-card)", height: "100%", display: "flex", flexDirection: "column", transition: "box-shadow 160ms, transform 160ms" }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                  <div aria-hidden="true" style={{ height: 6, background: ac }} />
                  <div style={{ padding: "22px 26px 26px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                      <span style={{ color: acDark }}>{p.category}</span>
                      <span style={{ color: "var(--sm-ink-4)" }}>·</span>
                      <span style={{ color: "var(--sm-ink-4)" }}>{p.date}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, lineHeight: 1.25, color: "var(--sm-ink)", margin: 0 }}>{p.title}</h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 14.5, lineHeight: 1.6, color: "var(--sm-ink-3)", margin: 0 }}>{p.excerpt}</p>
                    <span style={{ marginTop: "auto", paddingTop: 6, fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: acDark }}>Leer artículo →</span>
                  </div>
                </article>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
Object.assign(window, { SuggestedPosts });

// ── Plantilla de artículo ───────────────────────────────────────────────────
const BlogArticle = ({ post }) => {
  // Alterna azul/verde según el orden del blog (cabeceras intercaladas);
  // si posts.js no está cargado, usa el accent propio del post.
  const accent = accentForSlug(post.slug) || post.accent;
  const ac = accent === "green" ? "var(--sm-green)" : "var(--sm-blue)";
  const acDark = accent === "green" ? "var(--sm-green-700)" : "var(--sm-blue)";

  const renderBlock = (b, i) => {
    if (b.h) return <h2 key={i} id={slugify(b.h)} style={{ fontFamily: "var(--font-display-ext)", fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "0.01em", textTransform: "uppercase", color: "var(--sm-ink)", margin: "44px 0 18px", scrollMarginTop: 90, textWrap: "balance" }}>{b.h}</h2>;
    if (b.quote) return (
      <blockquote key={i} style={{ margin: "32px 0", paddingLeft: 26, borderLeft: `3px solid ${ac}` }}>
        <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.25rem, 2vw, 1.6rem)", lineHeight: 1.35, color: "var(--sm-ink)", margin: 0, textWrap: "balance" }}>{b.quote}</p>
      </blockquote>
    );
    if (b.img) return <img key={i} src={b.img} alt={b.alt || ""} style={{ width: "100%", borderRadius: 16, margin: "32px 0", display: "block" }} />;
    if (b.list) return (
      <ul key={i} style={{ margin: "20px 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
        {b.list.map((it, j) => (
          <li key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: "var(--font-sans)" }}>
            <span style={{ marginTop: 9, width: 16, height: 2, background: ac, flexShrink: 0 }} />
            <span style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.65, color: "var(--sm-ink-2)" }}>{it}</span>
          </li>
        ))}
      </ul>
    );
    return <p key={i} style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 17.5, lineHeight: 1.75, color: "var(--sm-ink-2)", margin: "0 0 20px" }}>{b.p}</p>;
  };

  return (
    <div>
      <SiteHeader active="blog" />

      {/* Hero del artículo */}
      <section style={{ background: accent === "green" ? "var(--sm-green)" : "var(--sm-blue)", color: "#fff", padding: "var(--sp-20) var(--gutter) var(--sp-24)", position: "relative", overflow: "hidden" }}>
        <svg aria-hidden="true" viewBox="0 0 1440 500" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .28 }}>
          <ellipse cx="1200" cy="80" rx="620" ry="320" fill="none" stroke={accent === "green" ? "#fff" : "#00A859"} strokeWidth="1.4" />
        </svg>
        <div style={{ maxWidth: 880, margin: "0 auto", position: "relative" }}>
          <a href="blog.html" style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,.85)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 26 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
            Blog
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,.9)", marginBottom: 18 }}>
            <span>{post.category}</span><span style={{ opacity: .6 }}>·</span><span>{post.date}</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display-ext)", fontSize: "clamp(1.9rem, 3.8vw, 3rem)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "0.01em", textTransform: "uppercase", color: "#fff", margin: 0, textWrap: "balance" }}>{post.title}</h1>
          <div style={{ marginTop: 26, display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--font-sans)", fontSize: 15, color: "rgba(255,255,255,.85)" }}>
            <span style={{ width: 38, height: 38, borderRadius: 999, background: "rgba(255,255,255,.16)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14 }}>{post.authorInitials || "SM"}</span>
            <span>Por <strong style={{ fontWeight: 600, color: "#fff" }}>{post.author || "Sé Música"}</strong></span>
          </div>
        </div>
      </section>

      {/* Cuerpo */}
      <article style={{ background: "var(--sm-card)", padding: "var(--sp-24) var(--gutter)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {post.lead && <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "clamp(1.15rem, 1.7vw, 1.35rem)", lineHeight: 1.6, color: "var(--sm-ink)", margin: "0 0 30px", textWrap: "balance" }}>{post.lead}</p>}
          {post.blocks.map(renderBlock)}

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
            <ShareBar title={post.title} />
          </div>
        </div>
      </article>

      <SuggestedPosts currentSlug={post.slug} />

      {/* CTA */}
      <section style={{ background: "var(--sm-surface)", padding: "var(--sp-20) var(--gutter)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "var(--sm-ink)", margin: 0, textTransform: "uppercase", letterSpacing: "0.01em" }}>¿Hablamos de su proyecto?</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 15, color: "var(--sm-ink-3)", margin: "6px 0 0" }}>Una reunión de diagnóstico, sin compromiso.</p>
          </div>
          <Button variant="primary" onClick={() => window.semAgendar()}>Agendar diagnóstico</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

Object.assign(window, { ShareBar, BlogIndex, BlogArticle });
