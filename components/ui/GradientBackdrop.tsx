import { cn } from "@/lib/utils";

/**
 * Soft layered gradient/glow used behind hero-style sections.
 * Purely decorative — sits below content with pointer-events: none.
 */
export function GradientBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
      <div className="absolute left-[-10%] top-[40%] h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[120px]" />
    </div>
  );
}
