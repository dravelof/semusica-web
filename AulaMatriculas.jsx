// AulaMatriculas.jsx — recreación on-brand del "Módulo de Matrículas y Pensiones".
// Mockup de producto: gestión de cobros y pensiones dentro del aula virtual (institutos/academias).
const MM = { green: "#00A859", greenSoft: "#E5F6EE", green700: "#006F3B", blue: "#3E4095", blueSoft: "#ECEDF6", amber: "#C98A1A", amberSoft: "#FAF0DA", red: "#C2384A", redSoft: "#F8E7EA", ink: "#11122E", ink3: "#555873", line: "#E3E4ED", surf: "#F6F7FB" };

const PayPill = ({ state }) => {
  const map = {
    pagado: ["Pagado", MM.green700, MM.greenSoft],
    pendiente: ["Pendiente", MM.amber, MM.amberSoft],
    vencido: ["Vencido", MM.red, MM.redSoft],
  };
  const [label, color, bg] = map[state];
  return <span style={{ fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color, background: bg, padding: "4px 10px", borderRadius: 999 }}>{label}</span>;
};

// Barra de cobranza mensual (recaudado vs. meta)
const CobranzaBars = () => {
  const data = [
    { m: "Ene", r: 82 }, { m: "Feb", r: 90 }, { m: "Mar", r: 76 },
    { m: "Abr", r: 88 }, { m: "May", r: 94 }, { m: "Jun", r: 68 },
  ];
  const H = 150;
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "stretch" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: H, fontSize: 10, color: MM.ink3, textAlign: "right", paddingBottom: 20 }}>
        {["100%", "75%", "50%", "25%", "0"].map((t) => <span key={t}>{t}</span>)}
      </div>
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: `repeat(${data.length}, 1fr)`, gap: 12, alignItems: "end", borderLeft: `1px solid ${MM.line}`, paddingLeft: 14 }}>
        {data.map((d) => (
          <div key={d.m} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "100%", maxWidth: 46, height: H, display: "flex", alignItems: "flex-end", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, background: MM.blueSoft, borderRadius: "4px 4px 0 0" }} />
              <div style={{ width: "100%", height: (d.r / 100) * H, background: d.r >= 85 ? MM.green : MM.amber, borderRadius: "4px 4px 0 0", position: "relative", zIndex: 1 }} />
            </div>
            <div style={{ fontSize: 11, color: MM.ink3, marginTop: 8 }}>{d.m}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AulaMatriculas = () => {
  const tabs = ["Resumen", "Matrículas", "Pensiones", "Cobranzas", "Reportes"];
  const kpis = [
    { v: "318", l: "Matriculados", fill: false },
    { v: "S/ 41.2k", l: "Recaudado (mes)", fill: false },
    { v: "27", l: "Pensiones vencidas", fill: false },
    { v: "86%", l: "Tasa de cobranza", fill: true },
  ];
  const alumnos = [
    { n: "María Quispe Lloclla", prog: "Producción Musical", ciclo: "III", monto: "S/ 480", st: "pagado" },
    { n: "Diego Salazar Ríos", prog: "Guitarra Contemporánea", ciclo: "II", monto: "S/ 420", st: "pendiente" },
    { n: "Lucía Mendoza Farfán", prog: "Canto y Vocalización", ciclo: "IV", monto: "S/ 520", st: "pagado" },
    { n: "Carlos Huamán Pérez", prog: "Producción Musical", ciclo: "I", monto: "S/ 480", st: "vencido" },
    { n: "Andrea Flores Tello", prog: "Piano Jazz", ciclo: "III", monto: "S/ 460", st: "pagado" },
  ];
  return (
    <div style={{ background: MM.surf, fontFamily: "var(--font-sans)", color: MM.ink, padding: "22px 24px 26px" }}>
      <div style={{ fontSize: 12, color: MM.blue, marginBottom: 10 }}>← Tablero del bloque <span style={{ color: MM.ink3 }}>/ Matrículas y pensiones</span></div>
      <div style={{ borderLeft: `4px solid ${MM.green}`, paddingLeft: 14, marginBottom: 16 }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: MM.blue, letterSpacing: "0.005em" }}>Gestión de Matrículas y Pensiones</div>
        <div style={{ fontSize: 12, color: MM.ink3, marginTop: 4 }}>Periodo 2026-I · 318 estudiantes activos · Actualizado al 02/06/2026</div>
      </div>
      <div style={{ display: "flex", gap: 26, borderBottom: `1px solid ${MM.line}`, marginBottom: 18, overflowX: "auto" }}>
        {tabs.map((t, i) => (
          <div key={t} style={{ fontSize: 13, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? MM.blue : MM.ink3, padding: "0 0 10px", borderBottom: i === 0 ? `2px solid ${MM.green}` : "2px solid transparent", whiteSpace: "nowrap" }}>{t}</div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 16 }}>
        {kpis.map((k) => (
          <div key={k.l} style={{ background: k.fill ? MM.blue : "#fff", border: `1px solid ${k.fill ? MM.blue : MM.line}`, borderRadius: 12, padding: "18px 18px" }}>
            <div style={{ fontFamily: "var(--font-display-ext)", fontSize: 26, fontWeight: 700, color: k.fill ? "#fff" : MM.blue, lineHeight: 1 }}>{k.v}</div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: k.fill ? "rgba(255,255,255,.85)" : MM.ink3, marginTop: 8 }}>{k.l}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 14 }}>
        {/* Tabla de estudiantes */}
        <div style={{ background: "#fff", border: `1px solid ${MM.line}`, borderRadius: 12, padding: "16px 18px" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: MM.blue, marginBottom: 12 }}>Pensiones del mes</div>
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 0.5fr 0.6fr 0.7fr", gap: 8, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: MM.ink3, paddingBottom: 10, borderBottom: `1px solid ${MM.line}` }}>
            <span>Estudiante</span><span>Ciclo</span><span>Monto</span><span style={{ textAlign: "right" }}>Estado</span>
          </div>
          {alumnos.map((a, i) => (
            <div key={a.n} style={{ display: "grid", gridTemplateColumns: "1.6fr 0.5fr 0.6fr 0.7fr", gap: 8, alignItems: "center", padding: "11px 0", borderBottom: i < alumnos.length - 1 ? `1px solid ${MM.line}` : "none" }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: MM.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.n}</div>
                <div style={{ fontSize: 11, color: MM.ink3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.prog}</div>
              </div>
              <span style={{ fontSize: 12, color: MM.ink3 }}>{a.ciclo}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: MM.ink }}>{a.monto}</span>
              <div style={{ textAlign: "right" }}><PayPill state={a.st} /></div>
            </div>
          ))}
        </div>
        {/* Cobranza mensual */}
        <div style={{ background: "#fff", border: `1px solid ${MM.line}`, borderRadius: 12, padding: "16px 18px", display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: MM.blue, marginBottom: 14 }}>Cobranza vs. meta</div>
          <CobranzaBars />
          <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 14, fontSize: 11, color: MM.ink3 }}>
            {[["≥ 85%", MM.green], ["< 85%", MM.amber], ["Meta", MM.blueSoft]].map(([l, c]) => (
              <span key={l} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 9, height: 9, borderRadius: 999, background: c }} />{l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { AulaMatriculas });
