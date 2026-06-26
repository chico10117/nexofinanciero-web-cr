import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS, getPostBySlug, type BlogBlock } from "../lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [{ title: "Artículo no encontrado | Nexo Financiero CR" }],
      };
    }
    const url = `/blog/${post.slug}`;
    return {
      meta: [
        { title: `${post.title} | Nexo Financiero CR` },
        { name: "description", content: post.excerpt },
        { name: "article:published_time", content: post.date },
        { name: "article:section", content: post.category },
        { property: "og:type", content: "article" },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:url", content: url },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            articleSection: post.category,
            inLanguage: "es-CR",
            author: { "@type": "Organization", name: "Nexo Financiero CR" },
            publisher: { "@type": "Organization", name: "Nexo Financiero CR" },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-page section-y text-center">
      <h1 className="font-display text-3xl font-bold text-primary">Artículo no encontrado</h1>
      <p className="mt-3 text-muted-foreground">El artículo que busca no existe o fue movido.</p>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary-light hover:text-primary">
        <ArrowLeft size={16} /> Volver al blog
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="container-page section-y text-center">
      <h1 className="font-display text-2xl font-semibold text-primary">No se pudo cargar el artículo</h1>
      <button onClick={reset} className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
        Reintentar
      </button>
    </div>
  ),
  component: BlogPostPage,
});

function renderBlock(block: BlogBlock, idx: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={idx} className="mt-10 font-display text-2xl font-bold text-primary">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={idx} className="mt-6 font-display text-xl font-semibold text-primary">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={idx} className="mt-4 leading-relaxed text-foreground/90">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={idx} className="mt-4 list-disc space-y-2 pl-6 text-foreground/90">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={idx} className="mt-4 list-decimal space-y-2 pl-6 text-foreground/90">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote
          key={idx}
          className="mt-8 border-l-4 border-accent bg-accent/5 px-5 py-4 font-display text-lg italic text-primary"
        >
          {block.text}
        </blockquote>
      );
  }
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="gradient-hero text-white">
        <div className="container-page py-16 md:py-20">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft size={16} /> Volver al blog
          </Link>
          <span className="mt-6 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
          <p className="mt-4 max-w-3xl text-white/90">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/80">
            <span className="inline-flex items-center gap-2"><Calendar size={14} /> {post.dateLabel}</span>
            <span className="inline-flex items-center gap-2"><Clock size={14} /> {post.readingMinutes} min de lectura</span>
          </div>
        </div>
      </section>

      <article className="section-y">
        <div className="container-page max-w-3xl">
          {post.content.map((block: BlogBlock, idx: number) => renderBlock(block, idx))}

          <div className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-display text-lg font-semibold text-primary">¿Necesita ayuda con este tema?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              En Nexo Financiero CR asesoramos a PYMES, empresas agrícolas y agroindustriales en Costa Rica.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/contacto" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
                Solicitar asesoría
              </Link>
              <Link to="/cotizacion" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2.5 text-sm font-medium hover:bg-accent/10">
                Pedir cotización
              </Link>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-y bg-muted/30">
          <div className="container-page">
            <h2 className="font-display text-2xl font-bold text-primary">Artículos relacionados</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elevated"
                >
                  <span className="inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-primary group-hover:text-primary-light">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}