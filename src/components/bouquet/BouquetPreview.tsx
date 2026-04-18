"use client";

import Image from "next/image";
import { getFlower } from "@/lib/flowers";
import { flowerImageUrl } from "@/lib/cloudinary";
import { SketchBox } from "@/components/ui";
import type { FlowerKind } from "@/types";

type Props = {
  flowers: FlowerKind[];
  onRemove?: (index: number) => void;
};

export default function BouquetPreview({ flowers, onRemove }: Props) {
  if (flowers.length === 0) {
    return (
      <SketchBox
        dashed
        className="flex items-center justify-center h-32 text-[var(--color-ink-muted)] text-sm"
        style={{ fontFamily: "var(--font-body)" }}
      >
        your bouquet will appear here
      </SketchBox>
    );
  }

  return (
    <SketchBox className="flex flex-wrap gap-2 p-4">
      {flowers.map((id, i) => {
        const flower = getFlower(id);
        if (!flower) return null;
        return (
          <div key={i} className="relative group">
            <div className="w-14 h-14 rounded-xl overflow-hidden">
              <Image
                src={flowerImageUrl(flower.imageName)}
                alt={flower.name}
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </div>
            {onRemove && (
              <button
                onClick={() => onRemove(i)}
                aria-label={`Remove ${flower.name}`}
                className="absolute -top-1.5 -right-1.5 w-5 h-5 flex items-center justify-center rounded-full bg-ink text-[var(--color-petal)] text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ×
              </button>
            )}
          </div>
        );
      })}
    </SketchBox>
  );
}
