import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { whatsappLink, WHATSAPP_DISPLAY } from "../components/site/WhatsApp";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Nexo Financiero CR" },
      { name: "description", content: "Contacte a Nexo Financiero CR para solicitar asesoría contable, tributaria, financiera, agroindustrial o de cumplimiento." },
      { property: "og:title", content: "Contacto | Nexo Financiero CR" },
      { property: "og:description", content: "Conversemos sobre las necesidades contables, tributarias o financieras de su empresa." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contacto,
});

function Contacto() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Contacto"
        description="Conversemos sobre las necesidades contables, tributarias o financieras de su empresa."
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition hover:border-accent">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[var(--whatsapp)]/15 text-[var(--whatsapp)]"><MessageCircle size={20} /></div>
              <div>
                <p className="font-display text-base font-semibold text-primary">WhatsApp</p>
                <p className="text-sm text-muted-foreground">{WHATSAPP_DISPLAY}</p>
              </div>
            </a>
            <a href="mailto:info@nexofinanciero.cr" className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition hover:border-primary-light">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><Mail size={20} /></div>
              <div>
                <p className="font-display text-base font-semibold text-primary">Correo</p>
                <p className="text-sm text-muted-foreground">info@nexofinanciero.cr</p>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent"><MapPin size={20} /></div>
              <div>
                <p className="font-display text-base font-semibold text-primary">Ubicación</p>
                <p className="text-sm text-muted-foreground">Costa Rica</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary-light/15 text-primary-light"><Clock size={20} /></div>
              <div>
                <p className="font-display text-base font-semibold text-primary">Horario</p>
                <p className="text-sm text-muted-foreground">Atención con cita previa</p>
              </div>
            </div>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-md gradient-accent px-5 py-3 text-sm font-semibold text-white shadow-elevated">
              <MessageCircle size={18} /> Escribir por WhatsApp
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
            <h2 className="font-display text-2xl font-bold text-primary">Envíenos su consulta</h2>
            <p className="mt-1 text-sm text-muted-foreground">Le responderemos a la mayor brevedad posible.</p>
            {sent ? (
              <div className="mt-6 rounded-lg border border-accent/40 bg-accent/10 p-5 text-sm text-foreground">
                Gracias por su consulta. Le contactaremos pronto al correo o teléfono indicado.
              </div>
            ) : (
              <form
                className="mt-6 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <Field label="Nombre" name="nombre" required />
                <Field label="Empresa" name="empresa" />
                <Field label="Teléfono" name="telefono" type="tel" />
                <Field label="Correo" name="correo" type="email" required />
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Servicio requerido</label>
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
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Mensaje</label>
                  <textarea name="mensaje" rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm" placeholder="Cuéntenos brevemente sobre su empresa y su necesidad…" />
                </div>
                <button type="submit" className="sm:col-span-2 mt-1 inline-flex items-center justify-center gap-2 rounded-md gradient-accent px-5 py-3 text-sm font-semibold text-white shadow-elevated">
                  Enviar consulta
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {label}{required && <span className="text-destructive"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light/30"
      />
    </div>
  );
}
