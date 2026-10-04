import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import { PageHeader, Rich, Zone } from "@/components/ui";
import {
  education,
  experience,
  profile,
  projects,
  research,
  resumePdf,
  skills,
} from "@/content/site";
import { FLOOR } from "@/lib/depth";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Jane Wu, data scientist.",
};

const resumeProjects = [projects[0], research[0], research[1]];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-8 border-b border-deep/20 pb-1 font-sans text-[13px] font-semibold tracking-[0.08em] text-kelp uppercase">
      {children}
    </h2>
  );
}

function Line({ left, right }: { left: React.ReactNode; right: string }) {
  return (
    <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6">
      <h3 className="font-sans text-[16px] font-semibold tracking-normal">{left}</h3>
      <p className="text-[14px] text-kelp">{right}</p>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[14.5px] leading-[1.55]">
      {items.map((item) => (
        <li key={item}>
          <Rich text={item} />
        </li>
      ))}
    </ul>
  );
}

export default function ResumePage() {
  // With the PDF in /public the page offers it; without it, the web sheet can be printed.
  const hasPdf = existsSync(path.join(process.cwd(), "public", resumePdf));

  return (
    <>
      <PageHeader title="Resume" lede="The same content as the rest of the site, on one sheet." />
      <main>
        <Zone from={0} to={FLOOR} className="pt-4 pb-16">
          <div className="no-print mb-6 flex flex-wrap gap-3">
            {hasPdf ? (
              <>
                <a
                  href={`/${resumePdf}`}
                  download
                  className="rounded-full bg-seafoam px-4 py-1.5 text-[14px] font-medium text-deep transition-colors hover:bg-foam"
                >
                  Download PDF ↓
                </a>
                <a
                  href={`/${resumePdf}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/30 px-4 py-1.5 text-[14px] transition-colors hover:bg-white/10"
                >
                  Open PDF ↗
                </a>
              </>
            ) : (
              <PrintButton />
            )}
          </div>

          <div className="sheet rounded-2xl bg-white p-[clamp(20px,5vw,56px)] text-deep">
            <p className="font-serif text-[36px] leading-none">{profile.name}</p>
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[14px] text-kelp">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.linkedin}>linkedin.com/in/janewu-zichu-wu</a>
              <a href={profile.github}>github.com/jjjane-wu</a>
            </p>

            <Heading>Education</Heading>
            {education.map((school) => (
              <div key={school.school}>
                <Line left={school.school} right={school.dates} />
                <p className="text-[14.5px] leading-[1.55]">{school.degree}</p>
                {school.note ? (
                  <p className="text-[14.5px] leading-[1.55]">{school.note}</p>
                ) : null}
              </div>
            ))}

            <Heading>Work experience</Heading>
            {experience
              .filter((role) => !role.siteOnly)
              .map((role) => (
                <div key={role.slug}>
                  <Line left={role.company} right={role.dates} />
                  <p className="flex flex-wrap justify-between gap-x-6 text-[14.5px] text-kelp">
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
            <dl className="mt-3 space-y-1.5 text-[14.5px] leading-[1.55]">
              {skills.map((row) => (
                <div key={row.group}>
                  <dt className="inline font-semibold">{row.group}: </dt>
                  <dd className="inline">{row.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Zone>
      </main>
    </>
  );
}
