import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { GradientBackdrop } from "@/components/ui/GradientBackdrop";
import { content } from "@/content";

export function Contact() {
  return (
    <Section id="contact" containerSize="narrow" className="relative isolate">
      <GradientBackdrop className="opacity-60" />

      <FadeIn className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-display-md text-balance gradient-text">
          {content.contact.heading}
        </h2>

        <p className="max-w-xl text-pretty text-base text-muted sm:text-lg">
          {content.contact.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button href={`mailto:${content.email}`} variant="primary">
            {content.email}
          </Button>
          {content.resumePath && (
            <Button
              href={content.resumePath}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              View resume
            </Button>
          )}
        </div>

        <Link
          href={content.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="mt-2 text-sm text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          or connect on LinkedIn
        </Link>
      </FadeIn>
    </Section>
  );
}
