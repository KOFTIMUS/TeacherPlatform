import { AlertCircle, RefreshCcw } from "lucide-react";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";
import { Button } from "./button";

export interface ErrorStateProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

function ErrorState({
  title = "Bir şeyler yanlış gitti",
  description = "İstediğiniz bilgileri yüklerken bir sorun oluştu. Lütfen tekrar deneyin.",
  onRetry,
  className,
  ...props
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        "flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 p-8 text-center",
        className
      )}
      {...props}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
        <AlertCircle className="h-6 w-6" />
      </div>
      
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      
      <p className="mt-2 max-w-sm text-sm text-foreground-muted">
        {description}
      </p>

      {onRetry && (
        <Button
          variant="outline"
          size="sm"
          onClick={onRetry}
          className="mt-6 gap-2"
        >
          <RefreshCcw className="h-4 w-4" />
          Tekrar Dene
        </Button>
      )}
    </div>
  );
}

export { ErrorState };
