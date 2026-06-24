import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "../components/site/PageHero";
import { whatsappLink } from "../components/site/WhatsApp";
import { ShieldCheck, FileSearch, Banknote, FileText, AlertTriangle, Info, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/criptoactivos")({
  head: () => ({
    meta: [
      { title: "Asesoría Contable para Criptoactivos y Operaciones P2P en Costa Rica" },
      { name: "description", content: "Asesoría documental, contable y financiera para operaciones con criptoactivos, trazabilidad P2P y orden financiero en Costa Rica." },
      { property: "og:title", content: "Criptoactivos y Cumplimiento | Nexo Financiero CR" },
      { property: "og:description", content: "Trazabilidad, documentación y orden financiero para operaciones con criptoactivos en Costa Rica." },
      { property: "og:url", content: "/criptoactivos" },
    ],
    links: [{ rel: "canonical", href: "/criptoactivos" }],
  }),
  component: Cripto,
});

const servicios = [
  "Asesoría contable para operaciones con criptoactivos",
  "Organización y conciliación de movimientos P2P",
  "Preparación de soportes documentales de origen de fondos",
  "Control de ingresos, egresos, ganancias y pérdidas asociadas a operaciones cripto",
  "Revisión de trazabilidad de transacciones y respaldos",
  "Asistencia documental en casos de cuentas bancarias bloqueadas o bajo revisión",
  "Elaboración de expedientes financieros para presentar ante bancos, entidades o asesores legales",
  "Orientación sobre buenas prácticas para operadores P2P",
  "Capacitación básica para personas o empresas que desean ordenar sus operaciones con activos digitales",
];

const pains = [
  "Bloqueo o revisión de cuentas bancarias",
  "Falta de respaldo documental",
  "Dificultad para explicar el origen de fondos",
  "Desorden entre movimientos personales, comerciales y P2P",
  "Riesgo por pagos de terceros",
  "Necesidad de preparar información clara para bancos, contadores, abogados o entidades públicas",
];

function Cripto() {
  return (
    <>
      <PageHero
        eyebrow="Criptoactivos y Cumplimiento"
        title="Orden financiero y trazabilidad para operaciones con criptoactivos"
        description="En Nexo Financiero CR brindamos acompañamiento a personas y negocios que realizan operaciones con criptoactivos, especialmente actividades P2P, ayudándoles a mantener un adecuado control financiero, documentación de respaldo y trazabilidad de sus movimientos."
      />

      <section className="section-y">
        <div className="container-page max-w-4xl space-y-6">
          <p className="text-lg text-muted-foreground">
            Nuestro enfoque está orientado a reducir riesgos, mejorar la organización de la información y preparar expedientes claros ante posibles revisiones bancarias, tributarias o de cumplimiento.
          </p>
          <div className="rounded-2xl border-l-4 border-primary-light bg-surface p-6 md:p-8">
            <ShieldCheck className="text-primary-light" />
            <p className="mt-3 font-display text-lg font-semibold text-primary md:text-xl">
              Ordenamos sus operaciones con criptoactivos mediante trazabilidad, documentación y control financiero, reduciendo riesgos ante bancos, impuestos y revisiones de cumplimiento.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeader title="Servicios especializados" eyebrow="Qué ofrecemos" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {servicios.map((s, i) => {
              const Icons = [FileSearch, Banknote, FileText, ShieldCheck];
              const Icon = Icons[i % Icons.length];
              return (
                <div key={s} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><Icon size={20} /></div>
                  <p className="text-sm font-medium text-foreground">{s}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeader title="Problemas comunes que ayudamos a prevenir y documentar" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pains.map((p) => (
              <div key={p} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <AlertTriangle size={20} className="text-accent" />
                <p className="mt-3 text-sm font-medium text-foreground">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-primary text-white">
        <div className="container-page max-w-4xl">
          <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
            <Info className="mt-1 shrink-0 text-accent" />
            <p className="text-sm text-white/85 md:text-base">
              <strong className="text-white">Aviso importante:</strong> Nuestro servicio no constituye asesoría de inversión ni promueve la compra o venta de criptoactivos. El enfoque es contable, documental, financiero y de cumplimiento.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={whatsappLink("Hola, deseo asesoría sobre operaciones con criptoactivos.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md gradient-accent px-5 py-3 text-sm font-semibold text-white shadow-elevated">
              <MessageCircle size={18} /> Solicitar asesoría sobre criptoactivos
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
