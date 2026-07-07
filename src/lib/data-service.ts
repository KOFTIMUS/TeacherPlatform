import { cache } from "react";

// Projedeki Hero içeriğini temsil eden tip
export interface HeroData {
  title: string;
  subtitle: string;
  badge: string;
}

/**
 * Hero verisini getiren servis.
 * revalidate: 3600 -> Veri 1 saat (3600 sn) boyunca önbelleğe alınır.
 */
export const getHeroData = cache(async (): Promise<HeroData> => {
  // Veri çekme gecikmesini simüle edelim (Skeleton'ı görmek için)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Gerçek bir senaryoda burası fetch("https://api...") olurdu.
  return {
    badge: "Sürüm 1.0 Yayında",
    title: "Yapay Zeka Destekli Öğretmen Platformu",
    subtitle: "Modern eğitim teknolojileri ile derslerinizi daha verimli hale getirin, öğrencilerinize özel içerikler üretin.",
  };
});
