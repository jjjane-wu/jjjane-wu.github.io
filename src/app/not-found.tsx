import Link from "next/link";
import { Surface } from "@/components/ui";

export default function NotFound() {
  return (
    <Surface className="pt-32 pb-16">
      <h1 className="text-[clamp(34px,4.2vw,48px)] leading-tight">Page not found</h1>
      <p className="mt-3 text-[17px] text-kelp">
        That page doesn&apos;t exist.{" "}
        <Link href="/" className="underline underline-offset-4">
          Back to the start
        </Link>
        .
      </p>
    </Surface>
  );
}
