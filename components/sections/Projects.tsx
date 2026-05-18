"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { content } from "@/content";
import { cn } from "@/lib/utils";

export function Projects() {
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  return (
    <Section id="projects">
      <SectionHeading title="Projects" />

      <div className="mt-10 space-y-12">
        <ProjectGroup
          label={content.personalProjects.heading}
          description={content.personalProjects.description}
          items={content.personalProjects.items.map((p) => ({
            ...p,
            award: null,
            images: [],
            details: null,
          }))}
          showGithub
          onOpenDetail={setModalProject}
        />

        <ProjectGroup
          label={content.workProjects.heading}
          description={content.workProjects.description}
          items={content.workProjects.items}
          onOpenDetail={setModalProject}
        />
      </div>

      <AnimatePresence>
        {modalProject?.details && (
          <ProjectModal
            project={modalProject}
            onClose={() => setModalProject(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}

type ProjectItem = {
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly year: string;
  readonly href: string | undefined;
  readonly award: string | null;
  readonly images: readonly string[];
  readonly details: {
    readonly subtitle: string;
    readonly highlights: readonly string[];
  } | null;
};

function ProjectGroup({
  label,
  description,
  items,
  showGithub = false,
  onOpenDetail,
}: {
  label: string;
  description: string;
  items: readonly ProjectItem[];
  showGithub?: boolean;
  onOpenDetail: (p: ProjectItem) => void;
}) {
  return (
    <div>
      <FadeIn>
        <div className="mb-6 flex items-center gap-3">
          <h3 className="text-sm font-medium text-foreground/80">{label}</h3>
          <span className="h-px flex-1 bg-border/60" />
          {description && (
            <span className="text-xs text-muted">{description}</span>
          )}
        </div>
      </FadeIn>

      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((p, i) => (
          <FadeIn
            key={p.title}
            delay={i * 0.05}
            className={p.award ? "sm:col-span-2" : ""}
          >
            <ProjectCard
              project={p}
              showGithub={showGithub}
              onOpenDetail={onOpenDetail}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project: p,
  showGithub,
  onOpenDetail,
}: {
  project: ProjectItem;
  showGithub?: boolean;
  onOpenDetail: (p: ProjectItem) => void;
}) {
  const isFeatured = !!p.award;
  const hasDetails = !!p.details;

  const cardClass = cn(
    "group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border bg-subtle/30 p-6 transition-all duration-500 ease-out-expo",
    isFeatured
      ? "border-accent/40 hover:border-accent/60"
      : "border-border/60 hover:border-border",
    "hover:bg-subtle/60",
    "hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)]",
    hasDetails && "cursor-pointer",
  );

  const handleClick = () => {
    if (hasDetails) onOpenDetail(p);
  };

  const body = (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: isFeatured
            ? "radial-gradient(600px circle at 50% 0%, hsl(var(--accent) / 0.15), transparent 50%)"
            : "radial-gradient(400px circle at 50% 0%, hsl(var(--accent) / 0.10), transparent 40%)",
        }}
      />

      {p.award && (
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
            <TrophyIcon />
            {p.award}
          </span>
        </div>
      )}

      <header className="flex items-baseline justify-between gap-4">
        <h3
          className={cn(
            "text-balance text-foreground",
            isFeatured ? "text-display-lg" : "text-display-md",
          )}
        >
          {p.title}
        </h3>
        <span className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {p.year}
        </span>
      </header>

      <p
        className={cn(
          "text-pretty leading-relaxed text-muted",
          isFeatured ? "text-base sm:text-lg" : "text-sm sm:text-base",
        )}
      >
        {p.description}
      </p>

      <footer className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
        <ul className="flex flex-wrap gap-1.5">
          {p.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border/60 bg-background/40 px-2.5 py-0.5 font-mono text-[0.7rem] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {p.href && (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors group-hover:text-foreground">
              {showGithub ? "GitHub" : "Visit"}
              <ArrowUpRight />
            </span>
          )}
          {hasDetails && (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors group-hover:text-foreground">
              Details
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          )}
        </div>
      </footer>
    </>
  );

  if (p.href && !hasDetails) {
    return (
      <Link href={p.href} target="_blank" rel="noreferrer" className={cardClass}>
        {body}
      </Link>
    );
  }

  return (
    <div className={cardClass} onClick={handleClick}>
      {body}
    </div>
  );
}

function ProjectModal({
  project: p,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  const details = p.details!;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border/60 bg-subtle/80 p-6 shadow-2xl backdrop-blur-xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-subtle hover:text-foreground"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>

        {p.award && (
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
              <TrophyIcon />
              {p.award}
            </span>
          </div>
        )}

        <header className="mb-2 flex items-baseline justify-between gap-4">
          <h3 className="text-display-lg text-foreground">{p.title}</h3>
          <span className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-muted">
            {p.year}
          </span>
        </header>

        {"subtitleUrl" in details && details.subtitleUrl ? (
          <a
            href={details.subtitleUrl as string}
            target="_blank"
            rel="noreferrer"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent underline-offset-4 transition-colors hover:underline"
          >
            {details.subtitle}
            <ArrowUpRight />
          </a>
        ) : (
          <p className="mb-6 text-sm font-medium text-accent">
            {details.subtitle}
          </p>
        )}

        <p className="mb-8 text-pretty text-base leading-relaxed text-muted">
          {p.description}
        </p>

        {p.images.length > 0 && (
          <div className="mb-8">
            <ImageCarousel images={[...p.images]} alt={p.title} />
          </div>
        )}

        <ul className="mb-8 space-y-3">
          {details.highlights.map((h, i) => (
            <li
              key={i}
              className="flex gap-2.5 text-sm leading-relaxed text-muted"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent/60" />
              {h}
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-1.5">
          {p.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border/60 bg-background/40 px-2.5 py-0.5 font-mono text-[0.7rem] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const paused = useRef(false);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const advance = useCallback(() => {
    goTo((current + 1) % images.length, 1);
  }, [current, images.length, goTo]);

  useEffect(() => {
    if (images.length <= 1) return;

    const tick = () => {
      if (!paused.current) advance();
      timeoutRef.current = setTimeout(tick, 4000);
    };
    timeoutRef.current = setTimeout(tick, 4000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [advance, images.length]);

  const go = (index: number, dir: number) => {
    goTo(index, dir);
    paused.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      paused.current = false;
    }, 8000);
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-border/40">
      <div className="relative aspect-[16/9]">
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: direction > 0 ? "-100%" : "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`${alt} — screenshot ${current + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={() => go((current - 1 + images.length) % images.length, -1)}
            className="absolute left-3 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-white/40 transition-colors hover:text-white/80"
            aria-label="Previous image"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => go((current + 1) % images.length, 1)}
            className="absolute right-3 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-white/40 transition-colors hover:text-white/80"
            aria-label="Next image"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > current ? 1 : -1)}
                aria-label={`Go to image ${i + 1}`}
                className={cn(
                  "rounded-full transition-all duration-300",
                  i === current
                    ? "size-1.5 bg-white/80"
                    : "size-1.5 bg-white/25 hover:bg-white/50",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function TrophyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden className="text-amber-400">
      <path d="M4 2H12V6C12 8.2 10.2 10 8 10C5.8 10 4 8.2 4 6V2Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3H13.5C14.3 3 15 3.7 15 4.5C15 5.3 14.3 6 13.5 6H12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 3H2.5C1.7 3 1 3.7 1 4.5C1 5.3 1.7 6 2.5 6H4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 14H10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M8 10V14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden>
      <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
