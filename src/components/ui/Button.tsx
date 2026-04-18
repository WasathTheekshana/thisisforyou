"use client";

import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const styles: Record<Variant, string> = {
  primary:
    "px-8 py-3 rounded-full bg-ink text-petal hover:opacity-80 transition-opacity",
  ghost:
    "px-8 py-3 rounded-full border border-[var(--color-border)] text-ink hover:bg-blush transition-colors",
};

export default function Button({ variant = "ghost", className = "", ...props }: Props) {
  return (
    <button
      className={`text-base cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${styles[variant]} ${className}`}
      style={{ fontFamily: "var(--font-body)" }}
      {...props}
    />
  );
}
