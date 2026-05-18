import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { content } from "@/content";

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-border/60 py-10">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 text-sm text-muted">
          <span className="inline-block size-1.5 rounded-full bg-accent/80" />
          <span>
            © {new Date().getFullYear()} {content.name}
          </span>
        </div>

        <div className="flex items-center gap-5 text-sm text-muted">
          <Link
            href={content.social.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href={content.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </Link>
          {content.resumePath && (
            <Link
              href={content.resumePath}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Resume
            </Link>
          )}
        </div>
      </Container>
    </footer>
  );
}
