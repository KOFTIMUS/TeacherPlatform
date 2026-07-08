import type { TeacherCardProps } from "@/components/teacher";

export type Teacher = TeacherCardProps;

export const teachers: Teacher[] = [
  {
    id: "ayse-yilmaz",
    name: "Ayşe Yılmaz",
    subject: "Matematik",
    bio: "LGS ve YKS hazırlığında 10 yılı aşkın deneyime sahip matematik öğretmeni.",
    rating: 4.9,
    reviewCount: 248,
    hourlyRate: 850,
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&fit=crop&crop=faces",
  },
  // ... diğer 5 öğretmen
];