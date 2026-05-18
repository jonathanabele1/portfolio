import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_8px_24px_-12px_rgba(255,255,255,0.25)]",
  secondary:
    "bg-subtle/80 text-foreground border border-border/80 hover:bg-subtle hover:border-border",
  ghost: "text-foreground/80 hover:text-foreground hover:bg-subtle/60",
};

const base =
  "group inline-flex h-10 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium tracking-tight transition-all duration-300 ease-out-expo will-change-transform active:scale-[0.98] focus-visible:outline-none";

type ButtonAsButton = {
  href?: undefined;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsLink = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">;

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const variant: Variant = props.variant ?? "primary";
  const classes = cn(base, styles[variant], props.className);

  if (props.href !== undefined) {
    const { href, variant: _v, className: _c, children, ...rest } = props;
    void _v;
    void _c;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, className: _c, children, href: _h, ...rest } = props;
  void _v;
  void _c;
  void _h;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
