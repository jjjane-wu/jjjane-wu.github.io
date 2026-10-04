import type { Metadata } from "next";
import { Entry, PageHeader } from "@/components/ui";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A production movie recommender, a track-record analyzer for private-equity due diligence, and forecasting projects.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader
        index="02"
        title="Projects"
        lede="Systems that run: a recommender in production, a due-diligence data product, and two forecasting projects."
        tape={{ right: "22%", top: "-6%", width: "9%", height: "118%", transform: "rotate(11deg)" }}
      />
      {projects.map((project, i) => (
        <Entry
          key={project.slug}
          id={project.slug}
          index={`0${i + 1} · ${project.area}`}
          title={project.title}
          subtitle={project.context}
          meta={[]}
          tags={project.tags}
          links={project.links}
          bullets={project.bullets}
        />
      ))}
    </main>
  );
}
