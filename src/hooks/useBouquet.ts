"use client";

import { useState } from "react";
import type { FlowerKind } from "@/types";

const MAX_FLOWERS = 12;

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

  return { selected, add, remove, clear, isFull: selected.length >= MAX_FLOWERS };
}
