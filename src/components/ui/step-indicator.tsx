import { cn } from "@/lib/utils";

export interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

function StepIndicator({ steps, currentStep, className }: StepIndicatorProps) {
  return (
    <div
      aria-label="Form adımları"
      className={cn("flex items-center gap-0", className)}
    >
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <div key={index} className="flex flex-1 items-center">
            {/* Adım yuvası */}
            <div className="flex flex-col items-center gap-1.5">
              {/* Numara çemberi */}
              <div
                aria-current={isActive ? "step" : undefined}
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold transition-colors duration-150",
                  isCompleted &&
                    "border-primary bg-primary text-primary-foreground",
                  isActive &&
                    "border-primary bg-background text-primary",
                  !isCompleted &&
                    !isActive &&
                    "border-border bg-background text-foreground-muted",
                )}
              >
                {isCompleted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  stepNumber
                )}
              </div>

              {/* Adım etiketi */}
              <span
                className={cn(
                  "text-xs font-medium",
                  isActive ? "text-foreground" : "text-foreground-muted",
                )}
              >
                {label}
              </span>
            </div>

            {/* Bağlantı çizgisi (son adımda yok) */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "mx-2 mb-5 h-px flex-1 transition-colors duration-150",
                  isCompleted ? "bg-primary" : "bg-border",
                )}
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export { StepIndicator };
