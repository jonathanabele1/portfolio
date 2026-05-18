"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { content } from "@/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      style={{ opacity: 0 }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6"
    >
      <nav
        className={cn(
          "flex w-full max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ease-out-expo sm:px-5",
          scrolled
            ? "glass shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]"
            : "border border-transparent bg-transparent",
        )}
      >
        <Link
          href="#top"
          className="group flex items-center gap-2 text-sm font-medium tracking-tight"
        >
          <span
            aria-hidden
            className="inline-block size-1.5 rounded-full bg-accent shadow-[0_0_12px] shadow-accent/60 transition-transform group-hover:scale-125"
          />
          <span className="text-foreground/90 transition-colors group-hover:text-foreground">
            {content.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {content.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors duration-300 hover:bg-subtle/60 hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          {content.resumePath && (
            <Link
              href={content.resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-sm text-muted transition-colors duration-300 hover:bg-subtle/60 hover:text-foreground"
            >
              Resume
              <ArrowUpRight />
            </Link>
          )}
          <Link
            href="#contact"
            className="inline-flex h-9 items-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-all duration-300 hover:bg-foreground/90 active:scale-[0.98]"
          >
            Get in touch
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex size-9 items-center justify-center rounded-full border border-border/60 text-foreground/80 transition-colors hover:bg-subtle/60"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <MenuIcon open={open} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 -z-10 bg-background/80 backdrop-blur-xl md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-28 flex flex-col items-center gap-2 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {content.nav.map((item) => (
                <li key={item.href} className="w-full">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl border border-border/50 bg-subtle/40 px-5 py-4 text-center text-base text-foreground/90 transition-colors hover:bg-subtle/70"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {content.resumePath && (
                <li className="w-full">
                  <Link
                    href={content.resumePath}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-1.5 rounded-2xl border border-border/50 bg-subtle/40 px-5 py-4 text-center text-base text-foreground/90 transition-colors hover:bg-subtle/70"
                  >
                    Resume
                    <ArrowUpRight />
                  </Link>
                </li>
              )}
              <li className="mt-4 w-full">
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl bg-foreground px-5 py-4 text-center text-base font-medium text-background"
                >
                  Get in touch
                </Link>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function ArrowUpRight() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M3 9L9 3M9 3H4M9 3V8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <motion.path
        d="M1 4H13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        animate={open ? { d: "M2 2L12 12" } : { d: "M1 4H13" }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.path
        d="M1 10H13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        animate={open ? { d: "M2 12L12 2", opacity: 1 } : { d: "M1 10H13", opacity: 1 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
