export type FlowerKind =
  | "rose"
  | "tulip"
  | "sunflower"
  | "daisy"
  | "lily"
  | "lavender"
  | "peony"
  | "orchid"
  | "chrysanthemum"
  | "daffodil"
  | "iris"
  | "carnation";

export type Flower = {
  id: FlowerKind;
  name: string;
  color: string;
  emoji: string;
};

export type Bouquet = {
  id: string;
  flowers: FlowerKind[];
  message?: string;
  createdAt: string;
};
