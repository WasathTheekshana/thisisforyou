"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { flowerImageUrl } from "@/lib/cloudinary";
import type { Flower } from "@/types";

type Props = {
  flower: Flower;
  count: number;
  onSelect: (id: Flower["id"]) => void;
  disabled?: boolean;
};

export default function FlowerCard({ flower, count, onSelect, disabled }: Props) {
  const isSelected = count > 0;

  return (
    <button
      onClick={() => onSelect(flower.id)}
      disabled={disabled && !isSelected}
      aria-label={`Add ${flower.name}`}
      className="relative flex flex-col items-center gap-2 rounded-2xl disabled:opacity-40 disabled:cursor-not-allowed group"
    >
      <motion.div
        className="relative w-full aspect-square rounded-xl overflow-hidden"
        suppressHydrationWarning
        whileHover={{ rotate: 6 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Image
          src={flowerImageUrl(flower.imageName)}
          alt={flower.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 160px"
          className="object-cover"
        />
      </motion.div>

      <span className="text-sm text-ink" style={{ fontFamily: "var(--font-body)" }}>
        {flower.name}
      </span>

      {isSelected && (
        <span className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-ink text-[var(--color-petal)] text-xs font-medium">
          {count}
        </span>
      )}
    </button>
  );
}
