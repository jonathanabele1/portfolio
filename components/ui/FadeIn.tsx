"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeInProps = MotionProps & {
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function FadeIn({
  className,
  delay = 0,
  y = 14,
  once = true,
  children,
  ...rest
}: FadeInProps) {
  return (
    <motion.div
      style={{ opacity: 0, y }}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-40px 0px -40px 0px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
