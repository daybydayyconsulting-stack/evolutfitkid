import { motion } from "framer-motion";
import { MapPin, ExternalLink, Car, Clock } from "lucide-react";
import { CONTACT } from "@/lib/siteConfig";
export const LocationSection = () => {
  return <section className="relative section-padding bg-card/30">
      <div className="container max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="heading-lg text-foreground mb-4">VEN A VER UNA CLASE </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Te esperamos en nuestra sede para que conozcas el ambiente y el equipo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map placeholder */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="card-magic overflow-hidden p-0 aspect-video md:aspect-square">
            <iframe src={CONTACT.googleMapsEmbed} width="100%" height="100%" style={{
            border: 0,
            filter: "invert(90%) hue-rotate(180deg)"
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación Evolut FitKid" className="w-full h-full min-h-[300px]" />
          </motion.div>

          {/* Location info */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Ubicación</h3>
                <p className="text-muted-foreground">{CONTACT.address}</p>
              </div>
            </div>

            {/* Access info */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <Car className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Acceso</h3>
                <p className="text-muted-foreground">Fácil acceso en coche · Parking sencillo</p>
              </div>
            </div>

            {/* Hours hint */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Visitas</h3>
                <p className="text-muted-foreground">Coordina con Belén para venir a ver una clase de prueba</p>
              </div>
            </div>

            {/* Google Maps button */}
            <a href={CONTACT.googleMapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-outline-glow mt-4">
              <ExternalLink className="w-4 h-4" />
              Abrir en Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>;
};