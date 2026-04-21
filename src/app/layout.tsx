import type { Metadata } from "next";
import { Swanky_and_Moo_Moo, The_Girl_Next_Door } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import SplashScreen from "@/components/SplashScreen";
import PageReveal from "@/components/PageReveal";
import SentryInit from "@/components/SentryInit";
import "./globals.css";

const swanky = Swanky_and_Moo_Moo({
  weight: "400",
  variable: "--font-swanky",
  subsets: ["latin"],
  adjustFontFallback: false,
});

const girlNextDoor = The_Girl_Next_Door({
  weight: "400",
  variable: "--font-girl-next-door",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "This is for you.",
  description:
    "Create a digital flower bouquet and share it with someone you love.",
  openGraph: {
    title: "This is for you.",
    description:
      "Create a digital flower bouquet and share it with someone you love.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${swanky.variable} ${girlNextDoor.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-petal text-ink antialiased" suppressHydrationWarning>
        <a
          href="https://github.com/WasathTheekshana/thisisforyou"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-[#1a1a1a] text-[#fef6f0] text-xs tracking-wide hover:opacity-80 transition-opacity"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <span>this project is a work in progress</span>
          <span className="underline underline-offset-2">view on github →</span>
        </a>
        <SentryInit />
        <SplashScreen />
        <PageReveal>{children}</PageReveal>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
    </html>
  );
}
