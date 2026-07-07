import Link from "next/link";

import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/ogretmen-ara", label: "Öğretmen Ara" },
  { href: "/blog", label: "Blog" },
  { href: "/egitmen-ol", label: "Eğitmen Ol" },
] as const;

const AUTH_LINKS = [
  { href: "/giris", label: "Giriş Yap" },
  { href: "/kayit", label: "Kayıt Ol" },
] as const;

const navLinkClassName =
  "inline-flex touch-target items-center rounded-md px-3 py-2 text-sm font-medium text-foreground-muted transition-colors duration-150 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

type HeaderNavLinkProps = {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
};

function HeaderNavLink({
  href,
  label,
  className,
  onClick,
}: HeaderNavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(navLinkClassName, className)}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

export { AUTH_LINKS, HeaderNavLink, NAV_LINKS, navLinkClassName };
