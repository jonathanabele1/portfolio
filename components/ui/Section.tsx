import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  id: string;
  containerSize?: "default" | "narrow" | "wide";
};

/**
 * Section wrapper that establishes consistent vertical rhythm and a
 * scroll-margin offset so the sticky navbar doesn't overlap headings.
 */
export function Section({
  id,
  className,
  children,
  containerSize = "default",
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-16 sm:py-20",
        className,
      )}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
