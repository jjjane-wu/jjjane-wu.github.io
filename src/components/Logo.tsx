import type { ReactNode } from "react";
import { siTiktok, siUnitednations, siXiaomi } from "simple-icons";

export type LogoKey = "unitednations" | "tiktok" | "xiaomi" | "ey" | "cmu" | "nyu";

function Glyph({ path, color }: { path: string; color: string }) {
  return (
    <svg viewBox="0 0 24 24" width="62%" height="62%" fill={color} aria-hidden>
      <path d={path} />
    </svg>
  );
}

function Letters({ text, color }: { text: string; color: string }) {
  return (
    <span className="text-[13px] font-bold tracking-tight" style={{ color }} aria-hidden>
      {text}
    </span>
  );
}

// Each mark in its own brand colour, on a white tile.
const MARKS: Record<LogoKey, ReactNode> = {
  unitednations: <Glyph path={siUnitednations.path} color="#009edb" />,
  tiktok: <Glyph path={siTiktok.path} color="#000000" />,
  xiaomi: <Glyph path={siXiaomi.path} color="#ff6900" />,
  // Official EY mark (Wikimedia Commons, "EY logo 2019.svg").
  ey: (
    <svg viewBox="0 0 68.67 69.32" width="64%" height="64%" aria-hidden>
      <path
        d="M11.09 61.4h17.37v7.92H.67V34.9h19.7l4.61 7.92H11.1v5.68h12.56v7.22H11.1zm35.86-26.5l-5.9 11.23-5.88-11.23H23.65l12.13 20.82v13.6h10.4v-13.6L58.31 34.9z"
        fill="#161d23"
        fillRule="evenodd"
      />
      <path d="M68.67 12.81V0L0 24.83z" fill="#ffe600" fillRule="evenodd" />
    </svg>
  ),
  cmu: <Letters text="CMU" color="#c41230" />,
  // Official NYU seal (Wikimedia Commons, "New York University Seal.svg").
  nyu: <img src="/logos/nyu-seal.svg" alt="" className="h-[80%] w-[80%]" />,
};

// A small white tile with the organisation's mark, or its initials when no mark is available.
export default function Logo({
  mark,
  name,
  initials,
  size = 44,
}: {
  mark: LogoKey | null;
  name: string;
  initials: string;
  size?: number;
}) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-xl bg-white"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${name} logo`}
    >
      {mark ? MARKS[mark] : <Letters text={initials} color="#0a3344" />}
    </span>
  );
}
