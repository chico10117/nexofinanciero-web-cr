import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "../components/site/PageHero";
import { CheckCircle2, Target, Eye, Award, ShieldCheck, Sparkles, Heart, Lock, Lightbulb, Handshake } from "lucide-react";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre Nexo Financiero CR | Firma Contable y Financiera en Costa Rica" },
      { name: "description", content: "Conozca Nexo Financiero CR, firma costarricense especializada en contabilidad, impuestos, auditoría, consultoría financiera, agroindustria y cumplimiento." },
      { property: "og:title", content: "Sobre Nexo Financiero CR" },
      { property: "og:description", content: "Firma costarricense en contabilidad, impuestos, auditoría, consultoría financiera y servicios especializados." },
      { property: "og:url", content: "/nosotros" },
    ],
    links: [{ rel: "canonical", href: "/nosotros" }],
  }),
  component: Nosotros,
});

const valores = [
  { icon: ShieldCheck, t: "Integridad" },
  { icon: Eye, t: "Transparencia" },
  { icon: Lock, t: "Confidencialidad" },
  { icon: Award, t: "Excelencia" },
  { icon: Lightbulb, t: "Innovación" },
  { icon: Heart, t: "Compromiso" },
  { icon: HandshakeIcon, t: "Confianza" },
];

function Nosotros() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Sobre Nexo Financiero CR"
        description="Nexo Financiero CR nace con el propósito de convertirse en una firma financiera, contable y consultiva sólida, profesional y escalable, enfocada en brindar soluciones integrales para empresas, emprendedores y sectores especializados."
      />

      <section className="section-y">
        <div className="container-page max-w-4xl">
          <div className="rounded-2xl border-l-4 border-accent bg-surface p-6 md:p-10">
            <Sparkles className="text-accent" />
            <p className="mt-3 font-display text-xl text-primary md:text-2xl">
              Ayudamos a empresas y emprendedores a tomar decisiones financieras inteligentes mediante información confiable, asesoría profesional, cumplimiento normativo y soluciones adaptadas a sus necesidades.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-card p-8 shadow-card">
            <div className="grid h-12 w-12 place-items-center rounded-lg gradient-accent text-white"><Target size={22} /></div>
            <h2 className="mt-5 font-display text-2xl font-bold text-primary">Misión</h2>
            <p className="mt-3 text-muted-foreground">
              Brindar soluciones integrales en contabilidad, impuestos, auditoría, consultoría financiera y servicios especializados, apoyando a empresas y emprendedores en la toma de decisiones estratégicas mediante información confiable, oportuna y de alto valor profesional.
            </p>
          </div>
          <div className="rounded-2xl bg-card p-8 shadow-card">
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-white"><Eye size={22} /></div>
            <h2 className="mt-5 font-display text-2xl font-bold text-primary">Visión</h2>
            <p className="mt-3 text-muted-foreground">
              Ser una firma financiera reconocida en Costa Rica por su excelencia profesional, innovación tecnológica y compromiso con el crecimiento sostenible de sus clientes, convirtiéndose en un referente nacional en servicios contables, tributarios, financieros, de auditoría y consultoría empresarial.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeader title="Valores corporativos" eyebrow="Lo que nos define" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v) => (
              <div key={v.t} className="rounded-xl border border-border bg-card p-6 text-center shadow-card">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary"><v.icon size={22} /></div>
                <p className="mt-4 font-display text-base font-semibold text-primary">{v.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page max-w-3xl">
          <SectionHeader title="Profesional responsable" />
          <div className="mt-6 rounded-2xl border border-border bg-card p-8 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-light">Responsabilidad profesional</p>
            <p className="mt-2 font-display text-2xl font-bold text-primary">CPI José Moreira Picado</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 size={16} className="text-accent" /> Incorporación profesional al Colegio de Contadores Privados de Costa Rica.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
