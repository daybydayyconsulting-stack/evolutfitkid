import { motion, useScroll, useTransform } from "framer-motion";
import logoEvolut from "@/assets/logo-evolut-white.png";

export const Header = () => {
  const { scrollY } = useScroll();
  
  // Transform logo size based on scroll
  const logoHeight = useTransform(scrollY, [0, 100], [80, 40]);
  const headerPadding = useTransform(scrollY, [0, 100], [16, 8]);
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["hsla(237, 71%, 11%, 0)", "hsla(237, 71%, 11%, 0.95)"]
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: headerBg, paddingTop: headerPadding, paddingBottom: headerPadding }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 backdrop-blur-sm"
    >
      <div className="container max-w-5xl mx-auto flex justify-center">
        <a href="/" className="flex items-center">
          <motion.img
            src={logoEvolut}
            alt="Evolut FitKid"
            style={{ height: logoHeight }}
            className="w-auto"
          />
        </a>
      </div>
    </motion.header>
  );
};
