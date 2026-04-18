type Props = {
  params: Promise<{ id: string }>;
};

export default async function BouquetPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-screen px-6 text-center">
      <p className="text-sm tracking-widest uppercase text-[var(--color-ink-muted)]">
        someone made this for you
      </p>
      <h1 className="mt-4 text-5xl text-ink" style={{ fontFamily: "var(--font-display)" }}>
        This is for you.
      </h1>
      <p className="mt-2 text-xs text-[var(--color-ink-muted)]">bouquet #{id}</p>
    </main>
  );
}
