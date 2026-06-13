"use client";

import Link from "next/link";
import { IconFileDownload } from "@tabler/icons-react";
import PhotoStack from "./PhotoStack";
import Socials from "./Socials";

export default function Sidebar() {
  return (
    <aside className="flex flex-col pb-12 pt-8 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:max-h-[calc(100vh-4rem)] lg:w-full lg:pb-8 lg:pt-8">
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
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6">
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

      <PhotoStack />
    </aside>
  );
}
