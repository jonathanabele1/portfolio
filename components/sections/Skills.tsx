import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { content } from "@/content";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title={content.skills.heading}
      />

      <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
        {content.skills.groups.map((group, i) => (
          <FadeIn
            key={group.label}
            delay={i * 0.05}
            className="bg-subtle/30 p-6 backdrop-blur"
          >
            <div className="flex h-full flex-col gap-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border/60 bg-background/40 px-3 py-1 text-sm text-foreground/85 transition-colors hover:border-border hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
