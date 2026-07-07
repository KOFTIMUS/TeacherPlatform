import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    spacing: {
      none: "",
      compact: "py-8 md:py-12",
      default: "py-12 md:py-16",
      loose: "py-16 md:py-24",
    },
    background: {
      default: "bg-background",
      subtle: "bg-background-subtle",
    },
  },
  defaultVariants: {
    spacing: "default",
    background: "default",
  },
});

export interface SectionProps
  extends HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {}

function Section({ className, spacing, background, ...props }: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ spacing, background, className }))}
      {...props}
    />
  );
}

export { Section, sectionVariants };
