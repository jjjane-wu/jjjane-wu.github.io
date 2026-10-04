import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { Link as LinkItem } from "@/content/site";
import { water } from "@/lib/depth";

// Renders **bold** and ==highlight== inside content strings.
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|==[^=]+==)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("==")) return <mark key={i}>{part.slice(2, -2)}</mark>;
        return part;
      })}
    </>
  );
}

export function Wrap({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`rise mx-auto w-full max-w-[1040px] px-6 ${className}`}>{children}</div>;
}

const RAYS: CSSProperties[] = [
  { left: "8%", width: 90, animationDelay: "0s" },
  { left: "27%", width: 46, animationDelay: "-4s" },
  { left: "46%", width: 130, animationDelay: "-7s" },
  { left: "68%", width: 60, animationDelay: "-2s" },
  { left: "84%", width: 100, animationDelay: "-9s" },
];

// Sunlit water at the top of a page, followed by the band where it turns deep.
export function Surface({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      <header className="surface print-plain" data-tone="light">
        <div className="rays no-print" aria-hidden>
          {RAYS.map((style, i) => (
            <span key={i} style={style} />
          ))}
        </div>
        <Wrap className={`relative ${className}`}>{children}</Wrap>
      </header>
      <div className="thermocline -mt-px" data-tone="dark" aria-hidden />
    </>
  );
}

export function PageHeader({ title, lede }: { title: string; lede: string }) {
  return (
    <Surface className="no-print pt-32 pb-12">
      <h1 className="text-[clamp(34px,4.2vw,48px)] leading-tight">{title}</h1>
      <p className="mt-3 max-w-[36em] text-[17px] leading-relaxed text-kelp">{lede}</p>
    </Surface>
  );
}

// A stretch of deep water between two depths (0 = just below the surface).
export function Zone({
  from,
  to,
  id,
  className = "py-14",
  children,
}: {
  from: number;
  to: number;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} data-tone="dark" style={water(from, to)} className="print-plain -mt-px scroll-mt-6">
      <Wrap className={className}>{children}</Wrap>
    </section>
  );
}

export function SectionHead({
  title,
  href,
  cta,
}: {
  title: string;
  href?: string;
  cta?: string;
}) {
  return (
    <div className="mb-4 flex items-baseline justify-between gap-6">
      <h2 className="text-[28px] leading-tight">{title}</h2>
      {href && cta ? (
        <Link
          href={href}
          className="text-[14px] whitespace-nowrap text-mist transition-colors hover:text-foam"
        >
          {cta} →
        </Link>
      ) : null}
    </div>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-1.5">
      {items.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-white/20 px-2.5 py-0.5 text-[12.5px] text-mist"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function ExternalLinks({ links }: { links: LinkItem[] }) {
  if (links.length === 0) return null;
  return (
    <p className="mt-3 flex flex-wrap gap-4">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="text-[14px] text-seafoam underline decoration-seafoam/40 underline-offset-4 transition-colors hover:decoration-seafoam"
        >
          {link.label} ↗
        </a>
      ))}
    </p>
  );
}

// One role or project: facts on the left, bullets on the right.
export function Entry({
  icon,
  title,
  subtitle,
  meta,
  tags,
  links,
  note,
  bullets,
}: {
  icon?: ReactNode;
  title: string;
  subtitle: string;
  meta: string[];
  tags: string[];
  links: LinkItem[];
  note?: string;
  bullets: string[];
}) {
  return (
    <article className="grid gap-x-12 gap-y-6 md:grid-cols-12">
      <div className="md:col-span-4">
        {icon ? <div className="mb-4">{icon}</div> : null}
        <h2 className="text-[24px] leading-snug">{title}</h2>
        <p className="mt-2 text-[15.5px] text-foam">{subtitle}</p>
        {meta.map((line) => (
          <p key={line} className="text-[14px] text-mist">
            {line}
          </p>
        ))}
        <ExternalLinks links={links} />
        {note ? <p className="mt-3 text-[14px] text-mist">{note}</p> : null}
        <Tags items={tags} />
      </div>
      <ul className="space-y-4 text-[15.5px] leading-[1.7] md:col-span-8">
        {bullets.map((bullet) => (
          <li key={bullet} className="grid grid-cols-[14px_1fr] gap-x-2">
            <span
              aria-hidden
              className="mt-[0.72em] h-[5px] w-[5px] rounded-full bg-seafoam"
            />
            <span>
              <Rich text={bullet} />
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Row({
  href,
  icon,
  title,
  aside,
  children,
}: {
  href: string;
  icon?: ReactNode;
  title: string;
  aside: ReactNode;
  children?: ReactNode;
}) {
  const className =
    "group -mx-4 block rounded-2xl px-4 py-5 transition-colors duration-200 hover:bg-white/[0.07]";
  const text = (
    <div className="min-w-0 flex-1">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1">
        <h3 className="text-[21px] leading-snug [overflow-wrap:anywhere]">{title}</h3>
        <p className="text-[14px] text-mist">{aside}</p>
      </div>
      {children ? (
        <p className="mt-1.5 max-w-[64ch] text-[15px] leading-relaxed text-mist">{children}</p>
      ) : null}
    </div>
  );
  const body = icon ? (
    <div className="flex items-start gap-4">
      {icon}
      {text}
    </div>
  ) : (
    text
  );
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <li className="border-t border-white/[0.12] first:border-t-0">
      {external ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className={className}
        >
          {body}
        </a>
      ) : (
        <Link href={href} className={className}>
          {body}
        </Link>
      )}
    </li>
  );
}
