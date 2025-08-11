export default function Standings() {
  const rows = [
    { team: "Tigres", pj: 5, pg: 5, pp: 0, pts: 10, dif: "+48" },
    { team: "Norte",  pj: 5, pg: 4, pp: 1, pts: 9,  dif: "+22" },
    { team: "Sur",    pj: 5, pg: 3, pp: 2, pts: 8,  dif: "+10" },
  ];
  return (
    <div className="card">
      <h2 className="h2 mb-4">Tabla de posiciones</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead style={{color:'rgba(255,255,255,.7)'}}>
            <tr>
              <th className="p-2 text-left">Equipo</th>
              <th className="p-2 text-right">PJ</th>
              <th className="p-2 text-right">PG</th>
              <th className="p-2 text-right">PP</th>
              <th className="p-2 text-right">Pts</th>
              <th className="p-2 text-right">Dif</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.team} style={{borderTop:'1px solid rgba(255,255,255,.05)'}}>
                <td className="p-2">{r.team}</td>
                <td className="p-2 text-right">{r.pj}</td>
                <td className="p-2 text-right">{r.pg}</td>
                <td className="p-2 text-right">{r.pp}</td>
                <td className="p-2 text-right">{r.pts}</td>
                <td className="p-2 text-right">{r.dif}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
