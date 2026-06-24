import { MessageCircle } from "lucide-react";

export const WHATSAPP_NUMBER = "50662253851";
export const WHATSAPP_DISPLAY = "6225 3851";
export function whatsappLink(message = "Hola, me gustaría solicitar información sobre los servicios de Nexo Financiero CR.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-3 text-sm font-semibold text-white shadow-elevated transition hover:scale-105"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
