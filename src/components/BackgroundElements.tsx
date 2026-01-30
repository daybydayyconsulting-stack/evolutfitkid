import { useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Butterfly SVG - Minimal line-art placeholder (easy to replace with real logo)
const ButterflyOutline = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 100 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`butterfly-outline ${className}`}
    style={style}
  >
    {/* Left wing */}
    <path
      d="M50 30C40 15 20 5 10 15C5 25 15 40 30 35C40 32 48 30 50 30Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Right wing */}
    <path
      d="M50 30C60 15 80 5 90 15C95 25 85 40 70 35C60 32 52 30 50 30Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Body */}
    <path
      d="M50 25V45"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Antennae */}
    <path
      d="M48 25C46 20 44 18 42 16M52 25C54 20 56 18 58 16"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

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

// Butterfly positions
const butterflies = [
  { id: 1, left: "10%", top: "20%", size: 60, delay: 0 },
  { id: 2, left: "85%", top: "35%", size: 50, delay: 2 },
  { id: 3, left: "15%", top: "70%", size: 45, delay: 4 },
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
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
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
              opacity: 0.4,
            }}
          />
        ))}
        {/* Static butterflies */}
        {butterflies.slice(0, 2).map((b) => (
          <ButterflyOutline
            key={b.id}
            className="text-butterfly"
            style={{
              left: b.left,
              top: b.top,
              width: b.size,
              height: b.size * 0.6,
              opacity: 0.3,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
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
          <motion.div
            key={b.id}
            className="absolute"
            style={{
              left: b.left,
              top: b.top,
            }}
            animate={{
              y: [-10, -30, -15, -25, -10],
              x: [-5, 10, -8, 5, -5],
              rotate: [-5, 5, -3, 4, -5],
            }}
            transition={{
              duration: 12 + index * 2,
              delay: b.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ButterflyOutline
              className="text-butterfly"
              style={{
                width: isMobile ? b.size * 0.7 : b.size,
                height: (isMobile ? b.size * 0.7 : b.size) * 0.6,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Ambient glow spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
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
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary/40"
          style={{
            boxShadow: "0 0 60px hsl(190 90% 60% / 0.3), inset 0 0 40px hsl(190 90% 60% / 0.1)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner ring */}
        <motion.div
          className="absolute inset-8 rounded-full border border-accent/30"
          style={{
            boxShadow: "0 0 40px hsl(280 70% 70% / 0.2)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center glow */}
        <div className="absolute inset-16 rounded-full bg-gradient-radial from-primary/20 to-transparent" />
        
        {/* Portal butterflies */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              marginLeft: -20,
              marginTop: -12,
            }}
            animate={{
              x: [0, 60 * Math.cos((i * 120 * Math.PI) / 180), 0],
              y: [0, 60 * Math.sin((i * 120 * Math.PI) / 180), 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ButterflyOutline className="text-primary w-10 h-6" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
