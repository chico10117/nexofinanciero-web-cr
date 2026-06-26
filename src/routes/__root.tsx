import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { WhatsAppFloat } from "../components/site/WhatsApp";
import {
  absolutePublicAssetUrl,
  defaultDescription,
  defaultTitle,
  publicAssetUrl,
  siteName,
  siteUrl,
  socialImageAlt,
} from "../lib/site-metadata";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-20">
        <div className="max-w-md text-center">
          <h1 className="font-display text-7xl font-bold text-primary">404</h1>
          <h2 className="mt-4 font-display text-xl font-semibold">Página no encontrada</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            La página que busca no existe o fue movida.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight">Esta página no cargó</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocurrió un problema. Puede intentar de nuevo o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#071529" },
      { title: defaultTitle },
      { name: "description", content: defaultDescription },
      { name: "author", content: siteName },
      { property: "og:site_name", content: siteName },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_CR" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: absolutePublicAssetUrl("social-share.jpg") },
      { property: "og:image:secure_url", content: absolutePublicAssetUrl("social-share.jpg") },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: socialImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: absolutePublicAssetUrl("social-share.jpg") },
      { name: "twitter:image:alt", content: socialImageAlt },
      { property: "og:title", content: defaultTitle },
      { name: "twitter:title", content: defaultTitle },
      { property: "og:description", content: defaultDescription },
      { name: "twitter:description", content: defaultDescription },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          name: "Nexo Financiero CR",
          description:
            "Firma de contabilidad, impuestos, auditoría y consultoría financiera en Costa Rica.",
          url: siteUrl,
          logo: absolutePublicAssetUrl("icon-512.png"),
          image: absolutePublicAssetUrl("social-share.jpg"),
          areaServed: "CR",
          email: "info@nexofinanciero.cr",
          telephone: "+506 6225 3851",
          slogan: "Su aliado en su crecimiento financiero.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es-CR">
      <head>
        <link rel="icon" href={publicAssetUrl("favicon.ico")} sizes="any" />
        <link
          rel="icon"
          href={publicAssetUrl("favicon-32x32.png")}
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href={publicAssetUrl("favicon-16x16.png")}
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="apple-touch-icon"
          href={publicAssetUrl("apple-touch-icon.png")}
          sizes="180x180"
        />
        <link rel="manifest" href={publicAssetUrl("site.webmanifest")} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </QueryClientProvider>
  );
}
