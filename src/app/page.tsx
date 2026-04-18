import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="max-w-lg space-y-8">
        <p className="text-sm tracking-widest uppercase text-[var(--color-ink-muted)]">
          a little something
        </p>

        <h1 className="text-6xl md:text-7xl leading-tight text-ink"
          style={{ fontFamily: "var(--font-display)" }}>
          This is for you.
        </h1>

        <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}>
          Pick your favourite flowers, arrange them into a bouquet,
          and send a link to someone who deserves to smile today.
        </p>

        <Link
          href="/create"
          className="inline-block mt-4 px-8 py-3 rounded-full border border-[var(--color-border)] text-ink text-base hover:bg-blush transition-colors duration-200"
          style={{ fontFamily: "var(--font-body)" }}
        >
          make a bouquet
        </Link>
      </div>

      <footer className="absolute bottom-6 text-xs text-[var(--color-ink-muted)]"
        style={{ fontFamily: "var(--font-body)" }}>
        open source · made with love
      </footer>
    </main>
  );
}
