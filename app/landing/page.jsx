// app/landing/page.jsx

export const metadata = {
  title: "Arena Stats — Web App para torneos (Demo)",
  description:
    "Web App para torneos: marcador en vivo, fixture, tabla y panel admin. Instalá la app en tu celular.",
  openGraph: {
    title: "Arena Stats — Web App para torneos (Demo)",
    description:
      "Marcador en vivo, fixture, tabla y más. Ideal para ligas y torneos.",
    url: "https://v0-arena-stats.vercel.app/landing",
    siteName: "Arena Stats",
    images: [
      {
        url: "/og.png",         // asegurate de tener este archivo en /public/og.png
        width: 1200,
        height: 630,
        alt: "Arena Stats — Demo"
      }
    ],
    type: "website",
    locale: "es_AR"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arena Stats — Web App para torneos (Demo)",
    description: "Marcador en vivo, fixture, tabla y más.",
    images: ["/og.png"]
  }
};

const WPP =
  "https://wa.me/543794011027?text=Hola,%20quiero%20una%20demo%20de%20Arena%20Stats";

export default function Landing() {
  return (
    <div className="space-y-8">
      <section className="card">
        <h1 className="h1 mb-2">ARENA STATS — Web App para torneos (PWA)</h1>
        <p className="muted">
          Instalá la app en tu celular. Marcador en vivo, box score, fixture
          (FullCalendar), tabla de posiciones y panel admin.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 mt-4">
          <a className="btn" href="/t/demo/g/123">
            Ver partido demo
          </a>
          <a className="btn" href="/t/demo/schedule">
            Ver fixture
          </a>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        <div className="card">
          <h3 className="h2 mb-2">Marcador en vivo</h3>
          <p className="muted">Puntos, período/tiempo, bonus y box score.</p>
        </div>
        <div className="card">
          <h3 className="h2 mb-2">Fixture</h3>
          <p className="muted">Semana/mes/día con FullCalendar.</p>
        </div>
        <div className="card">
          <h3 className="h2 mb-2">Tabla</h3>
          <p className="muted">PJ, PG, PP, Pts, Dif y líderes.</p>
        </div>
      </section>

      <section className="card">
        <h2 className="h2 mb-2">¿Para quién?</h2>
        <p className="muted">
          Ligas amateur, clubes, escuelas, campus, copas relámpago. Branding y
          colores 100% a medida.
        </p>
        <ul className="mt-2 list-disc pl-6 text-white/80">
          <li>Entrega en 72h (MVP con tu logo y colores)</li>
          <li>Opcional: login + roles + datos en tiempo real</li>
          <li>Se instala como app móvil (PWA)</li>
        </ul>
        <div className="grid gap-3 sm:grid-cols-2 mt-4">
          <a className="btn" href={WPP} target="_blank" rel="noopener noreferrer">
            Pedir demo por WhatsApp
          </a>
          <a className="btn" href="/">
            Ver demo online
          </a>
        </div>
      </section>
    </div>
  );
}
