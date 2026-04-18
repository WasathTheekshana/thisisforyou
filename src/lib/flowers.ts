import type { Flower, FlowerKind } from "@/types";

export const FLOWERS: Flower[] = [
  { id: "rose",          name: "Rose",          color: "#f9a8d4", emoji: "🌹" },
  { id: "tulip",         name: "Tulip",         color: "#fda4af", emoji: "🌷" },
  { id: "sunflower",     name: "Sunflower",     color: "#fde047", emoji: "🌻" },
  { id: "daisy",         name: "Daisy",         color: "#f0fdf4", emoji: "🌼" },
  { id: "lily",          name: "Lily",          color: "#fef9c3", emoji: "⚘"  },
  { id: "lavender",      name: "Lavender",      color: "#e9d5ff", emoji: "💜" },
  { id: "peony",         name: "Peony",         color: "#fbcfe8", emoji: "🌸" },
  { id: "orchid",        name: "Orchid",        color: "#f3e8ff", emoji: "🌺" },
  { id: "chrysanthemum", name: "Chrysanthemum", color: "#fce7f3", emoji: "🌼" },
  { id: "daffodil",      name: "Daffodil",      color: "#fef08a", emoji: "🌼" },
  { id: "iris",          name: "Iris",          color: "#ddd6fe", emoji: "🌷" },
  { id: "carnation",     name: "Carnation",     color: "#fecdd3", emoji: "🌸" },
];

export function getFlower(id: FlowerKind): Flower | undefined {
  return FLOWERS.find((f) => f.id === id);
}
