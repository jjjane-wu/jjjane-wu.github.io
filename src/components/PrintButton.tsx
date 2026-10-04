"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="label cursor-pointer border-[1.5px] border-ink px-4 py-2 hover:bg-ink hover:text-paper"
    >
      Print
    </button>
  );
}
