import { cn } from "@/lib/utils";
import { FadeIn } from "./FadeIn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          <span className="h-px w-6 bg-border" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-display-md text-balance gradient-text">{title}</h2>
      {description && (
        <p className="max-w-2xl text-pretty text-base text-muted sm:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
