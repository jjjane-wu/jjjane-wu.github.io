import Link from "next/link";

export default function NotFound() {
  return (
    <main className="gutter py-24">
      <p className="label text-mute">(404)</p>
      <h1 className="poster mt-2">Not found</h1>
      <p className="mt-8 font-serif text-[clamp(22px,2.4vw,36px)]">
        That page doesn&apos;t exist.{" "}
        <Link href="/" className="underline underline-offset-4">
          Back to the start
        </Link>
        .
      </p>
    </main>
  );
}
