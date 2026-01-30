import { Instagram, Mail } from "lucide-react";
import { CONTACT } from "@/lib/siteConfig";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-border/30">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-1">Evolut FitKid</h3>
            <p className="text-sm text-muted-foreground">Escuela de Fantasía y FitKid</p>
          </div>

          {/* Social / Contact links */}
          <div className="flex items-center gap-4">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={CONTACT.emailLink}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-10 pt-6 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Evolut FitKid. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            <a href="#" className="hover:text-primary transition-colors">Aviso Legal</a>
            {" · "}
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
            {" · "}
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
