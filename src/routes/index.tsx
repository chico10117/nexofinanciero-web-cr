import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, FileText, Calculator, ShieldCheck, TrendingUp, Users, Sprout, Bitcoin, Building2, AlertTriangle, ClipboardList, Search, Handshake } from "lucide-react";
import { whatsappLink } from "../components/site/WhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexo Financiero CR | Contabilidad, Impuestos y Consultoría Financiera en Costa Rica" },
      { name: "description", content: "Servicios contables, tributarios, financieros y de auditoría para PYMES, empresas agrícolas, agroindustriales y emprendedores en Costa Rica." },
      { property: "og:title", content: "Nexo Financiero CR | Contabilidad, Impuestos y Consultoría Financiera" },
      { property: "og:description", content: "Acompañamos a PYMES, empresas agrícolas y emprendedores en cumplimiento tributario, organización contable y decisiones financieras inteligentes." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const problems = [
  { icon: FileText, title: "Declaraciones tributarias atrasadas", text: "Le ayudamos a regularizar obligaciones pendientes con Hacienda." },
  { icon: Calculator, title: "Problemas con IVA y renta", text: "Revisión, corrección y planeación de sus impuestos principales." },
  { icon: ClipboardList, title: "Desorden contable", text: "Ordenamos su contabilidad para que tome decisiones con claridad." },
  { icon: TrendingUp, title: "Falta de control de flujo de caja", text: "Implementamos controles para conocer su liquidez real." },
  { icon: Sprout, title: "Costos agrícolas mal calculados", text: "Estructuramos costos por cultivo, lote o unidad de negocio." },
  { icon: FileText, title: "Problemas con facturación electrónica", text: "Le apoyamos con la facturación y los registros asociados." },
  { icon: AlertTriangle, title: "Requerimientos de Hacienda", text: "Le acompañamos en la atención y respuesta de requerimientos." },
  { icon: Search, title: "Falta de información para decidir", text: "Generamos reportes financieros útiles para la gerencia." },
];

const services = [
  { icon: Calculator, title: "Contabilidad empresarial", text: "Ciclo contable, estados financieros y cierres mensuales." },
  { icon: FileText, title: "Impuestos", text: "IVA, renta, retenciones y planeación tributaria." },
  { icon: ShieldCheck, title: "Auditoría", text: "Evaluación financiera, control interno y cumplimiento." },
  { icon: TrendingUp, title: "Consultoría financiera", text: "Flujo de caja, presupuestos y análisis de rentabilidad." },
  { icon: Users, title: "Recursos humanos", text: "Planillas, CCSS, INS y liquidaciones laborales." },
  { icon: Sprout, title: "Agroindustria", text: "Costos agrícolas, activos biológicos y exportación." },
  { icon: Bitcoin, title: "Criptoactivos y cumplimiento", text: "Trazabilidad y soporte documental para operaciones P2P." },
  { icon: Building2, title: "Formalización empresarial", text: "Constitución, registro tributario y facturación." },
];

const whyUs = [
  "Atención personalizada",
  "Experiencia profesional",
  "Conocimiento del sector agrícola y agroindustrial",
  "Comunicación clara y sencilla",
  "Respuesta rápida",
  "Acompañamiento continuo",
  "Soluciones adaptadas a cada negocio",
  "Enfoque en cumplimiento y toma de decisiones",
];

const steps = [
  { n: "01", title: "Diagnóstico inicial", text: "Conocemos su empresa, sus necesidades y su situación contable, tributaria o financiera actual." },
  { n: "02", title: "Revisión de información", text: "Analizamos documentos, declaraciones, registros, facturación y datos financieros relevantes." },
  { n: "03", title: "Propuesta de servicio", text: "Preparamos una solución adaptada a su empresa, actividad económica y nivel de complejidad." },
  { n: "04", title: "Acompañamiento profesional", text: "Seguimiento mensual o asesoría especializada para mantener orden, cumplimiento y claridad." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="gradient-hero relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="container-page relative grid items-center gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <Handshake size={14} /> Su aliado en su crecimiento financiero
            </p>
            <h1 className="font-display text-3xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
              Contabilidad, impuestos y consultoría financiera para empresas que quieren <span className="text-accent">crecer con orden</span>.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
              Acompañamos a PYMES, empresas agrícolas, agroindustriales y emprendedores en el cumplimiento tributario, la organización contable y la toma de decisiones financieras inteligentes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md gradient-accent px-5 py-3 text-sm font-semibold text-white shadow-elevated transition hover:opacity-95">
                <MessageCircle size={18} /> Solicitar asesoría por WhatsApp
              </a>
              <Link to="/servicios" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Ver servicios <ArrowRight size={16} />
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Más de 15 años de experiencia acumulada en contabilidad, auditoría, cumplimiento tributario y gestión financiera.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur shadow-elevated">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { k: "+15", v: "Años de experiencia acumulada" },
                  { k: "8", v: "Líneas de servicio" },
                  { k: "CR", v: "Cobertura nacional" },
                  { k: "PYME", v: "Enfoque en empresas" },
                ].map((b) => (
                  <div key={b.v} className="rounded-xl bg-white/5 p-4">
                    <div className="font-display text-3xl font-bold text-accent">{b.k}</div>
                    <div className="mt-1 text-xs text-white/75">{b.v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-primary-light/30 p-4 text-sm">
                <p className="font-semibold">Profesional Responsable</p>
                <p className="text-white/80">CPI José Moreira Picado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-primary md:text-4xl">¿Su empresa necesita más orden financiero y tributario?</h2>
            <p className="mt-3 text-muted-foreground md:text-lg">
              En Nexo Financiero CR ayudamos a empresas y emprendedores a resolver los problemas que frenan su crecimiento y generan riesgos ante Hacienda, bancos o entidades reguladoras.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary"><p.icon size={20} /></div>
                <h3 className="mt-4 font-display text-base font-semibold text-primary">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">Servicios</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-primary md:text-4xl">Servicios financieros, contables y tributarios para su empresa</h2>
            </div>
            <Link to="/servicios" className="inline-flex items-center gap-1 text-sm font-semibold text-primary-light hover:text-primary">
              Ver todos los servicios <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="group rounded-xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-primary-light hover:shadow-elevated">
                <div className="grid h-12 w-12 place-items-center rounded-lg gradient-accent text-white"><s.icon size={22} /></div>
                <h3 className="mt-5 font-display text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                <Link to="/servicios" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-light group-hover:text-primary">
                  Ver más <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGRO FEATURED */}
      <section className="section-y bg-primary text-white">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Sector estratégico</p>
            <h2 className="font-display text-2xl font-bold md:text-4xl">Soluciones financieras para empresas agrícolas y agroindustriales</h2>
            <p className="mt-4 text-white/85">
              Entendemos los retos financieros, tributarios y operativos del sector agrícola. Apoyamos a productores, agroexportadores y empresas agroindustriales con información clara para controlar costos, cumplir obligaciones y tomar mejores decisiones.
            </p>
            <Link to="/agroindustria" className="mt-7 inline-flex items-center gap-2 rounded-md gradient-accent px-5 py-3 text-sm font-semibold text-white shadow-elevated">
              Solicitar asesoría para mi empresa agrícola <ArrowRight size={16} />
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Costos agrícolas",
              "Activos biológicos",
              "Empresas exportadoras",
              "Control financiero por cultivo o unidad de negocio",
              "Flujo de caja agrícola",
              "Rentabilidad por operación",
              "Cumplimiento tributario",
            ].map((i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-sm">
                <Sprout size={18} className="mt-0.5 shrink-0 text-accent" /> <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-primary md:text-4xl">¿Por qué elegir Nexo Financiero CR?</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => (
              <div key={w} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <CheckCircle2 className="text-accent" size={22} />
                <p className="mt-3 font-display text-base font-semibold text-primary">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-y">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">Proceso</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-primary md:text-4xl">Un proceso claro para ordenar su información financiera</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="font-display text-4xl font-black text-accent/70">{s.n}</div>
                <h3 className="mt-3 font-display text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section-y bg-surface">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold text-primary md:text-4xl">Experiencia y respaldo profesional</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Más de 15 años de experiencia acumulada.",
                "Experiencia en empresas agrícolas y agroindustriales.",
                "Experiencia en exportación agrícola.",
                "Incorporación profesional al Colegio de Contadores Privados.",
                "Experiencia en auditorías y cumplimiento tributario.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary-light" />
                  <span className="text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-xl border border-dashed border-border bg-card p-6 text-center text-sm text-muted-foreground">
                Testimonio de cliente próximamente.
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-y">
        <div className="container-page">
          <div className="overflow-hidden rounded-2xl gradient-hero p-8 text-white shadow-elevated md:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="font-display text-2xl font-bold md:text-4xl">Ordene la contabilidad de su empresa y tome mejores decisiones financieras.</h2>
                <p className="mt-4 text-white/85">
                  Conversemos sobre sus necesidades contables, tributarias o financieras. En Nexo Financiero CR podemos ayudarle a construir una base financiera más clara, ordenada y confiable.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md gradient-accent px-5 py-3 text-sm font-semibold text-white shadow-elevated">
                  <MessageCircle size={18} /> Escribir por WhatsApp
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
