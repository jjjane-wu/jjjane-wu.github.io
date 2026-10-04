import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://jjjane-wu.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/experience/", "/projects/", "/research/", "/resume/", "/contact/"].map(
    (route) => ({ url: `${base}${route}` }),
  );
}
