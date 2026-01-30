import { motion } from "framer-motion";
import { MessageCircle, Phone, Shield } from "lucide-react";
import { CONTACT } from "@/lib/siteConfig";

export const FinalCTASection = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Lighter gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-primary/10 pointer-events-none" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <h2 className="heading-lg text-foreground mb-6">
            ¿Te encaja?
            <br />
            <span className="text-primary text-glow">Te contamos el mejor grupo</span>
            <br />
            según edad y nivel.
          </h2>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow flex items-center gap-3 text-lg animate-glow-pulse"
            >
              <MessageCircle className="w-6 h-6" />
              Hablar con Belén ahora
            </a>
            <a
              href={CONTACT.phoneLink}
              className="btn-outline-glow flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Llamar
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            <span>Sin compromiso · Te orientamos en 2 minutos</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
