import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import { PageHeader, Rich } from "@/components/ui";
import {
  education,
  experience,
  profile,
  projects,
  research,
  resumePdf,
  skills,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Jane Wu, data scientist.",
};

const resumeProjects = [projects[0], research[0], research[1]];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="label mt-8 border-b-[1.5px] border-ink pb-1 text-[13px] font-bold">
      {children}
    </h2>
  );
}

function Line({ left, right }: { left: React.ReactNode; right: string }) {
  return (
    <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6">
      <h3 className="text-[17px] font-bold">{left}</h3>
      <p className="label">{right}</p>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] leading-[1.5]">
      {items.map((item) => (
        <li key={item}>
          <Rich text={item} />
        </li>
      ))}
    </ul>
  );
}

export default function ResumePage() {
  // The button only renders once the PDF has been added to /public.
  const hasPdf = existsSync(path.join(process.cwd(), "public", resumePdf));

  return (
    <main>
      <div className="no-print">
        <PageHeader
          index="04"
          title="Resume"
          lede="The same content as the rest of the site, on one sheet."
          tape={{ right: "30%", top: "36%", width: "32%", height: "34%", transform: "rotate(8deg)" }}
        />
        <div className="gutter rule-b flex flex-wrap gap-3 py-5">
          {hasPdf ? (
            <a
              href={`/${resumePdf}`}
              download
              className="label bg-electric px-4 py-2 text-paper hover:bg-ink"
            >
              Download PDF ↓
            </a>
          ) : null}
          <PrintButton />
        </div>
      </div>

      <div className="gutter py-12">
        <div className="sheet mx-auto max-w-[920px] border-[1.5px] border-ink bg-white p-[clamp(20px,5vw,64px)]">
          <p className="font-serif text-[52px] leading-none">{profile.name}</p>
          <p className="label mt-3 flex flex-wrap gap-x-4 gap-y-1">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin}>linkedin.com/in/janewu-zichu-wu</a>
            <a href={profile.github}>github.com/jjjane-wu</a>
          </p>

          <Heading>Education</Heading>
          {education.map((school) => (
            <div key={school.school}>
              <Line left={school.school} right={school.dates} />
              <p className="text-[15px] leading-[1.5]">{school.degree}</p>
              {school.note ? (
                <p className="text-[15px] leading-[1.5]">{school.note}</p>
              ) : null}
            </div>
          ))}

          <Heading>Work experience</Heading>
          {experience.map((role) => (
            <div key={role.slug}>
              <Line left={role.company} right={role.dates} />
              <p className="flex flex-wrap justify-between gap-x-6 font-serif text-[19px]">
                <span>{role.title}</span>
                <span>{role.location}</span>
              </p>
              <Bullets items={role.bullets} />
            </div>
          ))}

          <Heading>Projects</Heading>
          {resumeProjects.map((project) => (
            <div key={project.slug}>
              <Line left={project.title} right={project.area} />
              <Bullets items={project.bullets} />
            </div>
          ))}

          <Heading>Skills</Heading>
          <dl className="mt-3 space-y-1.5 text-[15px] leading-[1.5]">
            {skills.map((row) => (
              <div key={row.group}>
                <dt className="inline font-bold">{row.group}: </dt>
                <dd className="inline">{row.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
