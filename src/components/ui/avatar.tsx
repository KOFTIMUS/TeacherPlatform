import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes, ImgHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-muted font-medium text-foreground-muted",
  {
    variants: {
      size: {
        xs: "size-6 text-xs",
        sm: "size-8 text-xs",
        default: "size-10 text-sm",
        lg: "size-12 text-base",
        xl: "size-16 text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface AvatarProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
  status?: "online" | "offline";
  imgProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function Avatar({
  className,
  size,
  src,
  alt = "",
  fallback,
  status,
  imgProps,
  children,
  ...props
}: AvatarProps) {
  const initials = fallback ? getInitials(fallback) : null;

  return (
    <div
      data-slot="avatar"
      className={cn(avatarVariants({ size, className }))}
      {...props}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="size-full object-cover"
          {...imgProps}
        />
      ) : (
        <span aria-hidden={!!initials}>{initials ?? children}</span>
      )}
      {status ? (
        <span
          className={cn(
            "absolute right-0 bottom-0 size-2 rounded-full border-2 border-background",
            status === "online" ? "bg-success" : "bg-foreground-subtle",
          )}
          aria-label={status === "online" ? "Çevrimiçi" : "Çevrimdışı"}
        />
      ) : null}
    </div>
  );
}

export { Avatar, avatarVariants };
