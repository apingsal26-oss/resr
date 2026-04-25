import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pulseflow — Outbound that thinks for itself",
  description:
    "Pulseflow is the AI-native revenue platform that researches accounts, writes the first draft, and sends only the messages worth reading.",
  metadataBase: new URL("https://pulseflow.example.com"),
  openGraph: {
    title: "Pulseflow — Outbound that thinks for itself",
    description:
      "AI-native revenue platform: research, write, deliver, and learn from every signal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
