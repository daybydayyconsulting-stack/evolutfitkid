import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/siteConfig";
import heroImage1 from "@/assets/hero-class-1.jpg";
import heroImage2 from "@/assets/hero-class-2.jpg";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center section-padding pt-24 md:pt-32">
      {/* Hero content */}
      <div className="container max-w-6xl mx-auto relative z-10 my-0 mt-[82px]">
        {/* Two-column layout on desktop */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center md:text-left order-2 md:order-1">
            {/* Main heading with logo typography */}
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.1
          }} className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider leading-tight mb-4 uppercase">
              <span className="text-primary">FitKid</span>
              <span className="text-muted-foreground font-light"> & </span>
              <span className="text-primary">Fantasía</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-lg md:text-xl text-muted-foreground mb-6 font-light">
              Escuela-club de Fitkid 
            </motion.p>

            {/* Location badge */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="text-muted-foreground text-sm mb-8">
               Ventorro del Cano (Boadilla/Pozuelo)
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-glow flex items-center gap-3 text-lg">
                <MessageCircle className="w-5 h-5" />
                Hablar con Belén
              </a>
              <a href={CONTACT.phoneLink} className="btn-outline-glow flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Llamar
              </a>
            </motion.div>

            {/* Micro-copy */}
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }} className="text-xs text-muted-foreground mt-4">
              Respuesta rápida · Cupos limitados por sala
            </motion.p>
          </div>

          {/* Right: Hero images */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          delay: 0.2
        }} className="order-1 md:order-2 relative">
            {/* Main image */}
            <div className="relative">
              <img src={heroImage1} alt="Clase de FitKid en Evolut" className="w-full h-auto rounded-2xl shadow-2xl object-cover aspect-[4/5]" />
              {/* Overlay gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 to-transparent" />
              
              {/* Secondary image floating */}
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.6
            }} className="absolute -bottom-4 -left-4 md:-left-8 w-32 md:w-40 lg:w-48">
                <img src={heroImage2} alt="Alumnas de Evolut entrenando" className="w-full h-auto rounded-xl shadow-xl object-cover aspect-square border-4 border-background" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - centered below */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 1
      }} className="mt-12 flex justify-center">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};