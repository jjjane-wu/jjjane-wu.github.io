import type { Metadata } from "next";
import { PageHeader, Row } from "@/components/ui";
import { profile } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email, LinkedIn and GitHub for Jane Wu.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        index="05"
        title="Contact"
        lede="Email is the fastest way to reach me."
        tape={{ right: "6%", top: "28%", width: "28%", height: "40%", transform: "rotate(-9deg)" }}
      />
      <Row href={`mailto:${profile.email}`} index="01" title={profile.email} aside="Email" />
      <Row href={profile.linkedin} index="02" title="janewu-zichu-wu" aside="LinkedIn ↗" />
      <Row href={profile.github} index="03" title="jjjane-wu" aside="GitHub ↗" />
    </main>
  );
}
