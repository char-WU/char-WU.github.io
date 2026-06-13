import Image from "next/image";
import Link from "next/link";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconExternalLink,
  IconPlayerPlay,
} from "@tabler/icons-react";
import { Badge } from "./ui/Badge";

export interface ProjectLink {
  name: string;
  href: string;
  icon: "globe" | "github" | "video";
}

export interface Project {
  name: string;
  description: string;
  context?: string;
  date?: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
  links?: ProjectLink[];
}

interface Props {
  project: Project;
}

const linkIconMap = {
  github: IconBrandGithub,
  globe: IconExternalLink,
  video: IconPlayerPlay,
} as const;

export default function ProjectCard({ project }: Props) {
  const { name, description, href, image, imageAlt, tags, links } = project;

  return (
    <article className="group relative rounded-lg border border-transparent p-5 transition-all hover:border-border hover:bg-card hover:shadow-sm">
      <div
        className={
          image
            ? "grid gap-5 sm:grid-cols-[minmax(0,1fr)_15rem] sm:items-start"
            : undefined
        }
      >
        <div>
          <h3 className="text-lg font-semibold">
            {href ? (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 transition-colors group-hover:text-[hsl(var(--highlight))]"
              >
                {name}
                <IconArrowUpRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  stroke={1.75}
                />
              </Link>
            ) : (
              name
            )}
          </h3>

          {description && (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}

          {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          )}

          {links && links.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {links.map((l) => {
                const Icon = linkIconMap[l.icon] ?? IconExternalLink;
                return (
                  <Link
                    key={l.name}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-[hsl(var(--muted-foreground))]/10 px-2.5 py-1.5 text-xs font-medium text-[hsl(var(--muted-foreground))] transition-all hover:-translate-y-0.5 hover:bg-[hsl(var(--muted-foreground))]/15"
                  >
                    <Icon className="size-3.5" stroke={1.75} />
                    <span>{l.name}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {image && (
          <div className="order-first overflow-hidden rounded-md sm:order-last">
            <Image
              src={image}
              alt={imageAlt ?? ""}
              width={1536}
              height={1024}
              className="aspect-video w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        )}
      </div>
    </article>
  );
}
