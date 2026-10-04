import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { Link as LinkItem } from "@/content/site";

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

// Strips the inline markup, for places that need plain text.
export function plain(text: string) {
  return text.replace(/\*\*|==/g, "");
}

export function PageHeader({
  index,
  title,
  lede,
  tape,
}: {
  index: string;
  title: string;
  lede: string;
  tape: CSSProperties;
}) {
  return (
    <header className="gutter rule-b relative overflow-hidden pt-10 pb-8">
      <p className="label text-mute">({index})</p>
      <h1 className="poster relative mt-2">
        {title}
        <span className="tape" style={tape} aria-hidden />
      </h1>
      <p className="mt-8 max-w-[26em] font-serif text-[clamp(22px,2.4vw,36px)] leading-[1.12]">
        {lede}
      </p>
    </header>
  );
}

export function SectionHead({
  index,
  title,
  href,
  cta,
}: {
  index: string;
  title: string;
  href?: string;
  cta?: string;
}) {
  return (
    <div className="gutter rule-b flex items-end justify-between gap-6 pt-16 pb-4">
      <h2 className="font-serif text-[clamp(40px,5.4vw,88px)] leading-none">
        <span className="label mr-4 align-middle text-mute">({index})</span>
        {title}
      </h2>
      {href && cta ? (
        <Link href={href} className="label whitespace-nowrap underline underline-offset-4">
          {cta} →
        </Link>
      ) : null}
    </div>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-1.5">
      {items.map((tag) => (
        <li key={tag} className="label border-[1.5px] border-ink px-2 py-0.5 text-[11px]">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function ExternalLinks({ links }: { links: LinkItem[] }) {
  if (links.length === 0) return null;
  return (
    <p className="mt-4 flex flex-wrap gap-4">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="label underline underline-offset-4 hover:text-electric"
        >
          {link.label} ↗
        </a>
      ))}
    </p>
  );
}

// One role or project: facts on the left, bullets on the right.
export function Entry({
  id,
  index,
  title,
  subtitle,
  meta,
  tags,
  links,
  bullets,
}: {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  meta: string[];
  tags: string[];
  links: LinkItem[];
  bullets: string[];
}) {
  return (
    <article
      id={id}
      className="gutter rule-b grid scroll-mt-16 gap-x-10 gap-y-6 py-12 md:grid-cols-12"
    >
      <div className="md:col-span-5 lg:col-span-4">
        <p className="label text-mute">{index}</p>
        <h2 className="cond mt-2 text-[clamp(30px,3.3vw,54px)]">{title}</h2>
        <p className="mt-3 font-serif text-[clamp(21px,1.8vw,28px)] leading-tight">
          {subtitle}
        </p>
        {meta.map((line) => (
          <p key={line} className="label mt-2">
            {line}
          </p>
        ))}
        <ExternalLinks links={links} />
        <Tags items={tags} />
      </div>
      <ul className="space-y-5 text-[17px] leading-[1.55] md:col-span-7 lg:col-span-8">
        {bullets.map((bullet) => (
          <li key={bullet} className="grid grid-cols-[2ch_1fr] gap-x-2">
            <span aria-hidden className="font-mono text-electric">
              →
            </span>
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
  index,
  title,
  children,
  aside,
}: {
  href: string;
  index: string;
  title: string;
  children?: ReactNode;
  aside: ReactNode;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const className =
    "group gutter rule-b grid grid-cols-[4ch_minmax(0,1fr)] gap-x-4 gap-y-3 py-6 hover:bg-ink hover:text-paper md:grid-cols-[6ch_minmax(0,1fr)_minmax(0,24ch)]";
  const body = (
    <>
      <span className="label pt-2 text-mute group-hover:text-paper">{index}</span>
      <div>
        <h3 className="cond text-[clamp(28px,3.7vw,62px)] [overflow-wrap:anywhere]">{title}</h3>
        {children ? (
          <p className="mt-3 max-w-[62ch] text-[16px] leading-snug text-mute group-hover:text-paper">
            {children}
          </p>
        ) : null}
      </div>
      <div className="label col-start-2 md:col-start-3 md:pt-2 md:text-right">{aside}</div>
    </>
  );
  return external ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <Link href={href} className={className}>
      {body}
    </Link>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee bg-ink py-3 text-paper" aria-hidden>
      <div>
        {loop.map((item, i) => (
          <span key={i} className="cond text-[clamp(18px,1.9vw,30px)]">
            {item}
            <span className="px-[1.4vw] text-acid">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
