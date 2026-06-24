import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { whatsappLink } from "../components/site/WhatsApp";
import { Calculator, FileText, ShieldCheck, TrendingUp, Users, Building2, ArrowRight, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios Contables, Tributarios y Financieros | Nexo Financiero CR" },
      { name: "description", content: "Soluciones integrales en contabilidad empresarial, impuestos, auditoría, consultoría financiera, recursos humanos, agroindustria y formalización empresarial." },
      { property: "og:title", content: "Servicios | Nexo Financiero CR" },
      { property: "og:description", content: "Contabilidad, impuestos, auditoría, consultoría financiera, RRHH, agroindustria, criptoactivos y formalización." },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: Servicios,
});

const SERVICIOS = [
  {
    id: "contabilidad",
    icon: Calculator,
    title: "Contabilidad empresarial",
    text: "Llevamos el control contable de su empresa con información clara, ordenada y útil para la toma de decisiones.",
    items: [
      "Ciclo contable completo",
      "Estados financieros",
      "Conciliaciones bancarias",
      "Cuentas por cobrar y pagar",
      "Cierres contables mensuales y anuales",
    ],
    cta: "Solicitar servicio contable",
  },
  {
    id: "impuestos",
    icon: FileText,
    title: "Impuestos",
    text: "Le ayudamos a cumplir correctamente con sus obligaciones tributarias, reducir riesgos y mantener sus declaraciones al día.",
    items: [
      "Declaraciones de IVA",
      "Declaraciones de renta",
      "Retenciones",
      "Planeación tributaria",
      "Atención de requerimientos de Hacienda",
    ],
    cta: "Consultar sobre impuestos",
  },
  {
    id: "auditoria",
    icon: ShieldCheck,
    title: "Auditoría",
    text: "Evaluamos la información financiera, los controles internos y el cumplimiento normativo de su empresa para fortalecer la confianza y la transparencia.",
    items: [
      "Auditoría financiera",
      "Auditoría interna",
      "Evaluación de control interno",
      "Cumplimiento normativo",
      "Informes gerenciales",
    ],
    cta: "Solicitar auditoría",
  },
  {
    id: "consultoria",
    icon: TrendingUp,
    title: "Consultoría financiera",
    text: "Le ayudamos a interpretar sus números, mejorar su flujo de caja y tomar decisiones con información financiera confiable.",
    items: [
      "Flujo de caja",
      "Presupuestos",
      "Indicadores financieros",
      "Análisis de rentabilidad",
      "Acompañamiento en toma de decisiones",
    ],
    cta: "Solicitar consultoría",
  },
  {
    id: "rrhh",
    icon: Users,
    title: "Recursos humanos",
    text: "Apoyamos a su empresa en procesos relacionados con planillas, cargas sociales, seguros y liquidaciones laborales.",
    items: ["Planillas", "CCSS", "INS", "Liquidaciones laborales"],
    cta: "Consultar sobre planillas",
  },
  {
    id: "formalizacion",
    icon: Building2,
    title: "Formalización empresarial",
    text: "Acompañamos a emprendedores y empresas en sus primeros pasos administrativos, tributarios y financieros.",
    items: [
      "Constitución de sociedades",
      "Registro tributario",
      "Facturación electrónica",
      "Estructuración administrativa inicial",
    ],
    cta: "Formalizar mi empresa",
  },
];

function Servicios() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Servicios"
        description="Brindamos soluciones integrales en contabilidad, impuestos, auditoría, consultoría financiera, recursos humanos, agroindustria, formalización empresarial y cumplimiento especializado."
      />

      <section className="section-y">
        <div className="container-page space-y-12">
          {SERVICIOS.map((s, idx) => (
            <article
              key={s.id}
              id={s.id}
              className="grid gap-8 rounded-2xl border border-border bg-card p-6 shadow-card md:grid-cols-[1fr_1.4fr] md:p-10"
            >
              <div className={idx % 2 ? "md:order-2" : ""}>
                <div className="grid h-14 w-14 place-items-center rounded-xl gradient-accent text-white"><s.icon size={26} /></div>
                <h2 className="mt-5 font-display text-2xl font-bold text-primary md:text-3xl">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.text}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={whatsappLink(`Hola, deseo información sobre: ${s.title}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md gradient-accent px-4 py-2.5 text-sm font-semibold text-white shadow-card">
                    <MessageCircle size={16} /> {s.cta}
                  </a>
                  <Link to="/cotizacion" className="inline-flex items-center gap-1 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-primary hover:bg-secondary">
                    Solicitar cotización <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
              <ul className="grid gap-2.5 self-start rounded-xl bg-surface p-6">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /> <span>{i}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
