"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { heroFoot, heroStats, nav, profile } from "@/content/site";

const LETTERS = ["J", "A", "N", "E", "", "W", "U"];

// Both arms render the same content in the same positions; only the skin differs.
// Arm B sits on top and is clipped at the divider, so it is hidden from assistive tech.
function Arm({ variant }: { variant: "a" | "b" }) {
  const decorative = variant === "b";
  const Letters = decorative ? "div" : "h1";

  return (
    <div className={`arm arm-${variant}`} aria-hidden={decorative || undefined}>
      <div className="split-bar label">
        <span className={decorative ? "invisible" : undefined}>A / Control</span>
        <nav className="split-nav" aria-label={decorative ? undefined : "Primary"}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={decorative ? -1 : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <span className={`text-right ${decorative ? "text-acid" : "invisible"}`}>
          B / Treatment
        </span>
      </div>

      <Letters className="letters" aria-label={decorative ? undefined : profile.name}>
        {LETTERS.map((char, i) => (
          <span key={i} aria-hidden className={char ? undefined : "gap"}>
            {char}
          </span>
        ))}
      </Letters>

      <div className="split-bottom">
        <p className="split-statement">
          <span className="label mb-3 block">{profile.role}</span>
          {profile.statement}
        </p>
        <dl className="split-stats">
          {heroStats.map((stat) => (
            <div key={stat.value}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="split-foot label">
        {heroFoot.map((item) => (
          <span key={item}>{item}</span>
        ))}
        <span>Scroll ↓</span>
      </div>
    </div>
  );
}

export default function SplitHero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const armB = el.querySelector<HTMLElement>(".arm-b");
    const divider = el.querySelector<HTMLElement>(".split-div");
    const knob = el.querySelector<HTMLElement>(".split-knob");
    if (!armB || !divider || !knob) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Each visitor is randomized into an arm once; the arm decides which skin leads.
    let arm = "b";
    try {
      const saved = localStorage.getItem("jw-arm");
      arm = saved === "a" || saved === "b" ? saved : Math.random() < 0.5 ? "a" : "b";
      localStorage.setItem("jw-arm", arm);
    } catch {
      // Storage can be unavailable (private mode); fall back to arm B.
    }
    const rest = arm === "a" ? 0.64 : 0.36;

    let x = 0.58;
    let target = rest;
    let touched = false;
    let visible = true;
    let raf = 0;

    const onPointer = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      touched = true;
      target = Math.min(0.97, Math.max(0.03, (e.clientX - rect.left) / rect.width));
    };

    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      if (!touched && !reduceMotion) target = rest + 0.03 * Math.sin(t / 1600);
      x = reduceMotion ? target : x + (target - x) * 0.12;
      const pct = (x * 100).toFixed(2);
      const left = Math.round(x * 100);
      armB.style.clipPath = `inset(0 0 0 ${pct}%)`;
      divider.style.left = `${pct}%`;
      knob.textContent = `A ${left} : ${100 - left} B`;
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(el);
    el.addEventListener("pointermove", onPointer);
    el.addEventListener("pointerdown", onPointer);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      el.removeEventListener("pointermove", onPointer);
      el.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <section ref={root} className="split">
      <Arm variant="a" />
      <Arm variant="b" />
      <div className="split-div" aria-hidden>
        <span className="split-knob">A 58 : 42 B</span>
      </div>
    </section>
  );
}
