import { TeacherCard } from "@/components/teacher";
import { prisma } from "@/lib/prisma";

async function TeacherList() {
  const teachers = await prisma.teacher.findMany({
    orderBy: {
      rating: "desc",
    },
  });

  if (teachers.length === 0) {
    return (
      <p className="text-center text-foreground-muted">
        Aramanıza uygun öğretmen bulunamadı.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} {...teacher} />
      ))}
    </div>
  );
}

export { TeacherList };