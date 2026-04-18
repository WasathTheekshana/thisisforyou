"use client";

import { useState } from "react";
import type { FlowerKind } from "@/types";

export const MIN_FLOWERS = 6;
export const MAX_FLOWERS = 10;

export function useBouquet() {
  const [selected, setSelected] = useState<FlowerKind[]>([]);

  function add(flower: FlowerKind) {
    if (selected.length >= MAX_FLOWERS) return;
    setSelected((prev) => [...prev, flower]);
  }

  function remove(index: number) {
    setSelected((prev) => prev.filter((_, i) => i !== index));
  }

  function clear() {
    setSelected([]);
  }

  function countOf(flower: FlowerKind): number {
    return selected.filter((f) => f === flower).length;
  }

  return {
    selected,
    add,
    remove,
    clear,
    countOf,
    count: selected.length,
    isFull: selected.length >= MAX_FLOWERS,
    isReady: selected.length >= MIN_FLOWERS,
  };
}
