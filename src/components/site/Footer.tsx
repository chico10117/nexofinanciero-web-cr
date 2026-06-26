import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 bg-primary text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src="/nexo-logo.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 object-contain"
              aria-hidden="true"
            />
            <span className="font-display text-lg font-bold">Nexo Financiero CR</span>
          </div>
          <p className="mt-4 text-sm text-white/75">
            Su aliado en su crecimiento financiero. Contabilidad, impuestos, auditoría y consultoría
            para empresas en Costa Rica.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90">
            Empresa
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <Link to="/nosotros" className="hover:text-accent">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/servicios" className="hover:text-accent">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-accent">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/preguntas-frecuentes" className="hover:text-accent">
                Preguntas frecuentes
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90">
            Servicios
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <Link to="/servicios" className="hover:text-accent">
                Contabilidad e impuestos
              </Link>
            </li>
            <li>
              <Link to="/agroindustria" className="hover:text-accent">
                Agroindustria
              </Link>
            </li>
            <li>
              <Link to="/criptoactivos" className="hover:text-accent">
                Criptoactivos y cumplimiento
              </Link>
            </li>
            <li>
              <Link to="/cotizacion" className="hover:text-accent">
                Solicitar cotización
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90">
            Contacto
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 text-accent" /> WhatsApp: 6225 3851
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 text-accent" /> info@nexofinanciero.cr
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-accent" /> Costa Rica · Atención con cita
              previa
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-5 text-xs text-white/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Nexo Financiero CR. Todos los derechos reservados.</p>
          <p>Profesional Responsable: CPI José Moreira Picado</p>
        </div>
      </div>
    </footer>
  );
}
