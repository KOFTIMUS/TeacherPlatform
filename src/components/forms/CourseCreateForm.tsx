"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  FormFeedback,
  Input,
  Label,
  Select,
  Textarea,
} from "@/components/ui";
import { StepIndicator } from "@/components/ui/step-indicator";
import {
  courseStepOneSchema,
  courseStepTwoSchema,
  type CourseFormValues,
  type CourseStepOneValues,
  type CourseStepTwoValues,
} from "@/lib/validations/course";

const STEPS = ["Temel Bilgiler", "İçerik Detayları", "Önizleme"];

type SubmitStatus = "idle" | "success" | "error";

export function CourseCreateForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [stepOneData, setStepOneData] = useState<CourseStepOneValues | null>(null);

  const stepOneForm = useForm<CourseStepOneValues>({
    resolver: zodResolver(courseStepOneSchema),
    defaultValues: {
      title: "",
      category: "",
      level: "beginner",
    },
  });

  const stepTwoForm = useForm<CourseStepTwoValues>({
    resolver: zodResolver(courseStepTwoSchema),
    defaultValues: {
      description: "",
      objectives: "",
    },
  });

  function handleStepOneSubmit(data: CourseStepOneValues) {
    setStepOneData(data);
    setCurrentStep(2);
  }

  function handleStepTwoSubmit(data: CourseStepTwoValues) {
    if (!stepOneData) return;
    setCurrentStep(3);
    // Önizleme adımına geçince stepTwoForm verisi zaten formda mevcut
    void data;
  }

  async function handleFinalSubmit() {
    if (!stepOneData) return;

    const stepTwoData = stepTwoForm.getValues();
    const finalData: CourseFormValues = { ...stepOneData, ...stepTwoData };

    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log("Form verileri:", finalData);
          resolve();
        }, 1000);
      });

      setSubmitStatus("success");
      setCurrentStep(1);
      stepOneForm.reset();
      stepTwoForm.reset();
      setStepOneData(null);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  }

  const levelLabels: Record<string, string> = {
    beginner: "Başlangıç",
    intermediate: "Orta Seviye",
    advanced: "İleri Seviye",
  };

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Yeni Ders Oluştur</CardTitle>
        <CardDescription>
          AI destekli ders içeriği oluşturmak için bilgileri adım adım girin.
        </CardDescription>
        <div className="pt-2">
          <StepIndicator steps={STEPS} currentStep={currentStep} />
        </div>
      </CardHeader>

      {/* ADIM 1: Temel Bilgiler */}
      {currentStep === 1 && (
        <form onSubmit={stepOneForm.handleSubmit(handleStepOneSubmit)}>
          <CardContent className="space-y-4">
            {submitStatus === "error" && (
              <FormFeedback
                variant="error"
                message="Ders oluşturulurken bir hata oluştu. Lütfen tekrar deneyin."
                onDismiss={() => setSubmitStatus("idle")}
              />
            )}

            <div className="space-y-2">
              <Label htmlFor="title" required>
                Ders Başlığı
              </Label>
              <Input
                id="title"
                placeholder="Örn: React ile Modern Web Geliştirme"
                error={!!stepOneForm.formState.errors.title}
                {...stepOneForm.register("title")}
              />
              {stepOneForm.formState.errors.title && (
                <p className="text-xs text-destructive">
                  {stepOneForm.formState.errors.title.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="category" required>
                  Kategori
                </Label>
                <Input
                  id="category"
                  placeholder="Yazılım, Tasarım vb."
                  error={!!stepOneForm.formState.errors.category}
                  {...stepOneForm.register("category")}
                />
                {stepOneForm.formState.errors.category && (
                  <p className="text-xs text-destructive">
                    {stepOneForm.formState.errors.category.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="level">Zorluk Seviyesi</Label>
                <Select
                  id="level"
                  error={!!stepOneForm.formState.errors.level}
                  {...stepOneForm.register("level")}
                >
                  <option value="beginner">Başlangıç</option>
                  <option value="intermediate">Orta Seviye</option>
                  <option value="advanced">İleri Seviye</option>
                </Select>
                {stepOneForm.formState.errors.level && (
                  <p className="text-xs text-destructive">
                    {stepOneForm.formState.errors.level.message}
                  </p>
                )}
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit" className="w-full">
              Devam Et
            </Button>
          </CardFooter>
        </form>
      )}

      {/* ADIM 2: İçerik Detayları */}
      {currentStep === 2 && (
        <form onSubmit={stepTwoForm.handleSubmit(handleStepTwoSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="description" required>
                Kısa Açıklama
              </Label>
              <Textarea
                id="description"
                placeholder="Dersin içeriği hakkında kısa bir bilgi verin..."
                error={!!stepTwoForm.formState.errors.description}
                {...stepTwoForm.register("description")}
              />
              {stepTwoForm.formState.errors.description && (
                <p className="text-xs text-destructive">
                  {stepTwoForm.formState.errors.description.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="objectives" required>
                Öğrenme Hedefleri
              </Label>
              <Textarea
                id="objectives"
                placeholder="Bu dersi tamamlayan öğrenciler ne öğrenmiş olacak?"
                error={!!stepTwoForm.formState.errors.objectives}
                {...stepTwoForm.register("objectives")}
              />
              {stepTwoForm.formState.errors.objectives && (
                <p className="text-xs text-destructive">
                  {stepTwoForm.formState.errors.objectives.message}
                </p>
              )}
            </div>
          </CardContent>

          <CardFooter className="gap-3">
            <Button
              type="button"
              variant="secondary"
              className="w-full"
              onClick={() => setCurrentStep(1)}
            >
              Geri
            </Button>
            <Button type="submit" className="w-full">
              Devam Et
            </Button>
          </CardFooter>
        </form>
      )}

      {/* ADIM 3: Önizleme */}
      {currentStep === 3 && stepOneData && (
        <>
          <CardContent className="space-y-4">
            {submitStatus === "success" && (
              <FormFeedback
                variant="success"
                message="Ders başarıyla oluşturuldu."
                onDismiss={() => setSubmitStatus("idle")}
              />
            )}
            {submitStatus === "error" && (
              <FormFeedback
                variant="error"
                message="Ders oluşturulurken bir hata oluştu. Lütfen tekrar deneyin."
                onDismiss={() => setSubmitStatus("idle")}
              />
            )}

            <div className="rounded-md border border-border bg-background-subtle p-4 space-y-3 text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-foreground-muted">Başlık</span>
                <span className="font-medium text-foreground text-right">{stepOneData.title}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-foreground-muted">Kategori</span>
                <span className="font-medium text-foreground">{stepOneData.category}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-foreground-muted">Seviye</span>
                <span className="font-medium text-foreground">{levelLabels[stepOneData.level]}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-foreground-muted shrink-0">Açıklama</span>
                <span className="font-medium text-foreground text-right">{stepTwoForm.getValues("description")}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-foreground-muted shrink-0">Hedefler</span>
                <span className="font-medium text-foreground text-right">{stepTwoForm.getValues("objectives")}</span>
              </div>
            </div>
          </CardContent>

          <CardFooter className="gap-3">
            <Button
              type="button"
              variant="secondary"
              className="w-full"
              onClick={() => setCurrentStep(2)}
              disabled={isLoading}
            >
              Geri
            </Button>
            <Button
              type="button"
              className="w-full"
              loading={isLoading}
              disabled={isLoading}
              onClick={handleFinalSubmit}
            >
              Dersi Oluştur
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
