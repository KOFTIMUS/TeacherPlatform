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
  {
    id: "mehmet-kaya",
    name: "Mehmet Kaya",
    subject: "Fizik",
    bio: "TYT ve AYT fizik konularını uygulamalı anlatımlarla öğreten deneyimli eğitmen.",
    rating: 4.8,
    reviewCount: 176,
    hourlyRate: 900,
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&fit=crop&crop=faces",
  },
  {
    id: "elif-demir",
    name: "Elif Demir",
    subject: "İngilizce",
    bio: "Genel İngilizce, IELTS ve konuşma odaklı birebir dersler veren eğitmen.",
    rating: 4.9,
    reviewCount: 312,
    hourlyRate: 750,
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&fit=crop&crop=faces",
  },
  {
    id: "can-arslan",
    name: "Can Arslan",
    subject: "Yazılım Geliştirme",
    bio: "React, TypeScript ve modern web teknolojileri üzerine proje tabanlı eğitimler sunar.",
    rating: 4.7,
    reviewCount: 134,
    hourlyRate: 1200,
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=256&h=256&fit=crop&crop=faces",
  },
  {
    id: "zeynep-celik",
    name: "Zeynep Çelik",
    subject: "Türkçe",
    bio: "Ortaokul ve lise düzeyinde dil bilgisi ve paragraf çalışmaları konusunda uzman öğretmen.",
    rating: 4.8,
    reviewCount: 205,
    hourlyRate: 700,
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=faces",
  },
  {
    id: "ahmet-sahin",
    name: "Ahmet Şahin",
    subject: "Kimya",
    bio: "YKS kimya hazırlığında konu anlatımı ve soru çözümüne odaklanan deneyimli eğitmen.",
    rating: 4.9,
    reviewCount: 189,
    hourlyRate: 880,
    avatarUrl:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=256&h=256&fit=crop&crop=faces",
  },
];