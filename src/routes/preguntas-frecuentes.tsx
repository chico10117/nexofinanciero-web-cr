import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/preguntas-frecuentes")({
  head: () => ({
    meta: [
      { title: "Preguntas Frecuentes | Nexo Financiero CR" },
      { name: "description", content: "Respuestas a las preguntas frecuentes sobre contabilidad, impuestos, agroindustria y criptoactivos en Costa Rica." },
      { property: "og:title", content: "Preguntas Frecuentes | Nexo Financiero CR" },
      { property: "og:description", content: "Resuelva sus dudas sobre nuestros servicios contables, tributarios y financieros." },
      { property: "og:url", content: "/preguntas-frecuentes" },
    ],
    links: [{ rel: "canonical", href: "/preguntas-frecuentes" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faqs,
});

const FAQS = [
  { q: "¿Trabajan con empresas agrícolas?", a: "Sí. Brindamos servicios contables, tributarios y financieros para empresas agrícolas, agroindustriales, productores y agroexportadores." },
  { q: "¿Pueden ayudarme si tengo declaraciones atrasadas?", a: "Sí. Podemos revisar su situación, identificar obligaciones pendientes y apoyarle en el proceso de regularización tributaria." },
  { q: "¿Ofrecen servicios mensuales de contabilidad?", a: "Sí. Ofrecemos acompañamiento contable mensual adaptado al tamaño y necesidades de cada empresa." },
  { q: "¿Ayudan con IVA y renta?", a: "Sí. Brindamos apoyo en declaraciones de IVA, renta, retenciones, planeación tributaria y atención de requerimientos." },
  { q: "¿Pueden revisar costos agrícolas?", a: "Sí. Ayudamos a organizar y analizar costos agrícolas por cultivo, operación o unidad de negocio." },
  { q: "¿Atienden empresas fuera de la Zona Norte?", a: "Sí. Podemos atender empresas en distintas zonas de Costa Rica mediante canales digitales y reuniones programadas." },
  { q: "¿Trabajan con sociedades anónimas?", a: "Sí. Atendemos sociedades anónimas, PYMES, empresas familiares, comercios, emprendimientos y profesionales independientes." },
  { q: "¿Ofrecen asesoría para operaciones con criptoactivos?", a: "Sí. Brindamos apoyo documental, contable y financiero para personas o empresas que necesitan ordenar operaciones con criptoactivos o actividades P2P." },
  { q: "¿La primera consulta tiene costo?", a: "Puede solicitar una consulta inicial para evaluar su caso. Las condiciones del servicio se definirán según la complejidad y alcance requerido." },
  { q: "¿Cómo solicito una cotización?", a: "Puede escribirnos por WhatsApp, completar el formulario de cotización o enviarnos un correo con la información básica de su empresa." },
];

function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero eyebrow="Información útil" title="Preguntas frecuentes" description="Resolvemos las dudas más comunes sobre nuestros servicios contables, tributarios y financieros." />
      <section className="section-y">
        <div className="container-page max-w-3xl space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-primary md:text-lg">{f.q}</span>
                  <ChevronDown size={20} className={`shrink-0 text-primary-light transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
