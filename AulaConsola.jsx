// AulaConsola.jsx — recreación on-brand de la "Consola de Cumplimiento" (vista Global).
// Mockup de producto real: módulo ERP de Gestión de Capacitaciones dentro del aula virtual.
const MC = { green: "#00A859", blue: "#3E4095", red: "#C2384A", ink: "#11122E", ink3: "#555873", line: "#E3E4ED", surf: "#F6F7FB" };

// — Donut: distribución del estado (62 / 25 / 13) —
const ConsolaDonut = () => {
  const r = 52, C = 2 * Math.PI * r;
  const segs = [
    { v: 0.617, color: MC.green },
    { v: 0.250, color: MC.blue },
    { v: 0.133, color: MC.red },
  ];
  let acc = 0;
  return (
    <svg viewBox="0 0 140 140" style={{ width: 188, height: 188 }}>
      <g transform="rotate(-90 70 70)">
        {segs.map((s, i) => {
          const len = s.v * C;
          const off = -acc * C;
          acc += s.v;
          return <circle key={i} cx="70" cy="70" r={r} fill="none" stroke={s.color} strokeWidth="20" strokeDasharray={`${len} ${C - len}`} strokeDashoffset={off} />;
        })}
      </g>
    </svg>
  );
};

// — Barras apiladas: estado de cumplimiento por planta —
const PlantBars = () => {
  const data = [
    { name: "Arequipa", c: 48, n: 16, v: 14 },
    { name: "Lima",     c: 48, n: 8,  v: 3 },
    { name: "Piura",    c: 50, n: 22, v: 10 },
    { name: "Trujillo", c: 60, n: 22, v: 20 },
  ];
  const max = 120, H = 200;
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "stretch" }}>
      {/* y-axis */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: H, fontSize: 10, color: MC.ink3, textAlign: "right", paddingBottom: 22 }}>
        {[120, 100, 80, 60, 40, 20, 0].map((t) => <span key={t}>{t}</span>)}
      </div>
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: `repeat(${data.length}, 1fr)`, gap: 10, alignItems: "end", borderLeft: `1px solid ${MC.line}`, paddingLeft: 14 }}>
        {data.map((d) => {
          const seg = (val, color, radiusTop) => (
            <div style={{ height: (val / max) * H, background: color, borderRadius: radiusTop ? "4px 4px 0 0" : 0 }} />
          );
          return (
            <div key={d.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
              <div style={{ width: "100%", maxWidth: 70, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: H }}>
                {seg(d.v, MC.red, true)}
                {seg(d.n, MC.blue, false)}
                {seg(d.c, MC.green, false)}
              </div>
              <div style={{ fontSize: 11, color: MC.ink3, marginTop: 8 }}>{d.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ConsolaLegend = () => (
  <div style={{ display: "flex", gap: 18, justifyContent: "center", marginTop: 14, fontSize: 11, color: MC.ink3 }}>
    {[["Cumplido", MC.green], ["No iniciado", MC.blue], ["Vencido", MC.red]].map(([l, c]) => (
      <span key={l} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
        <span style={{ width: 9, height: 9, borderRadius: 999, background: c }} />{l}
      </span>
    ))}
  </div>
);

const AulaConsola = () => {
  const tabs = ["Global", "Itinerarios formativos", "Cursos", "Roles", "Usuarios", "Asignaciones", "Presupuesto"];
  const kpis = [
    { v: "44", l: "Colaboradores", fill: false },
    { v: "324", l: "Asignaciones", fill: false },
    { v: "48", l: "Vencidos", fill: false },
    { v: "61.7%", l: "Cumplimiento", fill: true },
  ];
  const panelTitle = { fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: MC.blue, margin: 0 };
  return (
    <div style={{ background: MC.surf, fontFamily: "var(--font-sans)", color: MC.ink, padding: "22px 24px 26px" }}>
      {/* breadcrumb */}
      <div style={{ fontSize: 12, color: MC.blue, marginBottom: 10 }}>← Tablero del bloque <span style={{ color: MC.ink3 }}>/ Consola de cumplimiento</span></div>
      {/* title */}
      <div style={{ borderLeft: `4px solid ${MC.green}`, paddingLeft: 14, marginBottom: 16 }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: MC.blue, letterSpacing: "0.005em" }}>Consola de Cumplimiento — Equipo a cargo</div>
        <div style={{ fontSize: 12, color: MC.ink3, marginTop: 4 }}>Jefe: Rosa Campos · DNI 40218765 · Seguimiento de capacitaciones · Actualizado al 02/06/2026</div>
      </div>
      {/* tabs */}
      <div style={{ display: "flex", gap: 26, borderBottom: `1px solid ${MC.line}`, marginBottom: 18, overflowX: "auto" }}>
        {tabs.map((t, i) => (
          <div key={t} style={{ fontSize: 13, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? MC.blue : MC.ink3, padding: "0 0 10px", borderBottom: i === 0 ? `2px solid ${MC.green}` : "2px solid transparent", whiteSpace: "nowrap" }}>{t}</div>
        ))}
      </div>
      {/* filters */}
      <div style={{ background: "#fff", border: `1px solid ${MC.line}`, borderRadius: 12, padding: "14px 16px", display: "flex", gap: 16, alignItems: "flex-end", marginBottom: 16, flexWrap: "wrap" }}>
        {[["Planta", "Todas las plantas"], ["Cargo / Rol", "Todos los cargos"], ["Itinerario formativo", "Todos los itinerarios"]].map(([l, v]) => (
          <div key={l} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: MC.ink3 }}>{l}</span>
            <div style={{ fontSize: 12, color: MC.ink, border: `1px solid ${MC.line}`, borderRadius: 8, padding: "8px 28px 8px 10px", background: "#fff", position: "relative", minWidth: 150 }}>
              {v}<span style={{ position: "absolute", right: 10, top: 8, color: MC.ink3 }}>▾</span>
            </div>
          </div>
        ))}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 12, color: MC.ink3 }}>Limpiar filtros</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: MC.blue, border: `1px solid ${MC.blue}`, borderRadius: 8, padding: "8px 14px" }}>↓ Exportar CSV</span>
        </div>
      </div>
      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 16 }}>
        {kpis.map((k) => (
          <div key={k.l} style={{ background: k.fill ? MC.blue : "#fff", border: `1px solid ${k.fill ? MC.blue : MC.line}`, borderRadius: 12, padding: "18px 18px" }}>
            <div style={{ fontFamily: "var(--font-display-ext)", fontSize: 28, fontWeight: 700, color: k.fill ? "#fff" : MC.blue, lineHeight: 1 }}>{k.v}</div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: k.fill ? "rgba(255,255,255,.85)" : MC.ink3, marginTop: 8 }}>{k.l}</div>
          </div>
        ))}
      </div>
      {/* charts */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 14 }}>
        <div style={{ background: "#fff", border: `1px solid ${MC.line}`, borderRadius: 12, padding: "18px 18px 16px" }}>
          <p style={panelTitle}>Distribución del estado</p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}><ConsolaDonut /></div>
          <ConsolaLegend />
        </div>
        <div style={{ background: "#fff", border: `1px solid ${MC.line}`, borderRadius: 12, padding: "18px 18px 16px" }}>
          <p style={panelTitle}>Estado de cumplimiento por planta</p>
          <div style={{ marginTop: 16 }}><PlantBars /></div>
          <ConsolaLegend />
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { AulaConsola });
