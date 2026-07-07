"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import { HeaderLogo } from "./header-logo";
import { AUTH_LINKS, HeaderNavLink, NAV_LINKS } from "./header-nav";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileOpen((open) => !open);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background transition-[box-shadow,background-color,border-color] duration-150",
        scrolled &&
          "border-border bg-background/95 shadow-sm supports-[backdrop-filter]:bg-background/80 supports-[backdrop-filter]:backdrop-blur-md",
      )}
    >
      <Container size="xl">
        <div className="flex h-16 items-center justify-between gap-4">
          <HeaderLogo onClick={closeMobileMenu} />

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Ana navigasyon"
          >
            {NAV_LINKS.map((link) => (
              <HeaderNavLink key={link.href} {...link} />
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href={AUTH_LINKS[0].href}
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              {AUTH_LINKS[0].label}
            </Link>
            <Link
              href={AUTH_LINKS[1].href}
              className={buttonVariants({ variant: "primary", size: "sm" })}
            >
              {AUTH_LINKS[1].label}
            </Link>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            onClick={toggleMobileMenu}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </Container>

      {mobileOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background lg:hidden"
        >
          <Container size="xl" className="flex flex-col gap-4 py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobil navigasyon">
              {NAV_LINKS.map((link) => (
                <HeaderNavLink
                  key={link.href}
                  {...link}
                  className="w-full"
                  onClick={closeMobileMenu}
                />
              ))}
            </nav>

            <Separator />

            <div className="flex flex-col gap-2">
              <Link
                href={AUTH_LINKS[0].href}
                className={cn(buttonVariants({ variant: "outline" }), "w-full")}
                onClick={closeMobileMenu}
              >
                {AUTH_LINKS[0].label}
              </Link>
              <Link
                href={AUTH_LINKS[1].href}
                className={cn(buttonVariants({ variant: "primary" }), "w-full")}
                onClick={closeMobileMenu}
              >
                {AUTH_LINKS[1].label}
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export { Header };
