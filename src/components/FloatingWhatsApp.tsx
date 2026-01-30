import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/siteConfig";

export const FloatingWhatsApp = () => {
  return (
    <a
      href={CONTACT.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
};
