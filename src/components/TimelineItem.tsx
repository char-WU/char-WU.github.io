import Link from "next/link";
import { Badge } from "./ui/Badge";

export interface ExperienceItem {
  name: string;
  href?: string;
  title?: string;
  location?: string;
  start: string;
  end?: string;
  description?: string[];
  tags?: string[];
}

interface Props {
  item: ExperienceItem;
}

export default function TimelineItem({ item }: Props) {
  const { name, href, title, location, start, end, description, tags } = item;
  const heading = (
    <span className="font-semibold text-foreground">{name}</span>
  );

  return (
    <li className="relative pl-6 pb-8 last:pb-0">
      <span className="absolute left-0 top-1.5 size-3 -translate-x-[6.5px] rounded-full border-2 border-[hsl(var(--accent-soft))] bg-background" />
      <div className="flex flex-col gap-1">
        <time className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {start} — {end ?? "Present"}
        </time>
        <h3 className="text-base">
          {href ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {heading}
            </Link>
          ) : (
            heading
          )}
          {location && (
            <span className="ml-2 text-xs font-normal text-muted-foreground">
              · {location}
            </span>
          )}
        </h3>
        {title && (
          <p className="text-sm italic text-muted-foreground">{title}</p>
        )}
        {description && description.length > 0 && (
          <ul className="mt-2 ml-4 list-outside list-disc text-sm leading-relaxed text-foreground/80">
            {description.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
