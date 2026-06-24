import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { WhatsAppFloat } from "../components/site/WhatsApp";

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
            <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
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
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight">Esta página no cargó</h1>
        <p className="mt-2 text-sm text-muted-foreground">Ocurrió un problema. Puede intentar de nuevo o volver al inicio.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Reintentar
          </button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent">Volver al inicio</a>
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
      { title: "Nexo Financiero CR | Contabilidad, Impuestos y Consultoría Financiera en Costa Rica" },
      { name: "description", content: "Servicios contables, tributarios, financieros y de auditoría para PYMES, empresas agrícolas, agroindustriales y emprendedores en Costa Rica." },
      { name: "author", content: "Nexo Financiero CR" },
      { property: "og:site_name", content: "Nexo Financiero CR" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_CR" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Nexo Financiero CR | Contabilidad, Impuestos y Consultoría Financiera en Costa Rica" },
      { name: "twitter:title", content: "Nexo Financiero CR | Contabilidad, Impuestos y Consultoría Financiera en Costa Rica" },
      { property: "og:description", content: "Servicios contables, tributarios, financieros y de auditoría para PYMES, empresas agrícolas, agroindustriales y emprendedores en Costa Rica." },
      { name: "twitter:description", content: "Servicios contables, tributarios, financieros y de auditoría para PYMES, empresas agrícolas, agroindustriales y emprendedores en Costa Rica." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4542d11a-085e-403c-a729-ba6ae7f8771a/id-preview-3886d5bd--541a9545-64ec-4796-92a8-2839f8428c36.lovable.app-1782339254026.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4542d11a-085e-403c-a729-ba6ae7f8771a/id-preview-3886d5bd--541a9545-64ec-4796-92a8-2839f8428c36.lovable.app-1782339254026.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          name: "Nexo Financiero CR",
          description: "Firma de contabilidad, impuestos, auditoría y consultoría financiera en Costa Rica.",
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
