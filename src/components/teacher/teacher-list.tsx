"use client";

import { TeacherCard } from "@/components/teacher";
import { teachers } from "@/lib/data/teachers";
import { useTeacherFilters } from "@/hooks/use-teacher-filters";

function TeacherList() {
  const { search, subject, minRating, priceRange } = useTeacherFilters();

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch =
      search.trim() === "" ||
      teacher.name.toLowerCase().includes(search.toLowerCase()) ||
      teacher.bio.toLowerCase().includes(search.toLowerCase());

    const matchesSubject =
      subject === "all" || teacher.subject === subject;

    const matchesRating =
      teacher.rating >= Number(minRating);

    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "0-500" && teacher.hourlyRate <= 500) ||
      (priceRange === "500-1000" &&
        teacher.hourlyRate > 500 &&
        teacher.hourlyRate <= 1000) ||
      (priceRange === "1000+" && teacher.hourlyRate > 1000);

    return (
      matchesSearch &&
      matchesSubject &&
      matchesRating &&
      matchesPrice
    );
  });

  if (filteredTeachers.length === 0) {
    return (
      <p className="text-center text-foreground-muted">
        Aramanıza uygun öğretmen bulunamadı.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredTeachers.map((teacher) => (
        <TeacherCard key={teacher.id} {...teacher} />
      ))}
    </div>
  );
}

export { TeacherList };