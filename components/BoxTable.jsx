export default function BoxTable({ title='Equipo', rows=[] }) {
  const data = rows.length ? rows : [
    { num: 7, name: 'García', pts: 18, reb: 6, ast: 3, stl: 1, blk: 0, tov: 2, pf: 2, t3: '3/7', ft: '3/3' },
    { num:12, name: 'Ruiz',   pts: 14, reb: 5, ast: 5, stl: 0, blk: 1, tov: 1, pf: 3, t3: '2/5', ft: '2/2' },
  ];
  return (
    <div className="card">
      <h3 className="h2 mb-3">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead style={{color:'rgba(255,255,255,.7)'}}>
            <tr>
              <th className="p-2 text-left">#</th>
              <th className="p-2 text-left">Jugador</th>
              <th className="p-2 text-right">PTS</th>
              <th className="p-2 text-right">REB</th>
              <th className="p-2 text-right">AST</th>
              <th className="p-2 text-right">STL</th>
              <th className="p-2 text-right">BLK</th>
              <th className="p-2 text-right">TOV</th>
              <th className="p-2 text-right">PF</th>
              <th className="p-2 text-right">3PT</th>
              <th className="p-2 text-right">FT</th>
            </tr>
          </thead>
          <tbody>
            {data.map((p, idx) => (
              <tr key={idx} style={{borderTop:'1px solid rgba(255,255,255,.05)'}}>
                <td className="p-2">{p.num}</td>
                <td className="p-2">{p.name}</td>
                <td className="p-2 text-right">{p.pts}</td>
                <td className="p-2 text-right">{p.reb}</td>
                <td className="p-2 text-right">{p.ast}</td>
                <td className="p-2 text-right">{p.stl}</td>
                <td className="p-2 text-right">{p.blk}</td>
                <td className="p-2 text-right">{p.tov}</td>
                <td className="p-2 text-right">{p.pf}</td>
                <td className="p-2 text-right">{p.t3}</td>
                <td className="p-2 text-right">{p.ft}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
