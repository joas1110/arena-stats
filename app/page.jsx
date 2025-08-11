export default function Home() {
  const torneos = [
    { name: "Liga Profesional 2024", teams: 12, games: 24, status: "En vivo" },
    { name: "Copa de Verano", teams: 8, games: 16, status: "Próximamente" },
    { name: "Torneo Juvenil", teams: 16, games: 32, status: "En curso" },
  ];
  const proximos = [
    { t: "Hoy", time: "20:30", title: "Lakers vs Warriors", court: "Cancha Central" },
    { t: "Hoy", time: "22:00", title: "Bulls vs Celtics", court: "Cancha 2" },
    { t: "Mañana", time: "19:00", title: "Heat vs Spurs", court: "Cancha Central" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <section className="lg:col-span-2 card">
        <h2 className="h2 mb-4">Torneos Activos</h2>
        <div className="space-y-3">
          {torneos.map((t) => (
            <div key={t.name} className="rounded-xl" style={{background:'#1C2436', padding:'1rem', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <div>
                <div style={{color:'#fff', fontWeight:600}}>{t.name}</div>
                <div className="muted" style={{fontSize:'.9rem'}}>{t.teams} equipos • {t.games} partidos</div>
              </div>
              <span className="badge">{t.status}</span>
            </div>
          ))}
        </div>
      </section>
      <aside className="card">
        <h2 className="h2 mb-4">Próximos Partidos</h2>
        <div className="space-y-3">
          {proximos.map((g, i) => (
            <div key={i} className="rounded-xl" style={{background:'#1C2436', padding:'1rem', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <div>
                <div style={{color:'#fff', fontWeight:600}}>{g.title}</div>
                <div className="muted" style={{fontSize:'.9rem'}}>{g.t} • {g.court}</div>
              </div>
              <div style={{color:'#FF6600', fontWeight:700}}>{g.time}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop:'1.5rem', display:'grid', gap:'8px'}}>
  <a href="/t/demo" className="btn" style={{width:'100%'}}>Ver torneo demo</a>
  <a href="/t/demo/g/123" className="btn" style={{width:'100%'}}>Ver partido demo</a>
</div>
      </aside>
      <section className="lg:col-span-3 card">
        <h2 className="h2 mb-4">Sponsors</h2>
        <div className="muted">Espacio para banners / logos de patrocinadores.</div>
      </section>
    </div>
  );
}

