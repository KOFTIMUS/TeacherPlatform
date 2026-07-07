import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

export interface SkeletonCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Kaç adet kart render edilsin */
  count?: number;
}

function SkeletonCard({ count = 3, className, ...props }: SkeletonCardProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          role="status"
          aria-label="İçerik yükleniyor"
          className={cn(
            "flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm",
            className
          )}
          {...props}
        >
          {/* Üst satır: avatar + başlık */}
          <div className="flex items-center gap-3">
            <Skeleton variant="circular" className="h-10 w-10" />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton variant="text" className="w-3/4" />
              <Skeleton variant="text" className="w-1/2" />
            </div>
          </div>

          {/* Açıklama satırları */}
          <div className="flex flex-col gap-2">
            <Skeleton variant="text" />
            <Skeleton variant="text" className="w-5/6" />
            <Skeleton variant="text" className="w-4/6" />
          </div>

          {/* Alt aksiyon alanı */}
          <div className="mt-2 flex items-center justify-between">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-8 w-24 rounded-md" />
          </div>
        </div>
      ))}
    </>
  );
}

export { SkeletonCard };
