import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const containerVariants = cva("container-app mx-auto w-full", {
  variants: {
    size: {
      sm: "container-sm",
      md: "container-md",
      lg: "container-lg",
      xl: "container-xl",
      "2xl": "container-2xl",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    size: "xl",
  },
});

export interface ContainerProps
  extends
    HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

function Container({ className, size, ...props }: ContainerProps) {
  return (
    <div
      data-slot="container"
      className={cn(containerVariants({ size, className }))}
      {...props}
    />
  );
}

export { Container, containerVariants };
