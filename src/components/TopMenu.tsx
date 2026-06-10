"use client";

import Link from "next/link";
import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/utils";

const NAV = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
];

export default function TopMenu() {
  const active = useActiveSection(NAV.map((n) => n.id));

  return (
    <nav className="flex items-center gap-1 text-xs font-medium uppercase tracking-[0.15em] sm:gap-2">
      {NAV.map(({ id, label }) => (
        <Link
          key={id}
          href={`#${id}`}
          className={cn(
            "rounded px-2 py-1 transition-colors",
            active === id
              ? "text-[hsl(var(--highlight))]"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
