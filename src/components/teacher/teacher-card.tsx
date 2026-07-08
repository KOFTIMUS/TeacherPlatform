// TeacherCard — Presentational Component
// Modül 4.5: Öğretmen listesinde her öğretmeni gösteren yeniden kullanılabilir kart bileşeni.
// Server Component — "use client" içermez.

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TeacherCardProps {
  id: string;
  name: string;
  subject: string;
  bio: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  avatarUrl?: string;
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function TeacherCard({
  id,
  name,
  subject,
  bio,
  rating,
  reviewCount,
  hourlyRate,
  avatarUrl,
}: TeacherCardProps) {
  const clampedRating = Math.min(5, Math.max(0, rating));
  const formattedRating = clampedRating.toFixed(1);

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-start gap-4">
        {/* Avatar */}
        <div className="relative size-14 shrink-0 overflow-hidden rounded-full border border-border bg-background-subtle">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={`${name} profil fotoğrafı`}
              fill
              sizes="56px"
              className="object-cover"
            />
          ) : (
            <span
              className="flex size-full items-center justify-center text-lg font-semibold text-foreground-muted"
              aria-hidden="true"
            >
              {name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>

        {/* İsim ve branş */}
        <div className="flex min-w-0 flex-col gap-1">
          <h3 className="truncate text-base font-semibold leading-snug text-foreground">
            {name}
          </h3>
          <Badge variant="secondary" size="default">
            {subject}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {/* Kısa açıklama */}
        <p className="line-clamp-3 text-sm leading-relaxed text-foreground-muted">
          {bio}
        </p>

        {/* Puan ve değerlendirme */}
        <div className="flex items-center gap-1.5">
          <StarIcon className="size-4 text-foreground" />
          <span className="text-sm font-medium text-foreground">
            {formattedRating}
          </span>
          <span className="text-sm text-foreground-subtle">
            ({reviewCount.toLocaleString("tr-TR")} değerlendirme)
          </span>
        </div>

        {/* Saatlik ücret */}
        <div className="flex items-baseline gap-1">
          <span className="text-base font-semibold text-foreground">
            {hourlyRate.toLocaleString("tr-TR")} ₺
          </span>
          <span className="text-sm text-foreground-subtle">/ saat</span>
        </div>
      </CardContent>

      <CardFooter className="mt-auto">
        <Link
          href={`/teachers/${id}`}
          className={cn(buttonVariants({ variant: "outline", size: "default" }), "w-full")}
          aria-label={`${name} profilini gör`}
        >
          Profili Gör
        </Link>
      </CardFooter>
    </Card>
  );
}

export { TeacherCard };
