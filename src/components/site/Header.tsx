import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const logoSrc = `${import.meta.env.BASE_URL}nexo-logo.png`;

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/agroindustria", label: "Agroindustria" },
  { to: "/criptoactivos", label: "Criptoactivos" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src={logoSrc}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 object-contain"
            aria-hidden="true"
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-base font-bold text-primary">
              Nexo Financiero CR
            </span>
            <span className="hidden text-[11px] text-muted-foreground sm:block">
              Su aliado en su crecimiento financiero
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              activeProps={{ className: "text-primary bg-secondary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/cotizacion"
            className="hidden rounded-md gradient-accent px-4 py-2.5 text-sm font-semibold text-white shadow-card transition hover:opacity-90 md:inline-flex"
          >
            Solicitar asesoría
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/cotizacion"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md gradient-accent px-4 py-2.5 text-sm font-semibold text-white"
            >
              <MessageCircle size={16} /> Solicitar asesoría
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
