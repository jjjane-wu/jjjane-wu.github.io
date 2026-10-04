import type { Metadata } from "next";
import { Entry, PageHeader, SectionHead } from "@/components/ui";
import { education, experience } from "@/content/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Data science internships at the United Nations Joint Staff Pension Fund, TikTok, Xiaomi and LianHai Capital.",
};

export default function ExperiencePage() {
  return (
    <main>
      <PageHeader
        index="01"
        title="Experience"
        lede="Four internships across LLM systems, product data science, and quantitative research."
        tape={{ right: "4%", top: "30%", width: "30%", height: "38%", transform: "rotate(-7deg)" }}
      />
      {experience.map((role, i) => (
        <Entry
          key={role.slug}
          id={role.slug}
          index={`0${i + 1}`}
          title={role.company}
          subtitle={role.title}
          meta={[role.dates, role.location]}
          tags={role.tags}
          links={[]}
          bullets={role.bullets}
        />
      ))}

      <SectionHead index="02" title="Education" />
      {education.map((school) => (
        <article
          key={school.school}
          className="gutter rule-b grid gap-x-10 gap-y-4 py-10 md:grid-cols-12"
        >
          <div className="md:col-span-5 lg:col-span-4">
            <h3 className="cond text-[clamp(26px,2.8vw,44px)]">{school.school}</h3>
            <p className="label mt-3">{school.dates}</p>
            <p className="label mt-1">{school.location}</p>
          </div>
          <div className="md:col-span-7 lg:col-span-8">
            <p className="font-serif text-[clamp(21px,1.9vw,30px)] leading-tight">
              {school.degree}
            </p>
            {school.note ? (
              <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.55]">{school.note}</p>
            ) : null}
          </div>
        </article>
      ))}
    </main>
  );
}
