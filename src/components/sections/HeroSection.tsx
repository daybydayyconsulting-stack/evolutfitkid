import { motion } from "framer-motion";
import { MessageCircle, Phone, Sparkles, Star, Zap } from "lucide-react";
import { CONTACT } from "@/lib/siteConfig";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-24 md:pt-32">
      {/* Hero content */}
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Escuela de Fantasía y FitKid</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-xl text-foreground mb-6"
        >
          <span className="text-glow text-primary">FitKid</span> & Fantasía
          <br />
          <span className="text-muted-foreground font-light">en movimiento.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Una escuela-club donde niñas y adultos entrenan, progresan y se suben al escenario con confianza.
        </motion.p>

        {/* Bullets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center mb-12 text-sm md:text-base"
        >
          <div className="flex items-center gap-2 text-foreground/80">
            <Star className="w-4 h-4 text-primary" />
            <span>Escuela (2h/semana) y vía a Competición (3 días/semana)</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <Zap className="w-4 h-4 text-primary" />
            <span>Progreso visible, ambiente de familia</span>
          </div>
        </motion.div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-sm mb-10"
        >
          📍 Sede en Ventorro del Cano (zona Boadilla/Pozuelo)
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow flex items-center gap-3 text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Hablar con Belén
          </a>
          <a
            href={CONTACT.phoneLink}
            className="btn-outline-glow flex items-center gap-3"
          >
            <Phone className="w-5 h-5" />
            Llamar
          </a>
        </motion.div>

        {/* Micro-copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xs text-muted-foreground mt-6"
        >
          Respuesta rápida · Cupos limitados por sala
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-primary/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
