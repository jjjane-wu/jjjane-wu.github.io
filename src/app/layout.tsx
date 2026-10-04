import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { Bubbles, DepthGauge, Footer, Nav } from "@/components/Chrome";
import "./globals.css";

// Fraunces with its SOFT axis turned up for headings; Figtree for everything else.
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const description =
  "Jane Wu is a data scientist finishing an MS at Carnegie Mellon. AI agents, LLM systems, recommender systems, experimentation and production ML.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jjjane-wu.github.io"),
  title: { default: "Jane Wu · Data Scientist", template: "%s · Jane Wu" },
  description,
  openGraph: {
    title: "Jane Wu · Data Scientist",
    description,
    url: "https://jjjane-wu.github.io",
    siteName: "Jane Wu",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#d2f0ee",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable}`}>
      <body className="relative">
        <Nav />
        {children}
        <Footer />
        <DepthGauge />
        <Bubbles />
      </body>
    </html>
  );
}
