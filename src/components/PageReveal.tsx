"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { SPLASH_MS } from "./SplashScreen";

export default function PageReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0.08 }}
      animate={{ scale: 1 }}
      transition={{
        delay: SPLASH_MS / 1000,
        duration: 1.4,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
