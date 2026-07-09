"use client";

import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import { HeaderLogo } from "./header-logo";
import { HeaderNavLink, NAV_LINKS } from "./header-nav";


function HeaderClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    if (!mobileOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
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
        "sticky top-0 z-50 w-full border-b border-border bg-background",
        scrolled &&
          "bg-background/95 shadow-sm backdrop-blur-md",
      )}
    >

      <Container size="xl">

        <div className="flex h-16 items-center justify-between">

          <HeaderLogo
            onClick={closeMobileMenu}
          />


          <nav className="hidden lg:flex items-center gap-1">

            {NAV_LINKS.map((link) => (
              <HeaderNavLink
                key={link.href}
                {...link}
              />
            ))}

          </nav>


          <div className="hidden lg:block">
            {children}
          </div>


          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>


        </div>

      </Container>



      {mobileOpen && (

        <div className="border-t border-border lg:hidden">

          <Container
            size="xl"
            className="flex flex-col gap-4 py-4"
          >

            <nav className="flex flex-col gap-1">

              {NAV_LINKS.map((link)=>(
                <HeaderNavLink
                  key={link.href}
                  {...link}
                  className="w-full"
                  onClick={closeMobileMenu}
                />
              ))}

            </nav>


            <Separator />


            {children}


          </Container>

        </div>

      )}


    </header>
  );
}


export { HeaderClient };