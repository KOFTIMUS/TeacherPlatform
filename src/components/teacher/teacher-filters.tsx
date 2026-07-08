"use client";

import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useTeacherFilters } from "@/hooks/use-teacher-filters";

function TeacherFilters() {
  const {
    search,
    setSearch,
    subject,
    setSubject,
    minRating,
    setMinRating,
    priceRange,
    setPriceRange,
  } = useTeacherFilters();

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="search"
        placeholder="Öğretmen ara..."
        aria-label="Öğretmen ara"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          aria-label="Branş seç"
        >
          <option value="all">Tüm Branşlar</option>
          <option value="Matematik">Matematik</option>
          <option value="Fizik">Fizik</option>
          <option value="Kimya">Kimya</option>
          <option value="Türkçe">Türkçe</option>
          <option value="İngilizce">İngilizce</option>
          <option value="Yazılım Geliştirme">Yazılım</option>
        </Select>

        <Select
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          aria-label="Minimum puan seç"
        >
          <option value="0">Tümü</option>
          <option value="4">4+</option>
          <option value="4.5">4.5+</option>
          <option value="5">5</option>
        </Select>

        <Select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          aria-label="Saatlik ücret seç"
        >
          <option value="all">Tümü</option>
          <option value="0-500">0–500 ₺</option>
          <option value="500-1000">500–1000 ₺</option>
          <option value="1000+">1000 ₺+</option>
        </Select>
      </div>
    </div>
  );
}

export { TeacherFilters };