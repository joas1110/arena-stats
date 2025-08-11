import "./globals.css";
import Nav from "@/components/Nav";
import RegisterSW from "@/components/RegisterSW";

export const metadata = {
  title: "ARENA STATS",
  description: "Web App de torneos (MVP)",
  manifest: "/manifest.json",
  icons: { icon: "/logo.svg" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
         <RegisterSW />  {/* registra el service worker para PWA */}
  <div className="border-b border-white/5 bg-black/40 sticky top-0 z-40 backdrop-blur"></div>
        <div className="border-b border-white/5 bg-black/40 sticky top-0 z-40 backdrop-blur">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Arena Stats" className="h-8" />
              <Nav /> {/* navegación con pestaña activa */}
            </div>
            <div className="text-xs text-white/50">MVP</div>
          </div>
        </div>
        <main className="container py-8">{children}</main>
      </body>
    </html>
  );
}
