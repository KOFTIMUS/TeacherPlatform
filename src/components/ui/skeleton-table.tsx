import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

export interface SkeletonTableProps extends HTMLAttributes<HTMLDivElement> {
  /** Kaç satır gösterilsin */
  rows?: number;
  /** Kaç sütun gösterilsin */
  columns?: number;
}

function SkeletonTable({
  rows = 5,
  columns = 4,
  className,
  ...props
}: SkeletonTableProps) {
  return (
    <div
      role="status"
      aria-label="Tablo yükleniyor"
      className={cn(
        "w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm",
        className
      )}
      {...props}
    >
      {/* Başlık satırı */}
      <div className="flex items-center gap-4 border-b border-border bg-muted/50 px-4 py-3">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <Skeleton
            key={colIndex}
            variant="text"
            className={cn("flex-1", colIndex === 0 && "max-w-[40%]")}
          />
        ))}
      </div>

      {/* Veri satırları */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="flex items-center gap-4 border-b border-border px-4 py-3 last:border-b-0"
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton
              key={colIndex}
              variant="text"
              className={cn(
                "flex-1",
                colIndex === 0 && "max-w-[40%]",
                colIndex === columns - 1 && "max-w-[15%]"
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export { SkeletonTable };
