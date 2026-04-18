import type { Metadata } from "next";
import { Swanky_and_Moo_Moo, The_Girl_Next_Door } from "next/font/google";
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
        {children}
      </body>
    </html>
  );
}
