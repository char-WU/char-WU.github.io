"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useActiveSection } from "@/lib/useActiveSection";

const SECTION_IDS = ["about", "experience", "projects"];

export default function Breadcrumb() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <div className="font-mono text-sm text-muted-foreground">
      <span className="text-foreground/70">~</span>
      <span className="mx-2 text-foreground/40">/</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={active}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.18 }}
          className="inline-block text-[hsl(var(--highlight))]"
        >
          {active}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 1.4, repeat: Infinity }}
        className="ml-1 inline-block text-foreground/60"
      >
        _
      </motion.span>
    </div>
  );
}
