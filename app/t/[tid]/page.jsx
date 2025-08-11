import LeadersList from "@/components/LeadersList";

export default function TournamentDashboard({ params }) {
  const { tid } = params;

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="h1">Torneo: {tid}</h1>
        <div className="flex gap-3">
          <a href={`/t/${tid}/standings`} className="btn">Tabla</a>
          <a href={`/t/${tid}/schedule`} className="btn">Fixture</a>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="card lg:col-span-2">
          <h2 className="h2 mb-3">Resumen</h2>
          <div className="muted">Partidos del día, equipos, etc.</div>
        </section>

        <LeadersList />
      </div>
    </div>
  );
}
