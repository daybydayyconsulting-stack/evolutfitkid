import { motion } from "framer-motion";
import { TrendingUp, Heart, Dumbbell, Music } from "lucide-react";

const benefits = [
  {
    icon: Dumbbell,
    title: "Fuerza y flexibilidad",
    description: "Desarrollo físico integral desde edades tempranas",
  },
  {
    icon: Music,
    title: "Ritmo y expresión",
    description: "Coreografías al ritmo de la música",
  },
  {
    icon: Heart,
    title: "Confianza y disciplina",
    description: "Valores que acompañan toda la vida",
  },
];

export const WhatIsFitkidSection = () => {
  return (
    <section className="relative section-padding">
      <div className="container max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            El deporte del momento
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-foreground mb-6">¿Qué es el FitKid?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            El <span className="text-foreground font-medium">FitKid</span> es la disciplina deportiva que está revolucionando el mundo infantil. 
            Combina lo mejor de la <span className="text-foreground">gimnasia artística</span>, <span className="text-foreground">aeróbica</span>, <span className="text-foreground">acrobática</span> y <span className="text-foreground">rítmica</span> con 
            la expresión de la danza, todo al ritmo de la música.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-card/50 border border-border/30"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-muted-foreground mt-10 text-sm"
        >
          La actividad más completa para niñas y niños que buscan diversión y desarrollo integral
        </motion.p>
      </div>
    </section>
  );
};
