import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

function Hero() {
  return (
    <Section
      spacing="loose"
      background="default"
      aria-labelledby="hero-heading"
    >
      <Container size="xl">
        <div className="flex flex-col items-center gap-8 text-center">
          <Badge variant="outline" size="lg">
            Güvenilir Öğretmen Platformu
          </Badge>

          <div className="flex max-w-3xl flex-col gap-4">
            <h1
              id="hero-heading"
              className="text-4xl font-semibold tracking-tight md:text-5xl"
            >
              Sana en uygun öğretmeni{" "}
              <span className="text-foreground-muted">
                kolayca bul
              </span>
            </h1>

            <p className="text-lg text-foreground-muted md:text-xl">
              Binlerce alanında uzman öğretmen arasından ihtiyacına göre seç,
              hemen ders almaya başla.
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