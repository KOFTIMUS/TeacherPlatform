import type { Metadata } from "next";

import { TeacherFilterProvider } from "@/context/teacher-filter-context";
import { TeacherFilters } from "@/components/teacher/teacher-filters";
import { TeacherList } from "@/components/teacher/teacher-list";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Öğretmenler | Teacher Platform",
  description:
    "Alanında uzman, doğrulanmış öğretmenler arasından sana en uygun eğitmeni bul.",
};

export default function TeachersPage() {
  return (
    <Section spacing="loose" aria-labelledby="teachers-heading">
      <Container size="xl">
        <TeacherFilterProvider>
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

            <TeacherList />
          </div>
        </TeacherFilterProvider>
      </Container>
    </Section>
  );
}