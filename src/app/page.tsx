import Image from "next/image";
import SplitHero from "@/components/SplitHero";
import { Marquee, Row, SectionHead } from "@/components/ui";
import { experience, focus, profile, selectedWork, skills } from "@/content/site";

export default function Home() {
  return (
    <>
      <SplitHero />
      <main>
        <section aria-labelledby="experience">
          <SectionHead index="01" title="Experience" href="/experience/" cta="Full detail" />
          {experience.map((role, i) => (
            <Row
              key={role.slug}
              href={`/experience/#${role.slug}`}
              index={`0${i + 1}`}
              title={role.company}
              aside={
                <>
                  {role.title}
                  <br />
                  {role.dates}
                </>
              }
            >
              {role.gist}
            </Row>
          ))}
        </section>

        <section>
          <SectionHead index="02" title="Selected work" href="/projects/" cta="All projects" />
          {selectedWork.map((work, i) => (
            <Row
              key={work.slug}
              href={work.href}
              index={`0${i + 1}`}
              title={work.title}
              aside={
                <>
                  {work.area}
                  <br />
                  {work.metric}
                </>
              }
            />
          ))}
        </section>

        <section id="about" className="scroll-mt-8">
          <SectionHead index="03" title="About" />
          <div className="gutter grid gap-x-10 gap-y-10 py-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="relative mr-3 max-w-[420px]">
                <span className="absolute inset-0 translate-x-3 translate-y-3 bg-electric" aria-hidden />
                <Image
                  src="/headshot.jpg"
                  alt="Portrait of Jane Wu"
                  width={805}
                  height={900}
                  className="relative w-full border-[1.5px] border-ink"
                />
              </div>
            </div>
            <div className="md:col-span-8">
              {profile.about.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "max-w-[30em] font-serif text-[clamp(24px,2.5vw,38px)] leading-[1.14]"
                      : "mt-6 max-w-[62ch] text-[17px] leading-[1.6]"
                  }
                >
                  {paragraph}
                </p>
              ))}
              <dl className="rule-t mt-10">
                {skills.map((row) => (
                  <div key={row.group} className="rule-b grid gap-x-6 gap-y-1 py-3 md:grid-cols-[24ch_1fr]">
                    <dt className="label">{row.group}</dt>
                    <dd className="text-[15px] leading-snug">{row.items}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <Marquee items={focus} />
      </main>
    </>
  );
}
