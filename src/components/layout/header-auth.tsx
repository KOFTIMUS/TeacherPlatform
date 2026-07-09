"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { AUTH_LINKS } from "./header-nav";

interface HeaderAuthProps {
  user?: {
    id: string;
    name: string;
    email: string;
  } | null;
  mobile?: boolean;
  onClick?: () => void;
}

function HeaderAuth({
  user,
  mobile = false,
  onClick,
}: HeaderAuthProps) {
  const wrapperClass = mobile
    ? "flex flex-col gap-2"
    : "flex items-center gap-2";

  if (user) {
    return (
      <div className={wrapperClass}>
        <span className="text-sm text-foreground">
          Merhaba, {user.name}
        </span>

        <Link
          href="/profile"
          onClick={onClick}
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "sm",
            }),
            mobile && "w-full"
          )}
        >
          Profil
        </Link>

        <Link
          href="/logout"
          onClick={onClick}
          className={cn(
            buttonVariants({
              variant: "primary",
              size: "sm",
            }),
            mobile && "w-full"
          )}
        >
          Çıkış Yap
        </Link>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <Link
        href={AUTH_LINKS[0].href}
        onClick={onClick}
        className={cn(
          buttonVariants({
            variant: mobile ? "outline" : "ghost",
            size: "sm",
          }),
          mobile && "w-full"
        )}
      >
        {AUTH_LINKS[0].label}
      </Link>

      <Link
        href={AUTH_LINKS[1].href}
        onClick={onClick}
        className={cn(
          buttonVariants({
            variant: "primary",
            size: "sm",
          }),
          mobile && "w-full"
        )}
      >
        {AUTH_LINKS[1].label}
      </Link>
    </div>
  );
}

export { HeaderAuth };