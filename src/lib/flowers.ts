import flowersData from "@/data/flowers.json";
import type { Flower, FlowerKind } from "@/types";

export const FLOWERS: Flower[] = flowersData as Flower[];

export function getFlower(id: FlowerKind): Flower | undefined {
  return FLOWERS.find((f) => f.id === id);
}
