import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.teacher.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.createMany({
    data: [
      {
        name: "Emre Öğrenci",
        email: "student@example.com",
        password: "password123",
        role: "STUDENT",
      },
      {
        name: "Ayşe Yılmaz",
        email: "ayse@example.com",
        password: "password123",
        role: "TEACHER",
      },
      {
        name: "Admin User",
        email: "admin@example.com",
        password: "password123",
        role: "ADMIN",
      },
    ],
  });

  await prisma.teacher.createMany({
    data: [
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
    ],
  });

  console.log("✅ User ve Teacher verileri eklendi.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });