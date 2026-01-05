"use client";
import { useState, useEffect, useMemo } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";

const Header = () => {
  const locale = useLocale();
  const t = useTranslations("header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Main menu items (visible in navbar center)
  const mainMenuItems = useMemo(
    () => [
      { href: "#beranda", label: t("menu.home"), path: `/${locale}/` },

      { href: `/${locale}/faq`, label: t("menu.faq"), path: `/${locale}/faq` },
      {
        href: "#testimoni",
        label: t("menu.testimonial"),
        path: `/${locale}/testimoni`,
      },
    ],
    [locale, t]
  );

  // Additional menu items (hamburger overlay)
  const additionalMenuItems = useMemo(
    () => [
      { href: "#beranda", label: t("menu.home"), path: `/${locale}/` },
      {
        href: "#layanan",
        label: t("menu.services"),
        path: `/${locale}/layanan`,
      },
      {
        href: "#perfume-selection",
        label: t("menu.perfume"),
        path: `/${locale}/pilihan-parfum`,
      },
      {
        href: "#mengapa-memilih-kami",
        label: t("menu.whyUs"),
        path: `/${locale}/mengapa-memilih-kami`,
      },
      { href: "#lokasi", label: t("menu.location"), path: `/${locale}/lokasi` },
      { href: "", label: t("menu.contact"), path: `/${locale}/kontak-kami` },
    ],
    [locale, t]
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#beranda");
  const pathname = usePathname();
  const isHomepage = pathname === `/${locale}` || pathname === `/${locale}/`;

  const handleNavClick = (href: string, path: string, isHashLink: boolean) => {
    if (isHomepage && isHashLink && href.startsWith("#")) {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isHomepage) return;

      const scrollY = window.scrollY + 80;
      [...mainMenuItems, ...additionalMenuItems]
        .filter((item) => item.href && item.href.startsWith("#"))
        .forEach((item) => {
          const element = document.querySelector(item.href);
          if (element) {
            const top = (element as HTMLElement).offsetTop;
            const height = (element as HTMLElement).clientHeight;
            if (scrollY >= top && scrollY < top + height) {
              setActiveSection(item.href);
            }
          }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage, mainMenuItems, additionalMenuItems]);

  useEffect(() => {
    if (isHomepage && window.location.hash) {
      setTimeout(() => {
        const section = document.querySelector(window.location.hash);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [isHomepage]);

  const isActive = (href: string, path: string) =>
    (isHomepage && activeSection === href) || pathname === path;

  return (
    <>
      {/* ================= DESKTOP HEADER (MD+) ================= */}
      <div className="hidden md:block absolute top-0 left-0 right-0 z-40 pt-4 px-8 md:px-12 lg:px-16 pointer-events-none">
        <div className="max-w-full mx-auto pointer-events-none">
          {/* Left: Brand Logo */}
          <NextLink href="/" className="group pointer-events-auto inline-block">
            <Heading
              className="text-2xl md:text-3xl font-extrabold transition-all duration-300 group-hover:scale-105 mt-5 text-white"
              style={{
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Dolphin Laundry
            </Heading>
          </NextLink>
        </div>
      </div>

      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 pt-4 px-8 md:px-12 lg:px-16 pointer-events-none">
        <div className="max-w-full mx-auto flex items-center justify-between pointer-events-none">
          {/* Spacer for Logo */}
          <div className="w-1 md:w-56" />

          {/* Center: Floating Menu Links */}
          <nav
            className={`transition-all duration-300 pointer-events-auto ${
              isScrolled ? "bg-white/95 shadow-xl" : "bg-white/90"
            } backdrop-blur-3xl rounded-full px-6 py-4`}
          >
            <div className="flex items-center gap-12">
              {mainMenuItems.map((item) => (
                <Link
                  key={item.label}
                  as={NextLink}
                  href={item.href === "#beranda" ? "/" : item.path}
                  onPress={() =>
                    handleNavClick(
                      item.href,
                      item.path,
                      item.href.startsWith("#")
                    )
                  }
                  className={`text-lg font-medium transition-colors  ${
                    isActive(item.href, item.path)
                      ? "text-blue-600"
                      : "text-blue-800 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right: Language Switcher & Hamburger Button */}
          <div className="flex items-center gap-4 pointer-events-auto">
            {/* Language Switcher */}
            <div
              className={`transition-all duration-300 ${
                isScrolled ? "bg-white/95 shadow-lg" : "bg-white/90"
              } backdrop-blur-3xl rounded-full px-4 py-3`}
            >
              <LanguageSwitcher />
            </div>

            {/* Hamburger Button */}
            <Button
              isIconOnly
              variant="flat"
              onPress={() => setIsMenuOpen(true)}
              className={`transition-all rounded-full w-16 h-16 min-w-16 ${
                isScrolled ? "bg-white/95 shadow-lg" : "bg-white/90"
              } backdrop-blur-3xl hover:bg-white`}
              aria-label="Open menu"
            >
              <Icon
                icon="lucide:menu"
                className="text-blue-600"
                width="28"
                height="28"
              />
            </Button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE HEADER (Solid Standard Bar) ================= */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-blue-100 flex items-center justify-between px-4 py-3">
        <div className="flex items-center justify-between w-full">
          {/* Mobile Logo */}
          <NextLink href="/" className="z-50">
            <Heading
              className="text-xl font-extrabold text-blue-600"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Dolphin Laundry
            </Heading>
          </NextLink>

          {/* Mobile Right Actions */}
          <div className="flex items-center gap-3 z-50">
            {/* Language Switcher */}
            <div className="bg-blue-50 rounded-full px-1 py-0.5 border border-blue-100">
              <div className="scale-90 origin-right">
                <LanguageSwitcher />
              </div>
            </div>

            {/* Mobile Hamburger */}
            <Button
              isIconOnly
              variant="flat"
              onPress={() => setIsMenuOpen(true)} // Changed from toggle to strict true for opening overlay
              className="rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100"
            >
              <Icon icon="lucide:menu" width="24" height="24" />
            </Button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop (outside menu area) */}
        <div
          className="fixed inset-0 bg-black/30 -z-10"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Dropdown Panel with Curved Bottom */}
        <div
          className={`relative bg-gradient-to-r from-blue-400 via-blue-700 to-blue-800 transition-transform duration-500 origin-top ${
            isMenuOpen ? "scale-y-100" : "scale-y-0"
          }`}
          style={{
            borderBottomLeftRadius: "50% 8%",
            borderBottomRightRadius: "50% 8%",
          }}
        >
          {/* Close Button */}
          <div className="absolute top-6 right-6 md:top-8 md:right-12 z-10">
            <Button
              isIconOnly
              variant="flat"
              onPress={() => setIsMenuOpen(false)}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all rounded-full w-16 h-16 shadow-xl border border-white/10"
              aria-label="Close menu"
            >
              <Icon
                icon="lucide:x"
                className="text-white"
                width="32"
                height="32"
              />
            </Button>
          </div>

          {/* Menu Content - Centered */}
          <div className="flex flex-col items-center justify-center px-6 py-20 md:py-16">
            {/* Main Menu Items - Row */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
              {mainMenuItems.map((item) => (
                <Link
                  key={item.label}
                  as={NextLink}
                  href={item.href === "#beranda" ? "/" : item.path}
                  onPress={() =>
                    handleNavClick(
                      item.href,
                      item.path,
                      item.href.startsWith("#")
                    )
                  }
                  className={`text-xl md:text-2xl font-bold transition-all hover:scale-110 ${
                    isActive(item.href, item.path)
                      ? "text-yellow-300"
                      : "text-white hover:text-yellow-200"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="w-16 h-0.5 bg-white/50 mb-8" />

            {/* Additional Menu Items - Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10">
              {additionalMenuItems.map((item) => (
                <Link
                  key={item.label}
                  as={NextLink}
                  href={item.href === "#beranda" ? "/" : item.path}
                  onPress={() =>
                    handleNavClick(
                      item.href,
                      item.path,
                      item.href.startsWith("#")
                    )
                  }
                  className={`text-sm md:text-base font-semibold transition-all hover:scale-105 ${
                    isActive(item.href, item.path)
                      ? "text-yellow-300"
                      : "text-white/90 hover:text-yellow-200"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Language Switcher for Mobile */}
            <div className="mb-6 bg-white/45 backdrop-blur-md rounded-full px-6 py-3">
              <LanguageSwitcher />
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <Link
                href="https://www.instagram.com/dolphin.laundry_kupang"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110"
              >
                <Icon
                  icon="lucide:instagram"
                  className="text-white"
                  width="20"
                  height="20"
                />
              </Link>
              <Link
                href="https://www.facebook.com/rembo46"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110"
              >
                <Icon
                  icon="lucide:facebook"
                  className="text-white"
                  width="20"
                  height="20"
                />
              </Link>
              <Link
                href="https://goo.gl/maps/Tu5ijHJKQZAwYQiA6"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110"
              >
                <Icon
                  icon="lucide:map-pin"
                  className="text-white"
                  width="20"
                  height="20"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
