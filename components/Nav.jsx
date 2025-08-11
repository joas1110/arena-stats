
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/t/demo", label: "Torneo" },
  { href: "/t/demo/standings", label: "Tabla" },
  { href: "/t/demo/schedule", label: "Fixture" },
];

export default function Nav() {
  const pathname = usePathname() || "/";

  return (
    <nav className="hidden sm:flex items-center gap-6">
      {links.map(({ href, label }) => {
        const active =
          pathname === href || (href !== "/" && pathname.startsWith(href));
        return (
          <Link
            key={href}
            href={href}
            className={`link ${active ? "text-white font-semibold" : ""}`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
