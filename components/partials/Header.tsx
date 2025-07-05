"use client";
import { useState, useEffect } from "react";
import type React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import dlLogo from "@/public/assets/images/dl-logo.png";

const navItems = [
  { href: "#beranda", label: "Beranda", path: "/" },
  { href: "#daftar-harga", label: "Daftar Harga", path: "/daftar-harga" },
  {
    href: "#perfume-selection",
    label: "Pilihan Parfum",
    path: "/pilihan-parfum",
  },
  { href: "#layanan", label: "Layanan", path: "/layanan" },
  {
    href: "#mengapa-memilih-kami",
    label: "Mengapa Kami",
    path: "/mengapa-memilih-kami",
  },
  { href: "#testimoni", label: "Testimoni", path: "/testimoni" },
  { href: "", label: "FAQ", path: "/faq" },
  { href: "#lokasi", label: "Lokasi", path: "/lokasi" },
  { href: "", label: "Kontak", path: "/kontak-kami" },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#beranda");
  const pathname = usePathname();

  // Check if we're on homepage
  const isHomepage = pathname === "/";

  // Handle navigation click
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof navItems)[0]
  ) => {
    if (
      isHomepage &&
      item.href &&
      item.href.trim() !== "" &&
      item.href.startsWith("#")
    ) {
      // If we're on homepage and clicking a section, scroll to it
      e.preventDefault();
      const section = document.querySelector(item.href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    } else {
      // For all other cases, let Next.js handle the navigation
      setMobileMenuOpen(false);
    }
  };

  // Handle scroll effect
  useEffect(() => {
    if (!isHomepage) return; // Only track scroll on homepage

    const handleScroll = () => {
      const sections = navItems
        .filter(
          (item) =>
            item.href && item.href.trim() !== "" && item.href.startsWith("#")
        )
        .map((item) => ({
          element: document.querySelector(item.href),
          href: item.href,
          index: navItems.findIndex((navItem) => navItem.href === item.href),
        }));

      const scrollY = window.scrollY + 80; // Reduced offset for compact header

      sections.forEach(({ element, href }) => {
        if (element) {
          const top = (element as HTMLElement).offsetTop;
          const height = (element as HTMLElement).clientHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(href);
          }
        }
      });
    };

    const handleScrolled = () => {
      setIsScrolled(window.scrollY > 20); // Reduced threshold
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrolled);
    handleScroll(); // run on mount
    handleScrolled(); // run on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrolled);
    };
  }, [isHomepage]);

  // Auto scroll to section if hash is present on homepage
  useEffect(() => {
    if (isHomepage && typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const section = document.querySelector(hash);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, [isHomepage]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100"
          : "bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400"
      }`}
    >
      {/* Compact decorative top border */}
      <div
        className={`h-0.5 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 ${
          isScrolled ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      ></div>

      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center py-2.5">
          {/* Compact Logo Section */}
          <Link
            href="/"
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              {/* Compact glow effect */}
              <div
                className={`absolute inset-0 rounded-xl blur-md transition-all duration-300 ${
                  isScrolled ? "bg-blue-500/20" : "bg-white/20"
                } group-hover:bg-yellow-400/30 group-hover:scale-105`}
              ></div>

              {/* Compact logo container */}
              <div
                className={`relative  p-1.5  transition-all duration-300  group-hover:scale-105 ${
                  isScrolled ? "" : " "
                }`}
              >
                <div className="w-12 h-12 bg-white rounded-xl overflow-hidden shadow-md p-0.5">
                  <Image
                    src={dlLogo || "/placeholder.svg"}
                    alt="Dolphin Laundry Logo"
                    width={120}
                    height={120}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="transition-all duration-300">
              <h1
                className={`text-base sm:text-lg font-bold transition-all duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                } group-hover:text-blue-900 drop-shadow-sm`}
              >
                Dolphin Laundry
              </h1>
              <p
                className={`text-xs font-medium transition-all duration-300 ${
                  isScrolled ? "text-blue-900" : "text-blue-800"
                } group-hover:text-blue-900`}
              >
                Dry Cleaning Kupang
              </p>
            </div>
          </Link>

          {/* Compact Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul className="flex space-x-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href === "#beranda" ? "/" : item.path}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`relative text-xs font-semibold transition-all duration-300 hover:scale-105 group px-2.5 py-1.5 rounded-lg ${
                      (isHomepage && activeSection === item.href) ||
                      pathname === item.path
                        ? isScrolled
                          ? "text-blue-600 bg-blue-50"
                          : "text-yellow-300 bg-white/10"
                        : isScrolled
                        ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        : "text-white hover:text-yellow-300 hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-2/3 ${
                        isScrolled ? "bg-blue-600" : "bg-yellow-300"
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compact Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              isScrolled
                ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                : "text-white hover:bg-white/20"
            }`}
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
            onClick={toggleMobileMenu}
          >
            <div className="relative">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <div
          className={`backdrop-blur-lg border-t transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 border-blue-100"
              : "bg-blue-700/95 border-white/20"
          }`}
        >
          <ul className="py-3 space-y-1">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`transform transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <Link
                  href={item.href === "#beranda" ? "/" : item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`block mx-3 px-3 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] hover:translate-x-1 ${
                    (isHomepage && activeSection === item.href) ||
                    pathname === item.path
                      ? isScrolled
                        ? "text-blue-600 bg-blue-50 shadow-sm"
                        : "text-yellow-300 bg-white/10 shadow-sm"
                      : isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white hover:text-yellow-300 hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-center">
                    <span
                      className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                        (isHomepage && activeSection === item.href) ||
                        pathname === item.path
                          ? isScrolled
                            ? "bg-blue-600"
                            : "bg-yellow-300"
                          : isScrolled
                          ? "bg-blue-400"
                          : "bg-white/60"
                      }`}
                    ></span>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
