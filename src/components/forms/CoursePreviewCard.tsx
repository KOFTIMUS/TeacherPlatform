import { type CourseFormValues } from "@/lib/validations/course";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CoursePreviewCardProps {
  data: CourseFormValues;
}

function valueOrFallback(value: string | undefined, fallback: string): string {
  return value && value.trim().length > 0 ? value.trim() : fallback;
}

const levelLabels: Record<CourseFormValues["level"], string> = {
  beginner: "Başlangıç",
  intermediate: "Orta Seviye",
  advanced: "İleri Seviye",
};

function CoursePreviewCard({ data }: CoursePreviewCardProps) {
  const title = valueOrFallback(data.title, "Kurs başlığı girilmedi");
  const category = data.category?.trim();
  const description = valueOrFallback(
    data.description,
    "Açıklama girilmedi."
  );
  const objectives = valueOrFallback(
    data.objectives,
    "Öğrenme hedefleri girilmedi."
  );

  const level = levelLabels[data.level];

  return (
    <Card>
      <CardHeader className="gap-3">
        {category ? (
          <Badge variant="secondary">
            {category}
          </Badge>
        ) : null}

        <CardTitle className="text-xl leading-snug">
          {title}
        </CardTitle>
      </CardHeader>

      <Separator />

      <CardContent className="flex flex-col gap-6 pt-6">
        <div>
          <h3 className="mb-2 text-sm font-semibold">Açıklama</h3>
          <p className="text-sm leading-relaxed text-foreground-muted">
            {description}
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="mb-2 text-sm font-semibold">
            Öğrenme Hedefleri
          </h3>
          <p className="text-sm leading-relaxed text-foreground-muted">
            {objectives}
          </p>
        </div>

        <Separator />

        <dl className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <dt className="text-xs font-medium text-foreground-subtle">
              Kategori
            </dt>
            <dd className="text-sm text-foreground">
              {category ?? "Belirtilmedi"}
            </dd>
          </div>

          <div className="flex flex-col gap-1">
            <dt className="text-xs font-medium text-foreground-subtle">
              Seviye
            </dt>
            <dd className="text-sm text-foreground">
              {level}
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}

export { CoursePreviewCard };