import Link from "next/link";
import { GraduationCap } from "lucide-react";

import { cn } from "@/lib/utils";

type HeaderLogoProps = {
  className?: string;
  onClick?: () => void;
};

function HeaderLogo({ className, onClick }: HeaderLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex touch-target items-center gap-2 rounded-md text-foreground transition-colors duration-150 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      onClick={onClick}
    >
      <GraduationCap
        className="size-6 shrink-0 text-primary"
        aria-hidden="true"
      />
      <span className="text-lg font-semibold tracking-tight">
        Teacher Platform
      </span>
    </Link>
  );
}

export { HeaderLogo };
