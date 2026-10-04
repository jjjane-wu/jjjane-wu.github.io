"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, profile } from "@/content/site";
import { FLOOR, water } from "@/lib/depth";

// Sits over the sunlit header of every page.
const LEAVE_MS = 220;

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  // The new page has arrived: let its entrance animation play.
  useEffect(() => {
    document.documentElement.classList.remove("leaving");
  }, [pathname]);

  // Let the current page drift out before the next one drifts in.
  const leaveTo = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    event.preventDefault();
    if (href === pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const root = document.documentElement;
    root.classList.add("leaving");
    window.setTimeout(() => router.push(href), LEAVE_MS);
    // Never leave the page hidden if the navigation fails.
    window.setTimeout(() => root.classList.remove("leaving"), LEAVE_MS + 1500);
  };

  return (
    <nav aria-label="Primary" className="no-print absolute inset-x-0 top-0 z-20 text-deep">
      <div className="mx-auto flex max-w-[1040px] flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-6 py-6">
        <Link href="/" onClick={leaveTo("/")} className="font-serif text-[19px]">
          {profile.name}
        </Link>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-[14.5px] max-sm:gap-x-4 max-sm:text-[14px]">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href.replace(/\/$/, ""));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={leaveTo(item.href)}
                aria-current={active ? "page" : undefined}
                className={`underline-offset-[6px] transition-colors hover:underline ${
                  active ? "underline" : "text-kelp hover:text-deep"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="no-print -mt-px" data-tone="dark" style={water(FLOOR, 1)}>
      <div className="mx-auto max-w-[1040px] px-6 pt-16 pb-10">
        <p className="text-[14px] text-mist">Get in touch</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-1 inline-block font-serif text-[clamp(22px,3vw,32px)] underline decoration-white/25 underline-offset-8 transition-colors [overflow-wrap:anywhere] hover:decoration-seafoam"
        >
          {profile.email}
        </a>
        <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-2 border-t border-white/[0.12] pt-5 text-[14px] text-mist">
          <span>© 2026 {profile.name}</span>
          <span>{profile.school}</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foam">
            LinkedIn ↗
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foam">
            GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

const MAX_DEPTH = 40; // metres at the bottom of the page

// A small dive gauge: how far down the page you are, in metres.
export function DepthGauge() {
  const ref = useRef<HTMLDivElement>(null);
  const [metres, setMetres] = useState(0);
  const [progress, setProgress] = useState(0);
  const [light, setLight] = useState(true);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setProgress(p);
      setMetres(Math.round(p * MAX_DEPTH));
      // Match the text colour to the water behind the gauge.
      const el = ref.current;
      if (el) {
        const box = el.getBoundingClientRect();
        const behind = document
          .elementsFromPoint(box.left + box.width / 2, box.top + box.height / 2)
          .find((node) => node instanceof HTMLElement && node.dataset.tone);
        setLight((behind as HTMLElement | undefined)?.dataset.tone === "light");
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`no-print pointer-events-none fixed top-1/2 right-5 z-20 hidden -translate-y-1/2 flex-col items-center gap-2 text-[12px] tabular-nums transition-colors duration-300 lg:flex ${
        light ? "text-deep" : "text-foam"
      }`}
    >
      <div className="relative h-28 w-px bg-current opacity-30" />
      <span
        className="absolute left-1/2 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-current"
        style={{ top: `calc(${progress} * (7rem - 7px))` }}
      />
      <span>{metres} m</span>
    </div>
  );
}

const BUBBLES = [
  { left: "6%", size: 7, duration: 19, delay: 0 },
  { left: "14%", size: 4, duration: 15, delay: -6 },
  { left: "23%", size: 11, duration: 24, delay: -12 },
  { left: "37%", size: 5, duration: 17, delay: -3 },
  { left: "49%", size: 8, duration: 22, delay: -15 },
  { left: "58%", size: 4, duration: 14, delay: -9 },
  { left: "69%", size: 12, duration: 26, delay: -5 },
  { left: "78%", size: 6, duration: 18, delay: -13 },
  { left: "88%", size: 9, duration: 21, delay: -1 },
  { left: "95%", size: 4, duration: 16, delay: -8 },
];

export function Bubbles() {
  return (
    <div className="bubbles" aria-hidden>
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
