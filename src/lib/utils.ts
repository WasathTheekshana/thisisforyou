import type { FlowerKind } from "@/types";

export function generateBouquetId(): string {
  return Math.random().toString(36).slice(2, 10);
}

export function encodeBouquet(flowers: FlowerKind[], message?: string): string {
  const payload = { flowers, message };
  return Buffer.from(JSON.stringify(payload)).toString("base64url");
}

export function decodeBouquet(id: string): { flowers: FlowerKind[]; message?: string } | null {
  try {
    const json = Buffer.from(id, "base64url").toString("utf-8");
    return JSON.parse(json);
  } catch {
    return null;
  }
}
