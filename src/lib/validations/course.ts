import * as z from "zod";

// Adım 1: Temel Bilgiler
export const courseStepOneSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Ders başlığı en az 5 karakter olmalıdır." })
    .max(100, { message: "Ders başlığı en fazla 100 karakter olabilir." }),
  category: z.string().min(1, { message: "Lütfen bir kategori girin." }),
  level: z.enum(["beginner", "intermediate", "advanced"], {
    required_error: "Lütfen bir zorluk seviyesi seçin.",
  }),
});

// Adım 2: İçerik Detayları
export const courseStepTwoSchema = z.object({
  description: z
    .string()
    .min(20, { message: "Açıklama en az 20 karakter olmalıdır." }),
  objectives: z
    .string()
    .min(10, { message: "Hedefler en az 10 karakter olmalıdır." }),
});

// Tam şema (Adım 1 + Adım 2 birleşimi)
export const courseSchema = courseStepOneSchema.merge(courseStepTwoSchema);

export type CourseStepOneValues = z.infer<typeof courseStepOneSchema>;
export type CourseStepTwoValues = z.infer<typeof courseStepTwoSchema>;
export type CourseFormValues = z.infer<typeof courseSchema>;
