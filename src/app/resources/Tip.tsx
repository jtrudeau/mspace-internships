import type { ReactNode } from "react";

export default function Tip({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-4 border-2 border-[var(--ink)] bg-[var(--mint)] p-4">
      <p className="text-sm font-black uppercase tracking-[0.08em] text-[var(--teal-deep)]">{title}</p>
      <div className="mt-2 text-base font-semibold leading-relaxed">{children}</div>
    </div>
  );
}
