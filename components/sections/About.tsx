"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { content } from "@/content";

export function About() {
  return (
    <Section id="about" className="pt-28 sm:pt-32">
      <div className="grid items-start gap-10 lg:grid-cols-[auto,1fr]">
        <div className="flex justify-center lg:justify-start">
          <div className="relative animate-fade-up [animation-delay:200ms] [animation-fill-mode:backwards]">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-3xl bg-accent/15 blur-2xl"
            />
            <Image
              src={content.headshot}
              alt={content.name}
              width={240}
              height={240}
              priority
              className="relative rounded-2xl border border-border/60 object-cover shadow-2xl"
            />
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeading title={content.about.heading} />

          <div className="grid gap-8 lg:grid-cols-[1fr,auto]">
            <FadeIn
              className="space-y-5 text-base leading-relaxed text-muted sm:text-lg"
              delay={0.1}
            >
              {content.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </FadeIn>

            <FadeIn className="lg:w-64" delay={0.18}>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl border border-border/60 bg-subtle/30 p-6 backdrop-blur sm:grid-cols-1">
                {content.about.meta.map((m) => (
                  <Meta key={m.label} label={m.label} value={m.value} />
                ))}
              </dl>
            </FadeIn>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
        {label}
      </dt>
      <dd className="text-sm text-foreground/90">{value}</dd>
    </div>
  );
}
