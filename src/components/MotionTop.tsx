import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";

export const MotionTop = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ position: "relative", bottom: 40, top: 3000, opacity: 0 }}
      animate={{ position: "relative", bottom: 40, top: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      {children}
    </motion.div>
  );
};
