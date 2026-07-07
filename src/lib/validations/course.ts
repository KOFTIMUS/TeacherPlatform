import * as z from "zod";

export const courseSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Ders başlığı en az 5 karakter olmalıdır." })
    .max(100, { message: "Ders başlığı en fazla 100 karakter olabilir." }),

  description: z
    .string()
    .min(20, { message: "Açıklama en az 20 karakter olmalıdır." }),

  category: z
    .string()
    .min(1, { message: "Lütfen bir kategori seçin." }),

  level: z.enum(["beginner", "intermediate", "advanced"]),
});

export type CourseFormValues = z.infer<typeof courseSchema>;