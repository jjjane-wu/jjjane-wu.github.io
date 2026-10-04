"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, profile } from "@/content/site";

// Top bar for inner pages. The landing page carries its own nav inside the hero.
export function Nav() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <nav
      aria-label="Primary"
      className="no-print gutter rule-b label flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-4"
    >
      <Link href="/" className="font-bold">
        {profile.name}
      </Link>
      <div className="flex flex-wrap gap-x-[2.2vw] gap-y-1 max-md:gap-x-4 max-md:text-[11px]">
        {nav.map((item) => {
          const active = pathname.startsWith(item.href.replace(/\/$/, ""));
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "bg-ink px-1.5 text-paper"
                  : "underline-offset-4 hover:underline"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="no-print bg-ink text-paper">
      <div className="gutter pt-16 pb-8">
        <p className="label text-acid">Get in touch</p>
        <a
          href={`mailto:${profile.email}`}
          className="cond mt-3 block text-[clamp(30px,7.4vw,128px)] [overflow-wrap:anywhere] hover:text-acid"
        >
          {profile.email}
        </a>
        <div className="label mt-12 flex flex-wrap justify-between gap-x-8 gap-y-2 border-t-[1.5px] border-paper pt-4">
          <span>© 2026 {profile.name}</span>
          <span>{profile.location}</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-acid">
            LinkedIn ↗
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-acid">
            GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
