import socialsData from "@/data/socials.json";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMailFilled,
} from "@tabler/icons-react";

const iconMap = {
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  mail: IconMailFilled,
} as const;

type IconName = keyof typeof iconMap;

export default function Socials() {
  return (
    <ul className="flex items-center gap-4">
      {socialsData.socials.map((item) => {
        const Icon = iconMap[item.icon as IconName] ?? IconMailFilled;
        return (
          <li key={item.name} className="flex">
            <a
              href={item.href}
              target={item.icon === "mail" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={item.name}
              className="inline-flex size-6 items-center justify-center text-foreground/80 transition-all hover:-translate-y-0.5 hover:text-[hsl(var(--highlight))]"
            >
              <Icon className="size-[22px]" stroke={1.75} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
