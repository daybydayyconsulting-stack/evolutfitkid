import { motion } from "framer-motion";
import { MessageCircle, Shield } from "lucide-react";
import { CONTACT } from "@/lib/siteConfig";

export const FinalCTASection = () => {
  return (
    <section className="relative section-padding overflow-hidden">

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
            <span className="text-primary">Te contamos el mejor grupo</span>
            <br />
            según edad y nivel.
          </h2>

          {/* CTAs */}
          <div className="flex justify-center items-center mt-10">
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow flex items-center gap-3 text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Hablar con Belén ahora
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
