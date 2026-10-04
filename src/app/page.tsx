import Image from "next/image";
import Logo from "@/components/Logo";
import { Row, SectionHead, Surface, Zone } from "@/components/ui";
import { education, experience, focus, profile, selectedWork, skills } from "@/content/site";
import { FLOOR } from "@/lib/depth";

const step = FLOOR / 3;

export default function Home() {
  return (
    <>
      <Surface className="flex min-h-[72svh] flex-col justify-center pt-32 pb-12">
        <p className="text-[14.5px] text-kelp">
          {profile.role} · {profile.school}
        </p>
        <h1 className="mt-2 text-[clamp(40px,5.2vw,64px)] leading-[1.08]">{profile.name}</h1>
        <p className="mt-5 max-w-[30em] font-serif text-[clamp(19px,2vw,24px)] leading-snug">
          {profile.statement}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {focus.map((area) => (
            <li
              key={area}
              className="rounded-full border border-deep/20 bg-white/30 px-3 py-1 text-[13.5px]"
            >
              {area}
            </li>
          ))}
        </ul>
      </Surface>

      <main>
        <Zone from={0} to={step}>
          <SectionHead title="Experience" href="/experience/" cta="Full detail" />
          <ul>
            {experience.map((role) => (
              <Row
                key={role.slug}
                href={`/experience/#${role.slug}`}
                icon={<Logo mark={role.logo} name={role.company} initials={role.short.replace(/[^A-Z]/g, "").slice(0, 2)} />}
                title={role.company}
                aside={`${role.title} · ${role.dates}`}
              >
                {role.gist}
              </Row>
            ))}
          </ul>
        </Zone>

        <Zone from={step} to={step * 2}>
          <SectionHead title="Selected work" href="/projects/" cta="All projects" />
          <ul>
            {selectedWork.map((work) => (
              <Row
                key={work.slug}
                href={work.href}
                title={work.title}
                aside={`${work.area} · ${work.metric}`}
              />
            ))}
          </ul>
        </Zone>

        <Zone id="about" from={step * 2} to={FLOOR}>
          <SectionHead title="About" />
          <div className="grid gap-x-12 gap-y-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <Image
                src="/headshot.jpg"
                alt="Portrait of Jane Wu"
                width={805}
                height={900}
                className="w-full max-w-[300px] rounded-2xl"
              />
            </div>
            <div className="md:col-span-8">
              {profile.about.map((paragraph, i) => (
                <p key={i} className="mb-4 max-w-[64ch] text-[16px] leading-[1.7]">
                  {paragraph}
                </p>
              ))}
              <p className="mt-8 mb-1 text-[14px] text-mist">Education</p>
              <ul>
                {education.map((school) => (
                  <li
                    key={school.school}
                    className="flex items-start gap-4 border-t border-white/[0.12] py-4"
                  >
                    <Logo mark={school.logo} name={school.school} initials={school.short} />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-8">
                        <h3 className="text-[19px] leading-snug">{school.school}</h3>
                        <p className="text-[14px] text-mist">{school.dates}</p>
                      </div>
                      <p className="text-[15px] leading-relaxed text-mist">{school.degree}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-8 mb-1 text-[14px] text-mist">Skills</p>
              <dl>
                {skills.map((row) => (
                  <div
                    key={row.group}
                    className="grid gap-x-6 gap-y-1 border-t border-white/[0.12] py-3 md:grid-cols-[22ch_1fr]"
                  >
                    <dt className="text-[14px] text-mist">{row.group}</dt>
                    <dd className="text-[15px] leading-relaxed">{row.items}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Zone>
      </main>
    </>
  );
}
