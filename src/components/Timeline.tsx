import TimelineItem, { ExperienceItem } from "./TimelineItem";

interface Props {
  items: ExperienceItem[];
}

export default function Timeline({ items }: Props) {
  return (
    <ol className="relative ml-2 border-l border-border">
      {items.map((item, i) => (
        <TimelineItem key={i} item={item} />
      ))}
    </ol>
  );
}
