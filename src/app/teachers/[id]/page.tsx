import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { prisma } from "@/lib/prisma";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const teachers = await prisma.teacher.findMany({
    select: {
      id: true,
    },
  });

  return teachers.map((teacher) => ({
    id: teacher.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  const teacher = await prisma.teacher.findUnique({
    where: {
      id,
    },
  });

  if (!teacher) {
    return {
      title: "Öğretmen Bulunamadı | Teacher Platform",
    };
  }

  return {
    title: `${teacher.name} | Teacher Platform`,
    description: teacher.bio,
  };
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export default async function TeacherDetailPage({ params }: PageProps) {
  const { id } = await params;

  const teacher = await prisma.teacher.findUnique({
    where: {
      id,
    },
  });

  if (!teacher) {
    notFound();
  }

  const clampedRating = Math.min(5, Math.max(0, teacher.rating));
  const formattedRating = clampedRating.toFixed(1);

  return (
    <Section spacing="loose" aria-labelledby="teacher-heading">
      <Container size="md">
        <div className="flex flex-col gap-8">
          <Link
            href="/teachers"
            className="inline-flex items-center gap-1.5 text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="size-4"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Öğretmenlere Dön
          </Link>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="relative size-24 shrink-0 overflow-hidden rounded-full border border-border bg-background-subtle">
              {teacher.avatarUrl ? (
                <Image
                  src={teacher.avatarUrl}
                  alt={`${teacher.name} profil fotoğrafı`}
                  fill
                  sizes="96px"
                  className="object-cover"
                  priority
                />
              ) : (
                <span className="flex size-full items-center justify-center text-2xl font-semibold text-foreground-muted">
                  {teacher.name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <h1
                  id="teacher-heading"
                  className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
                >
                  {teacher.name}
                </h1>

                <Badge variant="secondary" size="default">
                  {teacher.subject}
                </Badge>
              </div>

              <div className="flex items-center gap-1.5">
                <StarIcon className="size-4 text-foreground" />
                <span className="text-sm font-medium text-foreground">
                  {formattedRating}
                </span>
                <span className="text-sm text-foreground-subtle">
                  ({teacher.reviewCount.toLocaleString("tr-TR")} değerlendirme)
                </span>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          <div className="flex flex-col gap-2">
            <h2 className="text-base font-semibold text-foreground">
              Hakkında
            </h2>

            <p className="text-sm leading-relaxed text-foreground-muted">
              {teacher.bio}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base font-semibold text-foreground">
              Ücret
            </h2>

            <div className="flex items-baseline gap-1">
              <span className="text-xl font-semibold text-foreground">
                {teacher.hourlyRate.toLocaleString("tr-TR")} ₺
              </span>

              <span className="text-sm text-foreground-subtle">
                / saat
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}