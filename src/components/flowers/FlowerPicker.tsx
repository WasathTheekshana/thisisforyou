"use client";

import { FLOWERS } from "@/lib/flowers";
import FlowerCard from "./FlowerCard";
import type { Flower } from "@/types";

type Props = {
  onSelect: (id: Flower["id"]) => void;
  countOf: (id: Flower["id"]) => number;
  isFull: boolean;
};

export default function FlowerPicker({ onSelect, countOf, isFull }: Props) {
  return (
    <div className="grid grid-cols-6 gap-4" suppressHydrationWarning>
      {FLOWERS.map((flower) => (
        <FlowerCard
          key={flower.id}
          flower={flower}
          count={countOf(flower.id)}
          onSelect={onSelect}
          disabled={isFull}
        />
      ))}
    </div>
  );
}
