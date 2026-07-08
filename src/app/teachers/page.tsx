import type { Metadata } from "next";

import { TeacherCard } from "@/components/teacher";
import { TeacherFilters } from "@/components/teacher/teacher-filters";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { teachers } from "@/lib/data/teachers";

export const metadata: Metadata = {
  title: "Öğretmenler | Teacher Platform",
  description:
    "Alanında uzman, doğrulanmış öğretmenler arasından sana en uygun eğitmeni bul.",
};

export default function TeachersPage() {
  return (
    <Section spacing="loose" aria-labelledby="teachers-heading">
      <Container size="xl">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h1
              id="teachers-heading"
              className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              Öğretmenler
            </h1>

            <p className="max-w-2xl text-lg text-foreground-muted">
              Alanında uzman ve doğrulanmış öğretmenler arasından ihtiyacına
              uygun eğitmeni seç.
            </p>
          </div>

          <TeacherFilters />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} {...teacher} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}