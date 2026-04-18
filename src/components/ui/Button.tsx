"use client";

import { motion } from "framer-motion";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
};

const PILL_PATH = `
  M 30,6
  C 56,2  84,5  100,4
  C 118,3 148,5  171,6
  C 184,8  197,17 196,26
  C 197,37 185,47  171,48
  C 148,51 120,49  100,50
  C  82,51  54,49   30,47
  C  15,46   3,37    4,26
  C   3,16  15,7    30,6 Z
`;

export default function Button({
  className = "",
  disabled,
  children,
  ...props
}: Props) {
  return (
    <motion.button
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.04 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.18, ease: "easeInOut" }}
      className={`relative inline-flex items-center justify-center px-8 py-3 cursor-pointer
        text-[#1a1a1a] disabled:opacity-40 disabled:cursor-not-allowed ${className}`}
      style={{ fontFamily: "var(--font-body)" }}
      {...(props as object)}
    >
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        viewBox="0 0 200 52"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={PILL_PATH}
          fill="transparent"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
