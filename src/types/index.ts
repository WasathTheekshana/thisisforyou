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
  imageName: string;
};

export type Bouquet = {
  id: string;
  flowers: FlowerKind[];
  message?: string;
  createdAt: string;
};
