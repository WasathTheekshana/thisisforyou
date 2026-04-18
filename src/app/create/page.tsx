"use client";

import { useBouquet, MIN_FLOWERS, MAX_FLOWERS } from "@/hooks/useBouquet";
import { FlowerPicker } from "@/components/flowers";
import { BouquetPreview } from "@/components/bouquet";
import { Button } from "@/components/ui";

export default function CreatePage() {
  const { selected, add, remove, clear, countOf, count, isFull, isReady } =
    useBouquet();

  const remaining = MIN_FLOWERS - count;

  return (
    <main className="flex flex-col items-center min-h-screen px-6 py-16">
      <div className="w-full max-w-2xl space-y-8">

        <div className="text-center space-y-2">
          <h1 className="text-5xl text-ink" style={{ fontFamily: "var(--font-display)" }}>
            pick your flowers.
          </h1>
          <p className="text-[var(--color-ink-muted)]" style={{ fontFamily: "var(--font-body)" }}>
            choose between {MIN_FLOWERS} and {MAX_FLOWERS} flowers
          </p>
        </div>

        <div className="flex items-center justify-between text-sm" style={{ fontFamily: "var(--font-body)" }}>
          <span className={`tabular-nums ${isFull ? "text-ink font-medium" : "text-[var(--color-ink-muted)]"}`}>
            {count} / {MAX_FLOWERS} selected
          </span>
          {count > 0 && (
            <button
              onClick={clear}
              className="text-[var(--color-ink-muted)] hover:text-ink transition-colors underline underline-offset-2"
            >
              clear all
            </button>
          )}
        </div>

        <FlowerPicker onSelect={add} countOf={countOf} isFull={isFull} />

        {count > 0 && (
          <div className="space-y-3">
            <p className="text-sm text-[var(--color-ink-muted)]" style={{ fontFamily: "var(--font-body)" }}>
              your bouquet
            </p>
            <BouquetPreview flowers={selected} onRemove={remove} />
          </div>
        )}

        <div className="flex flex-col items-center gap-3 pt-2">
          {count > 0 && !isReady && (
            <p className="text-sm text-[var(--color-ink-muted)]" style={{ fontFamily: "var(--font-body)" }}>
              add {remaining} more {remaining === 1 ? "flower" : "flowers"} to continue
            </p>
          )}
          <Button disabled={!isReady}>
            make a bouquet
          </Button>
        </div>

      </div>
    </main>
  );
}
