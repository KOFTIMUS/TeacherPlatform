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
  Input,
  Label,
  Select,
  Textarea,
} from "@/components/ui";
import { courseSchema, type CourseFormValues } from "@/lib/validations/course";

export function CourseCreateForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      level: "beginner",
    },
  });

  async function onSubmit(data: CourseFormValues) {
    setIsLoading(true);
    console.log("Form verileri:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  }

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Yeni Ders Oluştur</CardTitle>
        <CardDescription>
          AI destekli ders içeriği oluşturmak için temel bilgileri girin.
        </CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          {/* Ders Başlığı */}
          <div className="space-y-2">
            <Label htmlFor="title">Ders Başlığı</Label>
            <Input
              id="title"
              placeholder="Örn: React ile Modern Web Geliştirme"
              error={!!form.formState.errors.title}
              {...form.register("title")}
            />
            {form.formState.errors.title && (
              <p className="text-xs text-destructive">
                {form.formState.errors.title.message}
              </p>
            )}
          </div>

          {/* Açıklama */}
          <div className="space-y-2">
            <Label htmlFor="description">Kısa Açıklama</Label>
            <Textarea
              id="description"
              placeholder="Dersin içeriği hakkında kısa bir bilgi verin..."
              error={!!form.formState.errors.description}
              {...form.register("description")}
            />
            {form.formState.errors.description && (
              <p className="text-xs text-destructive">
                {form.formState.errors.description.message}
              </p>
            )}
          </div>

          {/* Kategori + Seviye */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="category">Kategori</Label>
              <Input
                id="category"
                placeholder="Yazılım, Tasarım vb."
                error={!!form.formState.errors.category}
                {...form.register("category")}
              />
              {form.formState.errors.category && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.category.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="level">Zorluk Seviyesi</Label>
              <Select
                id="level"
                error={!!form.formState.errors.level}
                {...form.register("level")}
              >
                <option value="beginner">Başlangıç</option>
                <option value="intermediate">Orta Seviye</option>
                <option value="advanced">İleri Seviye</option>
              </Select>
              {form.formState.errors.level && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.level.message}
                </p>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            type="submit"
            className="w-full"
            loading={isLoading}
            disabled={isLoading}
          >
            Dersi Oluştur
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}