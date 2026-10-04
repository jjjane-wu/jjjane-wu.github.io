import type { Metadata } from "next";
import { PageHeader, Row, Zone } from "@/components/ui";
import { profile } from "@/content/site";
import { FLOOR } from "@/lib/depth";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email, LinkedIn and GitHub for Jane Wu.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" lede="Email is the fastest way to reach me." />
      <main>
        <Zone from={0} to={FLOOR}>
          <ul>
            <Row href={`mailto:${profile.email}`} title={profile.email} aside="Email" />
            <Row href={profile.linkedin} title="janewu-zichu-wu" aside="LinkedIn ↗" />
            <Row href={profile.github} title="jjjane-wu" aside="GitHub ↗" />
          </ul>
        </Zone>
      </main>
    </>
  );
}
