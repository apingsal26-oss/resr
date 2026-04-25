import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pulseflow — The AI sales platform that does the work",
  description:
    "Pulseflow is the AI-native revenue platform that researches accounts, writes the first draft, and books meetings with the people most likely to buy.",
  metadataBase: new URL("https://pulseflow.example.com"),
  openGraph: {
    title: "Pulseflow — The AI sales platform that does the work",
    description:
      "Research, write, deliver, learn. Pulseflow turns signals into pipeline.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
