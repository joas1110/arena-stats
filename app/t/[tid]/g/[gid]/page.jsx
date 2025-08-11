import Scoreboard from "@/components/Scoreboard";
import BoxTable from "@/components/BoxTable";

export default function GamePage({ params }) {
  const { tid, gid } = params;
  return (
    <div className="space-y-6">
      <h1 className="h1">Partido • Torneo {tid} • ID {gid}</h1>
      <Scoreboard />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BoxTable title="Local - Box score" />
        <BoxTable title="Visitante - Box score" />
      </div>
    </div>
  );
}
