// BrandIcon.jsx — iconografía de marca (set Lucide, 1.75px stroke, currentColor).
// Regla del sistema: trazo simple, sin burbujas, color de marca solo como acento.
const BRAND_ICON_PATHS = {
  "clock": <g><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></g>,
  "globe": <g><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></g>,
  "users": <g><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></g>,
  "user": <g><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></g>,
  "lightbulb": <g><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4.95 11.95c.62.62.95 1.45.95 2.05h8c0-.6.33-1.43.95-2.05A7 7 0 0 0 12 2z" /></g>,
  "heart": <g><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z" /></g>,
  "sparkle": <g><path d="M12 3l1.9 5.8a2 2 0 0 0 1.28 1.28L21 12l-5.82 1.92a2 2 0 0 0-1.28 1.28L12 21l-1.9-5.8a2 2 0 0 0-1.28-1.28L3 12l5.82-1.92a2 2 0 0 0 1.28-1.28z" /></g>,
  "compass": <g><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></g>,
  "zap": <g><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></g>,
  "graduation-cap": <g><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></g>,
  "play-circle": <g><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></g>,
  "building-2": <g><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4M10 10h4M10 14h4M10 18h4" /></g>,
  "bar-chart": <g><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></g>,
  "credit-card": <g><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></g>,
  "edit": <g><path d="m9 11-6 6v3h3l6-6" /><path d="m22 6-3-3a1 1 0 0 0-1.41 0L9 11l4 4 8.59-8.59a1 1 0 0 0 0-1.41z" /></g>,
  "cpu": <g><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></g>,
  "book-open": <g><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></g>,
};

const BrandIcon = ({ name, size = 28, color = "var(--sm-ink-3)", strokeWidth = 1.75, style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={style}
  >
    {BRAND_ICON_PATHS[name] || null}
  </svg>
);

// BrandOrbit — la órbita del logotipo como ornamento gráfico sutil.
const BrandOrbit = ({ width = 110, style }) => (
  <svg width={width} height={Math.round(width * 0.55)} viewBox="0 0 120 66" fill="none" aria-hidden="true" style={style}>
    <ellipse cx="60" cy="33" rx="55" ry="20" stroke="#00A859" strokeWidth="2" opacity="0.85" transform="rotate(-8 60 33)" />
    <ellipse cx="60" cy="33" rx="44" ry="14" stroke="#3E4095" strokeWidth="1.5" opacity="0.45" transform="rotate(-8 60 33)" />
    <circle cx="106" cy="18" r="4" fill="#00A859" />
  </svg>
);

Object.assign(window, { BrandIcon, BrandOrbit });
