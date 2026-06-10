import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium",
        variant === "default" &&
          "bg-[hsl(var(--tag))]/10 text-[hsl(var(--tag))]",
        variant === "outline" &&
          "border border-border bg-card text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
