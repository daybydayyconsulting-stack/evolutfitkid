import { motion } from "framer-motion";
import { MessageCircle, Check, Gift, Sparkles, Trophy, Users } from "lucide-react";
import { PACKAGES, CONTACT } from "@/lib/siteConfig";

const icons: Record<string, React.ReactNode> = {
  prueba: <Gift className="w-6 h-6" />,
  escuela: <Sparkles className="w-6 h-6" />,
  competicion: <Trophy className="w-6 h-6" />,
  adultos: <Users className="w-6 h-6" />,
};

export const PackagesSection = () => {
  return (
    <section className="relative section-padding">
      <div className="container max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground mb-4">Paquetes básicos</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Encuentra la opción perfecta para empezar o continuar tu camino en Evolut.
          </p>
        </motion.div>

        {/* Package cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`
                card-magic flex flex-col h-full
                ${pkg.highlight ? "ring-2 ring-primary/50 shadow-lg shadow-primary/20" : ""}
              `}
            >
              {/* Highlight badge */}
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Más popular
                </div>
              )}

              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${pkg.highlight ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"}`}>
                  {icons[pkg.id]}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{pkg.name}</h3>
              </div>

              {/* Target */}
              <p className="text-sm text-muted-foreground mb-4">{pkg.target}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="mb-4">
                <span className="text-2xl font-bold text-foreground">{pkg.price}</span>
              </div>

              {/* CTA */}
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium transition-all duration-300
                  ${
                    pkg.highlight
                      ? "btn-glow text-sm !px-4 !py-3"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }
                `}
              >
                <MessageCircle className="w-4 h-4" />
                Quiero este paquete
              </a>
            </motion.div>
          ))}
        </div>

        {/* Discount note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Descuento por segundo hermano (consultar condiciones)
        </motion.p>
      </div>
    </section>
  );
};
