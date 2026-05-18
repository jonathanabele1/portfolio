import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { content, type EducationItem } from "@/content";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        title={content.education.heading}
      />

      <div className="mt-10 space-y-4">
        {content.education.items.map((item, i) => (
          <FadeIn key={item.school} delay={i * 0.06}>
            <EducationCard item={item} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function EducationCard({ item }: { item: EducationItem }) {
  return (
    <div className="group relative grid grid-cols-[auto,1fr] gap-x-5 gap-y-4 rounded-2xl border border-border/60 bg-subtle/30 px-5 py-7 backdrop-blur transition-colors duration-300 hover:border-border hover:bg-subtle/50 sm:grid-cols-[56px,1fr]">
      <SchoolIcon logo={item.logo} school={item.school} />

      <div className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            {item.schoolUrl ? (
              <Link
                href={item.schoolUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xl font-medium tracking-tight text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {item.school}
              </Link>
            ) : (
              <h3 className="text-xl font-medium tracking-tight text-foreground">
                {item.school}
              </h3>
            )}
            {item.location && (
              <span className="text-xs text-muted">{item.location}</span>
            )}
          </div>
          <span className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {item.period}
          </span>
        </div>

        <div className="space-y-1">
          <p className="text-base text-foreground/85">
            {item.degree} in {item.major}
          </p>
          {item.minor && (
            <p className="text-sm text-muted">Minor in {item.minor}</p>
          )}
        </div>

        {item.honors.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {item.honors.map((h) => (
              <li
                key={h}
                className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-sm text-accent"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path
                    d="M5 0.5L6.1 3.8H9.5L6.7 5.9L7.8 9.2L5 7.1L2.2 9.2L3.3 5.9L0.5 3.8H3.9L5 0.5Z"
                    fill="currentColor"
                    fillOpacity="0.6"
                  />
                </svg>
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function SchoolIcon({
  logo,
  school,
}: {
  logo: string | null;
  school: string;
}) {
  if (logo) {
    return (
      <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-white">
        <Image
          src={logo}
          alt={school}
          width={96}
          height={96}
          className="size-9 object-contain"
        />
      </div>
    );
  }

  return (
    <div className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-subtle/50 text-sm font-semibold text-foreground/60">
      {school[0]}
    </div>
  );
}
