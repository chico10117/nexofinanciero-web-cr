import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "../components/site/PageHero";
import { whatsappLink } from "../components/site/WhatsApp";
import { Sprout, Wheat, Coffee, Beef, Truck, Factory, Users, Leaf, MessageCircle, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/agroindustria")({
  head: () => ({
    meta: [
      { title: "Contabilidad para Empresas Agrícolas y Agroindustriales en Costa Rica" },
      { name: "description", content: "Asesoría contable y financiera para productores agrícolas, empresas agroindustriales, agroexportadores y PYMES del sector agrícola en Costa Rica." },
      { property: "og:title", content: "Contabilidad Agroindustrial | Nexo Financiero CR" },
      { property: "og:description", content: "Costos agrícolas, activos biológicos, exportación y control financiero por cultivo." },
      { property: "og:url", content: "/agroindustria" },
    ],
    links: [{ rel: "canonical", href: "/agroindustria" }],
  }),
  component: Agro,
});

const audiencia = [
  { icon: Sprout, t: "Productores de piña" },
  { icon: Wheat, t: "Productores de yuca" },
  { icon: Coffee, t: "Productores de café" },
  { icon: Beef, t: "Empresas ganaderas" },
  { icon: Factory, t: "Empresas agroindustriales" },
  { icon: Truck, t: "Agroexportadores" },
  { icon: Users, t: "Empresas agrícolas familiares" },
  { icon: Leaf, t: "Sociedades de cultivos varios" },
];

const servicios = [
  "Activos biológicos",
  "Costos agrícolas",
  "Empresas exportadoras",
  "Agroindustria",
  "Control financiero por cultivos o unidades de negocio",
  "Flujo de caja",
  "Indicadores de rentabilidad",
  "Cumplimiento tributario",
];

const problemas = [
  "Costos de producción poco claros",
  "Falta de control por cultivo",
  "Flujo de caja irregular",
  "Desorden documental",
  "Dificultad para medir rentabilidad",
  "Declaraciones tributarias atrasadas",
  "Falta de información para negociar con bancos o socios",
];

function Agro() {
  return (
    <>
      <PageHero
        eyebrow="Sector Agrícola y Agroindustrial"
        title="Contabilidad y consultoría financiera para empresas agrícolas y agroindustriales"
        description="En Nexo Financiero CR entendemos los retos financieros, tributarios y operativos del sector agrícola. Ayudamos a productores, agroexportadores y empresas agroindustriales a ordenar sus costos, cumplir con sus obligaciones y tomar decisiones basadas en información confiable."
      >
        <a href={whatsappLink("Hola, soy del sector agrícola/agroindustrial y deseo asesoría.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md gradient-accent px-5 py-3 text-sm font-semibold text-white shadow-elevated">
          <MessageCircle size={18} /> Solicitar diagnóstico
        </a>
      </PageHero>

      <section className="section-y">
        <div className="container-page">
          <SectionHeader title="¿A quiénes apoyamos?" eyebrow="Nuestros clientes" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiencia.map((a) => (
              <div key={a.t} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/15 text-accent"><a.icon size={20} /></div>
                <p className="mt-4 font-display text-base font-semibold text-primary">{a.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader title="Servicios para el sector agroindustrial" />
            <ul className="mt-6 grid gap-3">
              {servicios.map((s) => (
                <li key={s} className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-card">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" /> <span className="text-sm font-medium text-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader title="Problemas que ayudamos a resolver" />
            <ul className="mt-6 grid gap-3">
              {problemas.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <AlertTriangle size={18} className="mt-0.5 shrink-0 text-destructive" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div className="rounded-2xl gradient-hero p-8 text-white shadow-elevated md:p-12">
            <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="font-display text-2xl font-bold md:text-3xl">Hablemos de su operación agrícola</h2>
                <p className="mt-3 text-white/85">Le acompañamos en estructurar costos, mejorar control financiero y cumplir con sus obligaciones tributarias.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <a href={whatsappLink("Hola, deseo asesoría agroindustrial.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md gradient-accent px-5 py-3 text-sm font-semibold text-white">
                  <MessageCircle size={18} /> Solicitar asesoría para mi empresa agrícola
                </a>
                <Link to="/cotizacion" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  Solicitar cotización
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
