// components/LeadersList.jsx
export default function LeadersList() {
  const leaders = {
    pts: [{ n: "García", v: 21.4 }, { n: "Ruiz", v: 18.9 }, { n: "Díaz", v: 17.2 }],
    reb: [{ n: "Díaz", v: 10.1 }, { n: "Mena", v: 9.4 }, { n: "Suarez", v: 8.8 }],
    ast: [{ n: "Ruiz", v: 6.8 }, { n: "Pérez", v: 6.1 }, { n: "López", v: 5.7 }],
  };

  return (
    <div className="card">
      <h3 className="h2 mb-3">Líderes</h3>

      {Object.entries(leaders).map(([key, arr]) => (
        <div key={key} className="mb-4">
          <div className="text-white/70 uppercase text-xs mb-1">{key}</div>
          <ul className="space-y-1">
            {arr.map((p, i) => (
              <li key={i} className="flex justify-between">
                <span className="text-white/90">{i + 1}. {p.n}</span>
                <span className="text-white/70">{p.v}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
