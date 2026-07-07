import { Container, Section } from "@/components/ui";
import { CourseCreateForm } from "@/components/forms/CourseCreateForm";

export default function CreateCoursePage() {
  return (
    <main>
      <Section spacing="default" background="default">
        <Container size="xl">
          <div className="mb-8 flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Eğitmen Paneli
            </h1>

            <p className="mt-2 text-sm text-foreground-muted">
              Yeni bir ders içeriği hazırlamaya başlayın.
            </p>
          </div>

          <CourseCreateForm />
        </Container>
      </Section>
    </main>
  );
}