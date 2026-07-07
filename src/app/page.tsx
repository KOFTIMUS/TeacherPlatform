import { Hero } from "@/components/home";
import { getHeroData } from "@/lib/data-service";

export default async function Home() {
  const heroData = await getHeroData();

  return (
    <main>
      <Hero
        badge={heroData.badge}
        title={heroData.title}
        subtitle={heroData.subtitle}
      />
    </main>
  );
}