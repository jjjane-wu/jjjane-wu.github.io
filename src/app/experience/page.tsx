import type { Metadata } from "next";
import Logo from "@/components/Logo";
import { Entry, PageHeader, SectionHead, Zone } from "@/components/ui";
import { education, experience } from "@/content/site";
import { FLOOR } from "@/lib/depth";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Internships at the United Nations Joint Staff Pension Fund, TikTok, Xiaomi, LianHai Capital and Ernst & Young.",
};

const step = FLOOR / (experience.length + 1);

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        title="Experience"
        lede="Five internships across AI agents, LLM systems, product data science, quantitative research, and business analysis."
      />
      <main>
        {experience.map((role, i) => (
          <Zone key={role.slug} id={role.slug} from={step * i} to={step * (i + 1)}>
            <Entry
              icon={
                <Logo
                  mark={role.logo}
                  name={role.company}
                  initials={role.short.replace(/[^A-Z]/g, "").slice(0, 2)}
                  size={52}
                />
              }
              title={role.company}
              subtitle={role.title}
              meta={[role.dates, role.location]}
              tags={role.tags}
              links={[]}
              bullets={role.bullets}
            />
          </Zone>
        ))}

        <Zone from={step * experience.length} to={FLOOR}>
          <SectionHead title="Education" />
          <div className="space-y-8">
            {education.map((school) => (
              <article key={school.school} className="grid gap-x-12 gap-y-2 md:grid-cols-12">
                <div className="md:col-span-4">
                  <div className="mb-3">
                    <Logo mark={school.logo} name={school.school} initials={school.short} />
                  </div>
                  <h3 className="text-[21px] leading-snug">{school.school}</h3>
                  <p className="text-[14px] text-mist">{school.dates}</p>
                  <p className="text-[14px] text-mist">{school.location}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-[15.5px]">{school.degree}</p>
                  {school.note ? (
                    <p className="mt-1 max-w-[64ch] text-[15px] text-mist">{school.note}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Zone>
      </main>
    </>
  );
}
