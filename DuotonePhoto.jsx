// DuotonePhoto.jsx — fotografía con tratamiento duotono de marca (azul→verde).
//
// Cómo funciona: la foto se muestra en escala de grises y encima se mezclan
// dos capas con los colores de marca (multiply + screen) → cualquier foto,
// venga de donde venga, queda integrada en la paleta Sé Música.
//
// A prueba de fallos: si la imagen no carga (URL rota, sin conexión), el
// componente muestra `fallback` (la gráfica abstracta actual). El sitio nunca
// se ve roto.
//
// Para cambiar una foto: edita window.SEMUSICA.photos en siteconfig.js —
// pon ahí la ruta local (p. ej. "assets/photos/hero.jpg") cuando tengas
// fotografía propia. Nada más que tocar.
const DuotonePhoto = ({ src, alt = "", tone = "green", fallback = null, priority = false, style = {} }) => {
  const [failed, setFailed] = React.useState(false);

  if (!src || failed) return fallback;

  // Duotono: sombras → color profundo de marca; luces → tinte claro.
  // "neutral" = tratamiento gris (sin tinte de color), para retratos que deben
  // leerse en gris, en armonía con las demás fotografías del sitio.
  const tones = {
    blue: { shadow: "#25275F", light: "#8E90D9" },
    green: { shadow: "#00713C", light: "#80D3A6" },
    neutral: { shadow: "#2C2E3A", light: "#C9CCD6" },
  };
  const { shadow, light } = tones[tone] || tones.green;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", ...style }}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchpriority={priority ? "high" : "auto"}
        onError={() => setFailed(true)}
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", display: "block",
          filter: "grayscale(1) contrast(1.06) brightness(1.02)",
        }}
      />
      {/* Capa de sombras (multiply) */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: shadow, mixBlendMode: "multiply", opacity: 0.55 }}></div>
      {/* Capa de luces (screen) */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: light, mixBlendMode: "screen", opacity: 0.38 }}></div>
    </div>
  );
};

Object.assign(window, { DuotonePhoto });

// PhotoSlot.jsx (en el mismo archivo) — ranura de fotografía con etiqueta.
// • Si window.SEMUSICA.photos[photoKey] tiene una ruta → muestra la foto con
//   tratamiento duotono de marca.
// • Si está vacío → muestra un placeholder rayado, elegante y ROTULADO, que
//   indica EXACTAMENTE qué foto va ahí y dónde activarla (siteconfig.js).
// Pensado para que, en producción, se vea intencional mientras llega la foto real.
const PhotoSlot = ({ photoKey, label, hint, tone = "blue", priority = false, radius = 20, icon = "image", style = {} }) => {
  const src = window.SEMUSICA && window.SEMUSICA.photos && window.SEMUSICA.photos[photoKey];

  const mono = "var(--font-mono)";
  const placeholder = (
    <div style={{
      position: "absolute", inset: 0, borderRadius: radius, overflow: "hidden",
      background: "repeating-linear-gradient(135deg, #EEF0F6 0, #EEF0F6 11px, #E4E6F0 11px, #E4E6F0 22px)",
      border: "1px dashed var(--border-strong)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{ textAlign: "center", padding: "26px 24px", background: "rgba(255,255,255,.82)", borderRadius: 14, maxWidth: "84%" }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--sm-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 12, opacity: 0.85 }}>
          <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.6" /><path d="m21 15-5-5L5 21" />
        </svg>
        <div style={{ fontFamily: mono, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--sm-blue)", marginBottom: 7 }}>Foto · {label}</div>
        {hint && <div style={{ fontFamily: mono, fontSize: 11, lineHeight: 1.5, color: "var(--sm-ink-3)", marginBottom: 9 }}>{hint}</div>}
        <div style={{ fontFamily: mono, fontSize: 10, color: "var(--sm-ink-4)" }}>siteconfig.js → photos.{photoKey}</div>
      </div>
    </div>
  );

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: radius, overflow: "hidden", ...style }}>
      <DuotonePhoto src={src} tone={tone} alt={label} priority={priority} fallback={placeholder} />
    </div>
  );
};

Object.assign(window, { PhotoSlot });
