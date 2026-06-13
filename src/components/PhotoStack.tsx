"use client";

import { motion, type PanInfo } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Photo = { src: string; alt: string; caption: string | null };

const PHOTOS: Photo[] = [
  {
    src: "/photos/bun-1.jpg",
    alt: "Charlotte's pet bunny holding a small bunny plush",
    caption: "my pet bunny — with its bunny doll",
  },
  { src: "/photos/me-3.JPG", alt: "Charlotte", caption: null },
  { src: "/photos/me-2.jpg", alt: "Charlotte", caption: null },
  { src: "/photos/me-1.jpg", alt: "Charlotte", caption: null },
];

const SWIPE_THRESHOLD = 80;

function restingTransform(offset: number) {
  if (offset === 0) return { rotate: 0, y: 0, scale: 1 };
  const direction = offset % 2 === 1 ? -1 : 1;
  return {
    rotate: direction * (2 + offset * 0.5),
    y: offset * 3,
    scale: 1 - offset * 0.025,
  };
}

export default function PhotoStack() {
  const [stack, setStack] = useState<Photo[]>(PHOTOS);
  const top = stack[stack.length - 1];

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > SWIPE_THRESHOLD) {
      setStack((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    }
  };

  return (
    <div className="mt-10 flex flex-col items-center gap-3 lg:-ml-52 lg:mt-auto lg:pt-8">
      <div className="relative h-[267px] w-[200px]">
        {stack.map((photo, i) => {
          const isTop = i === stack.length - 1;
          const offset = stack.length - 1 - i;
          return (
            <motion.div
              key={photo.src}
              className="absolute inset-0 overflow-hidden rounded-lg bg-card shadow-lg ring-1 ring-black/5"
              style={{
                zIndex: i,
                transformOrigin: "bottom center",
                cursor: isTop ? "grab" : "default",
              }}
              animate={restingTransform(offset)}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={isTop ? handleDragEnd : undefined}
              whileTap={isTop ? { cursor: "grabbing" } : undefined}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="200px"
                className="select-none object-cover"
                draggable={false}
                priority={isTop}
              />
            </motion.div>
          );
        })}
      </div>

      <p
        className="min-h-4 max-w-[220px] text-center font-serif text-xs italic leading-snug text-muted-foreground"
        aria-live="polite"
      >
        {top?.caption ?? " "}
      </p>
    </div>
  );
}
