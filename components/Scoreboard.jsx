'use client';
export default function Scoreboard({ home='Tigres', away='Halcones', hs=68, as=64, period='Q4', time='02:13', bonus='Tigres' }) {
  return (
    <div style={{background:'#1C2436'}} className="rounded-2xl p-5 grid grid-cols-3 items-center">
      <div className="text-left">
        <div className="text-2xl font-bold text-white">{home}</div>
        <div className="text-5xl font-extrabold text-white">{hs}</div>
      </div>
      <div className="text-center">
        <div className="text-sm text-white/60">{period}</div>
        <div className="text-3xl font-bold" style={{color:'#FF6600'}}>{time}</div>
        <div className="text-xs text-white/60 mt-1">Bonus: {bonus}</div>
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold text-white">{away}</div>
        <div className="text-5xl font-extrabold text-white">{as}</div>
      </div>
    </div>
  );
}
