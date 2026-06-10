"use client";

import Link from "next/link";
import { IconFileDownload } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/lib/useActiveSection";
import Socials from "./Socials";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function Sidebar() {
  const active = useActiveSection(sections.map((s) => s.id));

  return (
    <aside className="pt-16 pb-12 lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:w-full lg:flex-col lg:justify-between lg:py-24">
      <div className="flex flex-col">
        <h1 className="title text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
          Charlotte Wu
        </h1>
        <h2 className="mt-3 text-lg font-medium text-foreground/80">
          MSc Computer Science @ The University of Edinburgh
        </h2>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
          ML and NLP. Currently working on AI-assisted
          knowledge retrieval.
        </p>

        <nav aria-label="Sections" className="mt-16 hidden lg:block">
          <ul className="flex flex-col gap-3">
            {sections.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="group flex items-center gap-4 py-1"
                  >
                    <span
                      className={cn(
                        "h-px bg-muted-foreground/50 transition-all duration-300",
                        isActive
                          ? "w-16 bg-[hsl(var(--highlight))]"
                          : "w-8 group-hover:w-12 group-hover:bg-foreground",
                      )}
                    />
                    <span
                      className={cn(
                        "text-xs font-medium uppercase tracking-[0.15em] transition-colors",
                        isActive
                          ? "font-semibold text-[hsl(var(--highlight))]"
                          : "text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-6 lg:mt-0">
        <Link
          href="/resume.pdf"
          target="_blank"
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium transition-all hover:border-[hsl(var(--highlight))] hover:text-[hsl(var(--highlight))]"
        >
          CV
          <IconFileDownload className="size-4 transition-transform group-hover:translate-y-0.5" stroke={1.75} />
        </Link>
        <Socials />
      </div>
    </aside>
  );
}
