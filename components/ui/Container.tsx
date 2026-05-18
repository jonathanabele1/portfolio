import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: React.ElementType;
  size?: "default" | "narrow" | "wide";
};

const sizes = {
  narrow: "max-w-5xl",
  default: "max-w-7xl",
  wide: "max-w-[1440px]",
} as const;

export function Container({
  as: Tag = "div",
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full px-6 sm:px-8", sizes[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
