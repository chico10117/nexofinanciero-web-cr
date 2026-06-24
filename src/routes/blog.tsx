import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { ArrowRight, Calendar } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog de Contabilidad, Impuestos y Finanzas | Nexo Financiero CR" },
      { name: "description", content: "Artículos educativos sobre contabilidad, impuestos, agroindustria, cumplimiento financiero, PYMES y criptoactivos en Costa Rica." },
      { property: "og:title", content: "Blog | Nexo Financiero CR" },
      { property: "og:description", content: "Contenido educativo sobre contabilidad, impuestos y finanzas en Costa Rica." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const POSTS = [
  { cat: "PYMES Agrícolas", title: "Cómo ordenar la contabilidad de una PYME agrícola en Costa Rica", excerpt: "Pasos prácticos para estructurar la información contable de una empresa agrícola." },
  { cat: "Impuestos", title: "Errores comunes en declaraciones de IVA y renta", excerpt: "Identifique los errores más frecuentes y cómo evitar sanciones." },
  { cat: "Agroindustria", title: "Importancia del flujo de caja en empresas agroindustriales", excerpt: "Por qué el flujo de caja es clave para la sostenibilidad agroindustrial." },
  { cat: "Costos", title: "Cómo calcular mejor los costos agrícolas", excerpt: "Metodologías prácticas para entender la rentabilidad por cultivo." },
  { cat: "Cumplimiento", title: "Qué documentos debe conservar una empresa ante Hacienda", excerpt: "Guía de respaldo documental para empresas en Costa Rica." },
  { cat: "Criptoactivos", title: "Buenas prácticas documentales para operaciones con criptoactivos", excerpt: "Cómo respaldar movimientos P2P para revisiones bancarias o tributarias." },
  { cat: "Tributario", title: "Cómo preparar su empresa para una revisión tributaria", excerpt: "Checklist para anticipar requerimientos y minimizar riesgos." },
  { cat: "PYMES", title: "Indicadores financieros que toda PYME debería revisar cada mes", excerpt: "KPIs esenciales para entender la salud financiera de su empresa." },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Blog"
        description="Contenido educativo sobre contabilidad, impuestos, agroindustria, cumplimiento financiero y gestión empresarial en Costa Rica."
      />
      <section className="section-y">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
              <div className="gradient-hero relative h-40 overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <span className="absolute bottom-3 left-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">{p.cat}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-lg font-semibold leading-snug text-primary group-hover:text-primary-light">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar size={14} /> Próximamente
                </div>
                <Link to="/blog" className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary-light hover:text-primary">
                  Leer más <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
