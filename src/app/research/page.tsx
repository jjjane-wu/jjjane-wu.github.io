import type { Metadata } from "next";
import { Entry, PageHeader, Row, SectionHead } from "@/components/ui";
import { industryResearch, research } from "@/content/site";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Model studies in generative models, computer vision and speech, plus applied research from industry.",
};

export default function ResearchPage() {
  return (
    <main>
      <PageHeader
        index="03"
        title="Research"
        lede="Model studies and technical work: diffusion, face verification, speech recognition, and applied research from industry."
        tape={{ left: "30%", top: "34%", width: "34%", height: "36%", transform: "rotate(-6deg)" }}
      />
      {research.map((study, i) => (
        <Entry
          key={study.slug}
          id={study.slug}
          index={`0${i + 1} · ${study.area}`}
          title={study.title}
          subtitle={study.context}
          meta={[]}
          tags={study.tags}
          links={study.links}
          bullets={study.bullets}
        />
      ))}

      <SectionHead index="04" title="Applied, in industry" />
      {industryResearch.map((item, i) => (
        <Row
          key={item.href}
          href={item.href}
          index={`0${i + 1}`}
          title={item.title}
          aside={
            <>
              {item.where}
              <br />
              See experience →
            </>
          }
        />
      ))}
    </main>
  );
}
