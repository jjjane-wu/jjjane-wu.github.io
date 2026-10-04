// Water colours from just below the surface (0) to the deepest part of the page (1).
const STOPS = ["#16657d", "#0f4d66", "#0b3a56", "#072238", "#041525"];

function rgb(hex: string): number[] {
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
}

export function depth(t: number): string {
  const pos = Math.min(1, Math.max(0, t)) * (STOPS.length - 1);
  const i = Math.min(STOPS.length - 2, Math.floor(pos));
  const from = rgb(STOPS[i]);
  const to = rgb(STOPS[i + 1]);
  const mixed = from.map((v, k) => Math.round(v + (to[k] - v) * (pos - i)));
  return `rgb(${mixed.join(" ")})`;
}

// Background for a section that spans the given depth range.
export function water(from: number, to: number) {
  return { background: `linear-gradient(to bottom, ${depth(from)}, ${depth(to)})` };
}

// Everything above the footer shares this range; the footer takes the rest.
export const FLOOR = 0.75;
