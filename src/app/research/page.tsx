import type { Metadata } from "next";
import { Entry, PageHeader, Row, SectionHead, Zone } from "@/components/ui";
import { industryResearch, research } from "@/content/site";
import { FLOOR } from "@/lib/depth";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Model studies in generative models, computer vision and speech, plus applied research from industry.",
};

const step = FLOOR / (research.length + 1);

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research"
        lede="Model studies and technical work: diffusion, face verification, speech recognition, and applied research from industry."
      />
      <main>
        {research.map((study, i) => (
          <Zone key={study.slug} id={study.slug} from={step * i} to={step * (i + 1)}>
            <Entry
              title={study.title}
              subtitle={study.context}
              meta={[study.area]}
              tags={study.tags}
              links={study.links}
              bullets={study.bullets}
            />
          </Zone>
        ))}

        <Zone from={step * research.length} to={FLOOR}>
          <SectionHead title="Applied, in industry" />
          <ul>
            {industryResearch.map((item) => (
              <Row key={item.href} href={item.href} title={item.title} aside={`${item.where} · see experience →`} />
            ))}
          </ul>
        </Zone>
      </main>
    </>
  );
}
