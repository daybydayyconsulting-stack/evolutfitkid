import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/siteConfig";

export const FloatingWhatsApp = () => {
  return (
    <a
      href={getWhatsAppLink("general")}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
};
