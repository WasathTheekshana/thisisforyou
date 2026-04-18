"use client";

import { getFlower } from "@/lib/flowers";
import type { FlowerKind } from "@/types";

type Props = {
  flowers: FlowerKind[];
};

export default function BouquetPreview({ flowers }: Props) {
  if (flowers.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 rounded-3xl border border-dashed border-[var(--color-border)] text-[var(--color-ink-muted)] text-sm"
        style={{ fontFamily: "var(--font-body)" }}>
        your bouquet will appear here
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center p-6 rounded-3xl border border-[var(--color-border)] bg-white min-h-48">
      {flowers.map((id, i) => {
        const flower = getFlower(id);
        return (
          <span key={i} className="text-3xl select-none" title={flower?.name}>
            {flower?.emoji}
          </span>
        );
      })}
    </div>
  );
}
