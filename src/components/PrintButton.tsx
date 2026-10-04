"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="cursor-pointer rounded-full border border-white/30 px-4 py-1.5 text-[14px] transition-colors hover:bg-white/10"
    >
      Print
    </button>
  );
}
