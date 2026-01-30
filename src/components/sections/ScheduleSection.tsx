import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Users, Award } from "lucide-react";
import { SCHEDULE } from "@/lib/siteConfig";

type TabKey = "escuela" | "competicion" | "adultos";

const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  { key: "escuela", label: "Escuela", icon: <Users className="w-4 h-4" /> },
  { key: "competicion", label: "Competición", icon: <Award className="w-4 h-4" /> },
  { key: "adultos", label: "Adultos", icon: <Clock className="w-4 h-4" /> },
];

export const ScheduleSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("escuela");

  return (
    <section className="relative section-padding bg-card/30">
      <div className="container max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg text-foreground mb-4">Horarios</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Elige el programa que mejor se adapte a ti o a tu hija.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-1 sm:gap-2 mb-8 flex-wrap"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300
                ${
                  activeTab === tab.key
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }
              `}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Schedule content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="card-magic"
          >
            {/* Mobile: Cards layout */}
            <div className="block sm:hidden space-y-3">
              {SCHEDULE[activeTab].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-secondary/30 border border-border/30"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-foreground font-medium">{item.day}</span>
                    <span className="text-primary font-semibold">{item.time}</span>
                  </div>
                  <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
                    {item.level}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Desktop: Table layout */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-4 px-4 text-muted-foreground font-medium text-sm">Día</th>
                    <th className="text-left py-4 px-4 text-muted-foreground font-medium text-sm">Horario</th>
                    <th className="text-left py-4 px-4 text-muted-foreground font-medium text-sm">Nivel</th>
                  </tr>
                </thead>
                <tbody>
                  {SCHEDULE[activeTab].map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-border/30 last:border-0"
                    >
                      <td className="py-4 px-4 text-foreground font-medium">{item.day}</td>
                      <td className="py-4 px-4 text-primary font-semibold">{item.time}</td>
                      <td className="py-4 px-4">
                        <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                          {item.level}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Note */}
            <p className="mt-6 pt-4 border-t border-border/30 text-xs sm:text-sm text-muted-foreground text-center">
              Los horarios pueden ajustarse por nivel y cupos. Confirma por WhatsApp.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
