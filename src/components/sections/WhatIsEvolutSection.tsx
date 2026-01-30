import { motion, type Easing } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" as Easing },
  }),
};

export const WhatIsEvolutSection = () => {
  return (
    <section className="relative section-padding">
      <div className="container max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground mb-4">¿Qué es Evolut?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Dos disciplinas, un mismo objetivo: que cada alumna disfrute, progrese y brille.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Fantasía Card */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="card-magic group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-md text-foreground">Fantasía</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Interpretación + storytelling. Las alumnas aprenden a contar historias con su cuerpo, 
              expresando emociones a través de la danza y la actuación. Creatividad, musicalidad y escenario.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Expresión corporal y drama
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Coreografías con narrativa
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Preparación para exhibiciones
              </li>
            </ul>
          </motion.div>

          {/* FitKid Card */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="card-magic group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-md text-foreground">FitKid</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Acrobacia + energía. Combinamos gimnasia, acrobacia y fitness en rutinas dinámicas. 
              Las alumnas ganan fuerza, flexibilidad y confianza mientras se divierten.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Acrobacias y gimnasia
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Condición física y fuerza
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Técnica progresiva por niveles
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
