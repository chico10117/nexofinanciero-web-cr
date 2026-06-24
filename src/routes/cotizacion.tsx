import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Field } from "./contacto";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/cotizacion")({
  head: () => ({
    meta: [
      { title: "Solicitar Cotización | Nexo Financiero CR" },
      { name: "description", content: "Solicite una cotización para servicios de contabilidad, impuestos, auditoría, consultoría financiera, agroindustria o criptoactivos en Costa Rica." },
      { property: "og:title", content: "Solicitar Cotización | Nexo Financiero CR" },
      { property: "og:description", content: "Cuéntenos sobre su empresa y le brindaremos una propuesta adaptada." },
      { property: "og:url", content: "/cotizacion" },
    ],
    links: [{ rel: "canonical", href: "/cotizacion" }],
  }),
  component: Cotizacion,
});

function Cotizacion() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Cotización"
        title="Solicitar cotización"
        description="Cuéntenos sobre su empresa y el tipo de servicio que necesita. Le contactaremos para brindarle una propuesta adaptada a su situación."
      />

      <section className="section-y">
        <div className="container-page max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-10">
            {sent ? (
              <div className="text-center">
                <CheckCircle2 size={48} className="mx-auto text-accent" />
                <h2 className="mt-4 font-display text-2xl font-bold text-primary">¡Solicitud enviada!</h2>
                <p className="mt-2 text-muted-foreground">Gracias por contactarnos. Le responderemos con una propuesta a la mayor brevedad posible.</p>
              </div>
            ) : (
              <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <Field label="Nombre completo" name="nombre" required />
                <Field label="Nombre de la empresa" name="empresa" />
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Tipo de empresa</label>
                  <select name="tipo" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm">
                    <option value="">Seleccione…</option>
                    <option>PYME</option>
                    <option>Empresa agrícola</option>
                    <option>Empresa agroindustrial</option>
                    <option>Sociedad anónima</option>
                    <option>Comercio</option>
                    <option>Empresa de servicios</option>
                    <option>Emprendimiento</option>
                    <option>Profesional independiente</option>
                    <option>Empresa familiar</option>
                    <option>Otro</option>
                  </select>
                </div>
                <Field label="Actividad económica" name="actividad" />
                <Field label="Provincia" name="provincia" />
                <Field label="Teléfono" name="telefono" type="tel" required />
                <div className="sm:col-span-2">
                  <Field label="Correo electrónico" name="correo" type="email" required />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium">Servicio requerido</label>
                  <select required name="servicio" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm">
                    <option value="">Seleccione un servicio…</option>
                    <option>Contabilidad empresarial</option>
                    <option>Impuestos</option>
                    <option>Auditoría</option>
                    <option>Consultoría financiera</option>
                    <option>Recursos humanos</option>
                    <option>Agroindustria</option>
                    <option>Criptoactivos y cumplimiento</option>
                    <option>Formalización empresarial</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">¿Tiene declaraciones atrasadas?</label>
                  <select name="atrasos" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm">
                    <option>No</option>
                    <option>Sí</option>
                    <option>No estoy seguro</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">¿Actualmente cuenta con contador?</label>
                  <select name="contador" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm">
                    <option>No</option>
                    <option>Sí</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium">Mensaje adicional</label>
                  <textarea name="mensaje" rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm" placeholder="Detalles adicionales que considere importantes…" />
                </div>
                <button type="submit" className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-md gradient-accent px-5 py-3 text-sm font-semibold text-white shadow-elevated">
                  Solicitar cotización
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
