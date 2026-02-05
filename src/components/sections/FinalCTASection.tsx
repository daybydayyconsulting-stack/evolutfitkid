import { motion } from "framer-motion";
import { MessageCircle, Shield } from "lucide-react";
import { CONTENT, getWhatsAppLink } from "@/lib/siteConfig";

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
          <h2 className="heading-lg text-foreground mb-6 uppercase">
            {CONTENT.finalCta.title}
          </h2>
          
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8">
            {CONTENT.finalCta.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex justify-center items-center">
            <a
              href={getWhatsAppLink("prueba")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow flex items-center gap-3 text-lg uppercase tracking-wide"
            >
              <MessageCircle className="w-6 h-6" />
              Reservar clase de prueba
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            <span>{CONTENT.finalCta.trust}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
