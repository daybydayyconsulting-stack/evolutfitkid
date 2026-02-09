import { motion } from "framer-motion";
import { Award, Heart, Star } from "lucide-react";
import { CONTENT } from "@/lib/siteConfig";

export const BelenSection = () => {
  return (
    <section className="relative section-padding bg-card/30">
      <div className="container max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border/30 flex items-center justify-center overflow-hidden">
              {/* Placeholder for real photo */}
              <div className="text-center p-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm">Foto de Belén</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="heading-lg text-foreground mb-2 uppercase">{CONTENT.belen.title}</h2>
            <p className="text-primary font-medium mb-6 uppercase tracking-wide text-sm">
              {CONTENT.belen.subtitle}
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
              {CONTENT.belen.description}
            </p>

            {/* Como deportista */}
            <h3 className="text-foreground font-semibold text-sm uppercase tracking-wide mb-2">Como deportista</h3>
            <ul className="space-y-2 mb-5">
              {CONTENT.belen.highlightsDeportista.map((highlight, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm md:text-base">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Como entrenadora */}
            <h3 className="text-foreground font-semibold text-sm uppercase tracking-wide mb-2">Como entrenadora</h3>
            <ul className="space-y-2">
              {CONTENT.belen.highlightsEntrenadora.map((highlight, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm md:text-base">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
            >
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground/80">Fundadora de Evolut FitKid</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
