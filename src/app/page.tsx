import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import { flowerImageUrl } from "@/lib/cloudinary";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="max-w-lg space-y-8">
        <div className="flex justify-center">
          <Image
            src={flowerImageUrl("rose")}
            alt="Rose"
            width={160}
            height={160}
            className="rounded-full object-cover"
            priority
          />
        </div>

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

        <Link href="/create">
          <Button className="mt-4">make a bouquet</Button>
        </Link>
      </div>

      <footer
        className="absolute bottom-6 text-xs text-[var(--color-ink-muted)]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        open source · made with love ·{" "}
        <Link href="/about" className="underline underline-offset-2 hover:text-ink transition-colors">
          about
        </Link>
      </footer>
    </main>
  );
}
