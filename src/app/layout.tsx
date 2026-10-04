import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Footer, Nav } from "@/components/Chrome";
import "./globals.css";

// Archivo's width axis gives both the condensed row titles and the expanded hero letters.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const description =
  "Jane Wu is a data scientist finishing an MS at Carnegie Mellon. Recommender systems, LLM systems, experimentation and production ML.";

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
  themeColor: "#f1ede3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
