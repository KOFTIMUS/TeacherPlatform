import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

interface HeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

function Hero({
  badge = "Güvenilir Öğretmen Platformu",
  title = "Sana en uygun öğretmeni kolayca bul",
  subtitle = "Binlerce alanında uzman öğretmen arasından ihtiyacına göre seç, hemen ders almaya başla.",
}: HeroProps) {
  return (
    <Section
      spacing="loose"
      background="default"
      aria-labelledby="hero-heading"
    >
      <Container size="xl">
        <div className="flex flex-col items-center gap-8 text-center">
          <Badge variant="outline" size="lg">
            {badge}
          </Badge>

          <div className="flex max-w-3xl flex-col gap-4">
            <h1
              id="hero-heading"
              className="text-4xl font-semibold tracking-tight md:text-5xl"
            >
              {title}
            </h1>

            <p className="text-lg text-foreground-muted md:text-xl">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/ogretmen-ara">
              <Button size="lg">
                Öğretmen Ara
              </Button>
            </Link>

            <Link href="/egitmen-ol">
              <Button variant="outline" size="lg">
                Eğitmen Ol
              </Button>
            </Link>
          </div>

          <p className="text-sm text-foreground-muted">
            500+ Öğretmen • 10.000+ Öğrenci • 4.8 Ortalama Puan
          </p>
        </div>
      </Container>
    </Section>
  );
}

export { Hero };