import type { Metadata } from "next";
import { Entry, PageHeader, Zone } from "@/components/ui";
import { projects } from "@/content/site";
import { FLOOR } from "@/lib/depth";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A production movie recommender, a track-record analyzer for private-equity due diligence, and forecasting projects.",
};

const step = FLOOR / projects.length;

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        lede="Systems that run: a recommender in production, a due-diligence data product, and two forecasting projects."
      />
      <main>
        {projects.map((project, i) => (
          <Zone key={project.slug} id={project.slug} from={step * i} to={step * (i + 1)}>
            <Entry
              title={project.title}
              subtitle={project.context}
              meta={[project.area]}
              tags={project.tags}
              links={project.links}
              note={project.note}
              bullets={project.bullets}
            />
          </Zone>
        ))}
      </main>
    </>
  );
}
