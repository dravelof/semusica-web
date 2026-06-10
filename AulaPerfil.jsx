// AulaPerfil.jsx — recreación on-brand del panel "Mi Cumplimiento" del colaborador.
// Mockup de producto real: panel avanzado de perfil de usuario dentro del aula virtual.
const MP = { green: "#00A859", greenSoft: "#E5F6EE", green700: "#006F3B", blue: "#3E4095", blueSoft: "#ECEDF6", red: "#C2384A", ink: "#11122E", ink3: "#555873", line: "#E3E4ED", surf: "#F6F7FB" };

// — Donut de avance personal (38%) —
const PerfilDonut = () => {
  const r = 40, C = 2 * Math.PI * r;
  const segs = [
    { v: 0.375, color: MP.green },
    { v: 0.500, color: MP.blue },
    { v: 0.125, color: MP.red },
  ];
  let acc = 0;
  return (
    <div style={{ position: "relative", width: 112, height: 112 }}>
      <svg viewBox="0 0 110 110" style={{ width: 112, height: 112 }}>
        <g transform="rotate(-90 55 55)">
          {segs.map((s, i) => {
            const len = s.v * C, off = -acc * C; acc += s.v;
            return <circle key={i} cx="55" cy="55" r={r} fill="none" stroke={s.color} strokeWidth="11" strokeDasharray={`${len} ${C - len}`} strokeDashoffset={off} />;
          })}
        </g>
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontFamily: "var(--font-display-ext)", fontSize: 24, fontWeight: 700, color: MP.blue, lineHeight: 1 }}>38%</div>
        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", color: MP.ink3, marginTop: 2 }}>CUMPLIDO</div>
      </div>
    </div>
  );
};

const Bar = ({ pct, color }) => (
  <div style={{ height: 9, borderRadius: 999, background: "#EAECF3", overflow: "hidden" }}>
    <div style={{ width: `${pct}%`, height: "100%", borderRadius: 999, background: color }} />
  </div>
);

const StatusBadge = ({ text, tone }) => {
  const map = {
    done: { bg: MP.greenSoft, fg: MP.green700 },
    prog: { bg: MP.blueSoft, fg: MP.blue },
  };
  const c = map[tone] || map.prog;
  return <span style={{ fontSize: 11, fontWeight: 600, color: c.fg, background: c.bg, borderRadius: 999, padding: "4px 12px", whiteSpace: "nowrap" }}>{text}</span>;
};

const AulaPerfil = () => {
  const comps = [
    { t: "Seguridad operativa en planta", pct: 100, tone: "done", badge: "Lograda", color: MP.green },
    { t: "Uso de equipos de protección personal", pct: 100, tone: "done", badge: "Lograda", color: MP.green },
    { t: "Gestión de calidad ISO 9001", pct: 45, tone: "prog", badge: "En desarrollo", color: MP.blue },
    { t: "Trabajo en equipo y comunicación", pct: 20, tone: "prog", badge: "En desarrollo", color: MP.blue },
  ];
  const badges = [
    { t: "Inducción completa", c: "#E1A100", star: "#fff" },
    { t: "Seguridad 2026", c: MP.green, star: "#fff" },
    { t: "Calidad ISO", c: MP.blue, star: "#fff" },
  ];
  return (
    <div style={{ background: MP.surf, fontFamily: "var(--font-sans)", color: MP.ink, padding: "22px 24px 26px" }}>
      <div style={{ fontSize: 12, color: MP.ink3, marginBottom: 12 }}>Área personal <span style={{ color: MP.ink3 }}>/ Mi Cumplimiento</span></div>

      {/* Profile card */}
      <div style={{ background: "#fff", border: `1px solid ${MP.line}`, borderRadius: 16, padding: "22px 24px", display: "flex", alignItems: "center", gap: 22, marginBottom: 16 }}>
        <div style={{ width: 72, height: 72, borderRadius: 999, background: MP.blue, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, flexShrink: 0 }}>LQ</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: MP.ink }}>Luis Quispe Ramos</div>
          <div style={{ display: "inline-block", fontSize: 11, fontWeight: 600, color: MP.blue, background: MP.blueSoft, borderRadius: 999, padding: "4px 12px", marginTop: 8 }}>Operario — Planta Lima</div>
          <div style={{ fontSize: 13, color: MP.ink3, marginTop: 10 }}>Este es tu avance en los programas y cursos asignados</div>
          <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
            {[["3 Cumplido", MP.green], ["4 En progreso", MP.blue], ["1 Vencido", MP.red]].map(([l, c]) => (
              <span key={l} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12, color: MP.ink, border: `1px solid ${MP.line}`, borderRadius: 999, padding: "6px 14px" }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: c }} />{l}
              </span>
            ))}
          </div>
        </div>
        <PerfilDonut />
      </div>

      {/* Competencias */}
      <div style={{ background: "#fff", border: `1px solid ${MP.line}`, borderRadius: 16, padding: "22px 24px", marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: MP.blue }}>Competencias a desarrollar</div>
          <div style={{ fontSize: 12, color: MP.ink3 }}>2/4 · 50%</div>
        </div>
        <div style={{ marginBottom: 20 }}><Bar pct={50} color={MP.blue} /></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {comps.map((c) => (
            <div key={c.t}>
              <div style={{ fontSize: 14, color: MP.ink, marginBottom: 8 }}>{c.t}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: MP.ink3, width: 36 }}>{c.pct}%</span>
                <div style={{ flex: 1 }}><Bar pct={c.pct} color={c.color} /></div>
                <StatusBadge text={c.badge} tone={c.tone} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insignias */}
      <div style={{ background: "#fff", border: `1px solid ${MP.line}`, borderRadius: 16, padding: "22px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: MP.blue }}>Insignias conseguidas</div>
          <div style={{ fontSize: 13, color: MP.ink3 }}>3</div>
        </div>
        <div style={{ display: "flex", gap: 36 }}>
          {badges.map((b) => (
            <div key={b.t} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, width: 88 }}>
              <div style={{ width: 52, height: 52, borderRadius: 999, background: b.c, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(17,18,46,.14)" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill={b.star}><path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" /></svg>
              </div>
              <div style={{ fontSize: 11, color: MP.ink3, textAlign: "center", lineHeight: 1.3 }}>{b.t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { AulaPerfil });
