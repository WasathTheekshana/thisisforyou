"use client";

import type { Flower } from "@/types";

type Props = {
  flower: Flower;
  onSelect: (id: Flower["id"]) => void;
  disabled?: boolean;
};

export default function FlowerCard({ flower, onSelect, disabled }: Props) {
  return (
    <button
      onClick={() => onSelect(flower.id)}
      disabled={disabled}
      className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-[var(--color-border)] bg-white hover:bg-blush transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
    >
      <span className="text-4xl">{flower.emoji}</span>
      <span className="text-sm" style={{ fontFamily: "var(--font-body)" }}>
        {flower.name}
      </span>
    </button>
  );
}
