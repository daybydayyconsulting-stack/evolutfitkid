import { motion } from "framer-motion";
import logoEvolut from "@/assets/logo-evolut-white.png";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8"
    >
      <div className="container max-w-5xl mx-auto flex justify-center">
        <a href="/" className="flex items-center">
          <img
            src={logoEvolut}
            alt="Evolut FitKid"
            className="h-14 md:h-20 w-auto"
          />
        </a>
      </div>
    </motion.header>
  );
};
