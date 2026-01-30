import { motion, type Easing } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";
import { CONTENT } from "@/lib/siteConfig";

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
          <h2 className="heading-lg text-foreground mb-4">{CONTENT.whatIs.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {CONTENT.whatIs.subtitle}
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
              <h3 className="heading-md text-foreground">{CONTENT.whatIs.fantasia.title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {CONTENT.whatIs.fantasia.description}
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {CONTENT.whatIs.fantasia.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
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
              <h3 className="heading-md text-foreground">{CONTENT.whatIs.fitkid.title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {CONTENT.whatIs.fitkid.description}
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {CONTENT.whatIs.fitkid.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">Por qué Evolut es diferente</p>
          <div className="flex flex-wrap justify-center gap-3">
            {CONTENT.differentiators.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-secondary/50 text-foreground/80 text-sm border border-border/30"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
