import { AlertCircle, CheckCircle2, X } from "lucide-react";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type FormFeedbackVariant = "success" | "error";

export interface FormFeedbackProps extends HTMLAttributes<HTMLDivElement> {
  variant: FormFeedbackVariant;
  message: string;
  onDismiss?: () => void;
}

function FormFeedback({
  variant,
  message,
  onDismiss,
  className,
  ...props
}: FormFeedbackProps) {
  const isSuccess = variant === "success";

  return (
    <div
      role="alert"
      aria-live="polite"
      className={cn(
        "flex items-start gap-3 rounded-md border px-4 py-3 text-sm",
        isSuccess
          ? "border-success/30 bg-success/10 text-success"
          : "border-destructive/30 bg-destructive/10 text-destructive",
        className,
      )}
      {...props}
    >
      {isSuccess ? (
        <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      ) : (
        <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      )}

      <p className="flex-1 leading-snug">{message}</p>

      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Bildirimi kapat"
          className="mt-0.5 shrink-0 opacity-60 transition-opacity hover:opacity-100"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

export { FormFeedback };
