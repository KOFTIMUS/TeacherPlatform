import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

function TeacherFilters() {
  return (
    <div className="flex flex-col gap-4">
      <Input
        type="search"
        placeholder="Öğretmen ara..."
        aria-label="Öğretmen ara"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Select defaultValue="all" aria-label="Branş seç">
          <option value="all">Tüm Branşlar</option>
          <option value="matematik">Matematik</option>
          <option value="fizik">Fizik</option>
          <option value="kimya">Kimya</option>
          <option value="turkce">Türkçe</option>
          <option value="ingilizce">İngilizce</option>
          <option value="yazilim">Yazılım</option>
        </Select>

        <Select defaultValue="0" aria-label="Minimum puan seç">
          <option value="0">Tümü</option>
          <option value="4">4+</option>
          <option value="4.5">4.5+</option>
          <option value="5">5</option>
        </Select>

        <Select defaultValue="all" aria-label="Saatlik ücret seç">
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