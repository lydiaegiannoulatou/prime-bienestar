"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Globe, ChevronDown, CalendarCheck, Video, Info, User } from "lucide-react";
import { cn } from "@/lib/utils";

type Locale = "en" | "es";

export function Header() {
  const t = useTranslations("header");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: Locale) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#FFB22C]/20 bg-white/95 backdrop-blur-md supports-backdrop-filter:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="relative h-10 w-10">
            <Image
              src="/assets/logo.png"
              alt="Prime Bienestar"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden sm:block font-semibold tracking-tight text-dark text-lg leading-none">
            Prime<br />
            <span className="text-primary font-normal text-sm tracking-[0.18em] uppercase">
              Bienestar
            </span>
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      "group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      "bg-[#FFB22C] text-[#4F200D] hover:bg-[#FA812F] hover:text-white"
                    )}
                  >
                    <CalendarCheck className="h-4 w-4" />
                    {t("bookAppointment")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "gap-1.5 text-[#4F200D] hover:text-[#FA812F] hover:bg-[#FFB22C]/10 bg-transparent"
                    )}
                  >
                    <Video className="h-4 w-4" />
                    {t("videoLibrary")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "gap-1.5 text-[#4F200D] hover:text-[#FA812F] hover:bg-[#FFB22C]/10 bg-transparent"
                    )}
                  >
                    <Info className="h-4 w-4" />
                    {t("aboutUs")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          <div className="mx-2 h-6 w-px bg-[#4F200D]/15" />

          {/* Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-2 text-[#4F200D] hover:text-[#FA812F] hover:bg-[#FFB22C]/10"
              >
                <Avatar className="h-7 w-7 border border-[#FFB22C]/40">
                  <AvatarImage src="" alt="Profile" />
                  <AvatarFallback className="bg-[#F6F1E9] text-[#4F200D] text-xs font-semibold">
                    PB
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{t("profile")}</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44 border-[#FFB22C]/20">
              <DropdownMenuItem asChild>
                <Link href="/" className="cursor-pointer text-[#4F200D]">{t("myAccount")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/" className="cursor-pointer text-[#4F200D]">{t("appointments")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/" className="cursor-pointer text-[#4F200D]">{t("settings")}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600 cursor-pointer">
                {t("signOut")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1.5 text-[#4F200D] hover:text-[#FA812F] hover:bg-[#FFB22C]/10"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium uppercase tracking-wide">{locale}</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36 border-[#FFB22C]/20">
              <DropdownMenuItem
                className={cn(
                  "cursor-pointer gap-2",
                  locale === "en" ? "text-[#FA812F] font-semibold" : "text-[#4F200D]"
                )}
                onSelect={() => switchLocale("en")}
              >
                <span className="text-base">🇺🇸</span> {t("english")}
              </DropdownMenuItem>
              <DropdownMenuItem
                className={cn(
                  "cursor-pointer gap-2",
                  locale === "es" ? "text-[#FA812F] font-semibold" : "text-[#4F200D]"
                )}
                onSelect={() => switchLocale("es")}
              >
                <span className="text-base">🇪🇸</span> {t("spanish")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* ── Mobile Hamburger ── */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-[#4F200D] hover:bg-[#FFB22C]/10"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-l border-[#FFB22C]/20 bg-white p-0">
            <MobileMenu locale={locale} switchLocale={switchLocale} />
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

function MobileMenu({
  locale,
  switchLocale,
}: {
  locale: Locale;
  switchLocale: (l: Locale) => void;
}) {
  const t = useTranslations("header");

  return (
    <nav className="flex flex-col h-full">
      {/* Header strip */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-[#FFB22C]/20 bg-[#F6F1E9]">
        <Avatar className="h-9 w-9 border-2 border-[#FFB22C]/50">
          <AvatarFallback className="bg-[#FFB22C]/20 text-[#4F200D] text-sm font-bold">PB</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-[#4F200D]">Prime Bienestar</p>
          <p className="text-xs text-[#4F200D]/60">Wellness & Care</p>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-1 px-3 py-4 flex-1">
        <MobileLink href="/" icon={<CalendarCheck className="h-4 w-4" />} accent>
          {t("bookAppointment")}
        </MobileLink>
        <MobileLink href="/" icon={<Video className="h-4 w-4" />}>
          {t("videoLibrary")}
        </MobileLink>
        <MobileLink href="/" icon={<Info className="h-4 w-4" />}>
          {t("aboutUs")}
        </MobileLink>
        <MobileLink href="/" icon={<User className="h-4 w-4" />}>
          {t("profile")}
        </MobileLink>
      </div>

      {/* Language toggle at bottom */}
      <div className="border-t border-[#FFB22C]/20 px-4 py-4">
        <p className="text-xs font-semibold text-[#4F200D]/50 uppercase tracking-widest mb-2 flex items-center gap-1.5">
          <Globe className="h-3.5 w-3.5" /> {t("language")}
        </p>
        <div className="flex gap-2">
          {(["en", "es"] as Locale[]).map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={cn(
                "flex-1 rounded-lg py-2 text-sm font-medium transition-colors",
                locale === l
                  ? "bg-[#FFB22C] text-[#4F200D]"
                  : "bg-[#F6F1E9] text-[#4F200D]/70 hover:bg-[#FFB22C]/20"
              )}
            >
              {l === "en" ? `🇺🇸 ${t("english")}` : `🇪🇸 ${t("spanish")}`}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function MobileLink({
  href,
  icon,
  children,
  accent = false,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
        accent
          ? "bg-[#FFB22C] text-[#4F200D] hover:bg-[#FA812F] hover:text-white"
          : "text-[#4F200D] hover:bg-[#FFB22C]/10 hover:text-[#FA812F]"
      )}
    >
      {icon}
      {children}
    </Link>
  );
}
