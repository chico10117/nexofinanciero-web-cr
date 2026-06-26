import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { ArrowRight, Calendar } from "lucide-react";
import { BLOG_POSTS } from "../lib/blog-posts";

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
          {BLOG_POSTS.map((p) => (
            <article key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
              <div className="gradient-hero relative h-40 overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <span className="absolute bottom-3 left-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">{p.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-lg font-semibold leading-snug text-primary group-hover:text-primary-light">
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:underline">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar size={14} /> {p.dateLabel} · {p.readingMinutes} min de lectura
                </div>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary-light hover:text-primary">
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
