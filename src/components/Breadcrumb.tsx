"use client";

import { useActiveSection } from "@/lib/useActiveSection";

const SECTION_IDS = ["about", "experience", "projects"];

export default function Breadcrumb() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <div className="font-mono text-sm text-muted-foreground">
      <span className="text-[hsl(var(--highlight))]">~</span>
      <span className="mx-2 text-foreground/40">/</span>
      <span className="inline-block text-[hsl(var(--highlight))]">
        {active}
      </span>
      <span className="breadcrumb-cursor ml-1 inline-block text-[hsl(var(--highlight))]">
        _
      </span>
    </div>
  );
}
