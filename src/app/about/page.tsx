import Image from "next/image";
import Link from "next/link";
import { SketchBox } from "@/components/ui";
import { flowerImageUrl } from "@/lib/cloudinary";

type RepoStats = {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
};

async function getRepoStats(): Promise<RepoStats | null> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/WasathTheekshana/thisisforyou",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function AboutPage() {
  const stats = await getRepoStats();

  return (
    <main
      className="flex flex-col items-center min-h-screen px-6 py-20"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <div className="w-full max-w-lg space-y-14">

        {/* lily */}
        <div className="flex justify-center">
          <Image
            src={flowerImageUrl("lily")}
            alt="Lily"
            width={160}
            height={160}
            className="rounded-full object-cover"
            priority
          />
        </div>

        {/* heading */}
        <div className="space-y-3 text-center">
          <p className="text-xs tracking-widest uppercase text-[var(--color-ink-muted)]">
            about
          </p>
          <h1 className="text-5xl text-ink" style={{ fontFamily: "var(--font-display)" }}>
            This is for you.
          </h1>
          <p className="text-[var(--color-ink-muted)] leading-relaxed">
            A small open source web app to create digital flower bouquets
            and share them with people you love. No account. No data collected. Forever free.
          </p>
        </div>

        {/* project details */}
        <div className="space-y-3">
          <p className="text-xs tracking-widest uppercase text-[var(--color-ink-muted)]">the idea</p>
          <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
            Pick from 12 flowers, arrange them into a bouquet, and send a shareable link —
            no server, no database. The bouquet lives entirely in the URL, encoded as a tiny
            base64 string. Simple, private, and instant.
          </p>
        </div>

        {/* github stats */}
        <div className="space-y-4">
          <p className="text-xs tracking-widest uppercase text-[var(--color-ink-muted)]">on github</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "stars", value: stats?.stargazers_count ?? 0, icon: "★" },
              { label: "forks", value: stats?.forks_count ?? 0, icon: "⌥" },
              { label: "watchers", value: stats?.watchers_count ?? 0, icon: "◎" },
            ].map(({ label, value, icon }) => (
              <SketchBox key={label} className="flex flex-col items-center gap-1 py-5">
                <span className="text-base text-[var(--color-ink-muted)]">{icon}</span>
                <span className="text-2xl text-ink">{value}</span>
                <span className="text-xs text-[var(--color-ink-muted)]">{label}</span>
              </SketchBox>
            ))}
          </div>
          <Link
            href="https://github.com/WasathTheekshana/thisisforyou"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs text-[var(--color-ink-muted)] hover:text-ink transition-colors underline underline-offset-4"
          >
            view on github →
          </Link>
        </div>

        {/* buy me a coffee */}
        <div className="space-y-4">
          <p className="text-xs tracking-widest uppercase text-[var(--color-ink-muted)]">support</p>
          <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
            This project is free and always will be. If it made someone smile,
            a coffee would mean the world.
          </p>
          <Link
            href="https://buymeacoffee.com/wasath"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-ink underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            ☕ buymeacoffee.com/wasath
          </Link>
        </div>

        {/* back */}
        <div className="pt-4 text-center">
          <Link
            href="/"
            className="text-xs text-[var(--color-ink-muted)] hover:text-ink transition-colors underline underline-offset-4"
          >
            ← back home
          </Link>
        </div>

      </div>
    </main>
  );
}
