import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { content, type ExperienceItem } from "@/content";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        title={content.experience.heading}
      />

      <ol className="mt-10 space-y-2">
        {content.experience.items.map((item, i) => (
          <FadeIn key={item.role + item.period} delay={i * 0.06}>
            <ExperienceCard item={item} />
          </FadeIn>
        ))}
      </ol>
    </Section>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <li className="group relative grid grid-cols-[auto,1fr] gap-x-5 gap-y-3 rounded-2xl border border-transparent px-3 py-6 transition-colors duration-300 hover:border-border/60 hover:bg-subtle/30 sm:grid-cols-[56px,180px,1fr] sm:px-5">
      <div className="hidden sm:block">
        <CompanyIcon logo={item.logo} company={item.company} />
      </div>

      <div className="sm:hidden">
        <CompanyIcon logo={item.logo} company={item.company} />
      </div>

      <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted sm:pt-1">
        {item.period}
      </div>

      <div className="col-start-2 space-y-3 sm:col-start-3">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-lg font-medium tracking-tight text-foreground">
            {item.role}
          </h3>
          <span className="text-muted">·</span>
          {item.companyUrl ? (
            <Link
              href={item.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="text-base text-foreground/70 underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {item.company}
            </Link>
          ) : (
            <span className="text-base text-foreground/70">{item.company}</span>
          )}
          {item.location && (
            <span className="text-xs text-muted">{item.location}</span>
          )}
        </div>

        <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
          {item.summary}
        </p>

        {item.stack && (
          <ul className="flex flex-wrap gap-1.5 pt-1">
            {item.stack.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border/60 bg-background/40 px-2.5 py-0.5 font-mono text-[0.7rem] text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

function CompanyIcon({
  logo,
  company,
}: {
  logo: string | null;
  company: string;
}) {
  if (logo) {
    return (
      <div className="relative size-10 shrink-0 overflow-hidden rounded-xl border border-border/60 bg-white">
        <Image
          src={logo}
          alt={company}
          width={40}
          height={40}
          className="size-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-subtle/50 text-sm font-semibold text-foreground/60">
      {company[0]}
    </div>
  );
}
