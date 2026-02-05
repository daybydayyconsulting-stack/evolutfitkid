import { motion } from "framer-motion";
import { TrendingUp, Zap, Dumbbell, Music, Users, Trophy } from "lucide-react";
import { CONTENT } from "@/lib/siteConfig";
const icons = [Zap, Dumbbell, TrendingUp, Music, Users];
export const WhatIsFitkidSection = () => {
  return <section className="relative section-padding">
      <div className="container max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium uppercase tracking-wide">
            <TrendingUp className="w-4 h-4" />
            El deporte del momento
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.1
      }} className="text-center mb-12">
          <h2 className="heading-lg text-foreground mb-6 uppercase">{CONTENT.whatIsFitkid.title}</h2>
          <p className="md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-xl">
            {CONTENT.whatIsFitkid.subtitle}
          </p>
        </motion.div>

        {/* Objectives Grid */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {CONTENT.whatIsFitkid.objectives.map((objective, i) => {
          const Icon = icons[i % icons.length];
          return <div key={i} className="text-center p-5 rounded-2xl bg-card/50 border border-border/30">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-1 uppercase text-sm">{objective.title}</h3>
                <p className="text-sm text-muted-foreground">{objective.description}</p>
              </div>;
        })}
        </motion.div>

        {/* Competitive path */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="flex items-start gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/20">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Trophy className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="text-foreground font-semibold mb-1 uppercase text-sm">CAMINO COMPETITIVO</h4>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {CONTENT.whatIsFitkid.competitive}
            </p>
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="text-center text-muted-foreground mt-10 text-base">
          La actividad más completa para niñas, niños y adultos que buscan diversión y desarrollo integral
        </motion.p>
      </div>
    </section>;
};