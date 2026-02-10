import { useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import mariposaSrc from "@/assets/mariposa.png";

// Generate random spark positions
const generateSparks = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
    size: 2 + Math.random() * 3,
  }));
};

// Butterfly positions - distributed throughout the entire page
const butterflies = [
  { id: 1, left: "8%", top: "5%", size: 90, delay: 0, rotate: -15 },
  { id: 2, left: "88%", top: "8%", size: 70, delay: 1.5, rotate: 20 },
  { id: 3, left: "5%", top: "35%", size: 60, delay: 2.5, rotate: -12 },
  { id: 4, left: "92%", top: "50%", size: 65, delay: 3, rotate: 18 },
  { id: 5, left: "10%", top: "70%", size: 55, delay: 2, rotate: -10 },
  { id: 6, left: "85%", top: "85%", size: 70, delay: 3.5, rotate: 15 },
];

export const BackgroundElements = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  // Parallax transforms
  const sparksY = useTransform(scrollY, [0, 2000], [0, -200]);
  const butterfliesY = useTransform(scrollY, [0, 2000], [0, -300]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reduce spark count on mobile
  const sparkCount = isMobile ? 15 : 30;
  const sparks = useMemo(() => generateSparks(sparkCount), [sparkCount]);

  // If reduced motion, render static elements
  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        {/* Static sparks */}
        {sparks.slice(0, 10).map((spark) => (
          <div
            key={spark.id}
            className="spark"
            style={{
              left: spark.left,
              top: spark.top,
              width: spark.size,
              height: spark.size,
            }}
          />
        ))}
        {/* Static butterflies */}
        {butterflies.slice(0, 2).map((b) => (
          <img
            key={b.id}
            src={mariposaSrc}
            alt=""
            className="butterfly-bg"
            style={{
              left: b.left,
              top: b.top,
              width: isMobile ? b.size * 0.7 : b.size,
              transform: `rotate(${b.rotate}deg)`,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Sparks with parallax */}
      <motion.div style={{ y: sparksY }} className="absolute inset-0">
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            className="spark"
            style={{
              left: spark.left,
              top: spark.top,
              width: spark.size,
              height: spark.size,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: spark.duration,
              delay: spark.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Butterflies with parallax */}
      <motion.div style={{ y: butterfliesY }} className="absolute inset-0">
        {butterflies.map((b, index) => (
          <motion.img
            key={b.id}
            src={mariposaSrc}
            alt=""
            className="butterfly-bg"
            style={{
              left: b.left,
              top: b.top,
              width: isMobile ? b.size * 0.7 : b.size,
            }}
            animate={{
              y: [-10, -25, -15, -20, -10],
              x: [-5, 8, -6, 4, -5],
              rotate: [b.rotate, b.rotate + 8, b.rotate - 5, b.rotate + 3, b.rotate],
            }}
            transition={{
              duration: 14 + index * 2,
              delay: b.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Subtle ambient spots - no glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
    </div>
  );
};

export const PortalTransition = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0.05, 0.15, 0.25], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.05, 0.15, 0.25], [0.8, 1.1, 1.3]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="absolute left-0 right-0 h-[400px] flex items-center justify-center overflow-hidden -mt-20 pointer-events-none">
      <motion.div
        className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
        style={{ opacity, scale }}
      >
        {/* Outer ring - subtle */}
        <motion.div
          className="absolute inset-0 rounded-full border border-primary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner ring - subtle */}
        <motion.div
          className="absolute inset-8 rounded-full border border-accent/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center gradient */}
        <div className="absolute inset-16 rounded-full bg-gradient-radial from-primary/10 to-transparent" />
        
        {/* Portal butterflies */}
        {[0, 1, 2].map((i) => (
          <motion.img
            key={i}
            src={mariposaSrc}
            alt=""
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              marginLeft: -15,
              marginTop: -15,
              width: 30,
              opacity: 0.4,
            }}
            animate={{
              x: [0, 50 * Math.cos((i * 120 * Math.PI) / 180), 0],
              y: [0, 50 * Math.sin((i * 120 * Math.PI) / 180), 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};
