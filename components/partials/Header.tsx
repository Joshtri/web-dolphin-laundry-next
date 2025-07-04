"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import dlLogo from "@/public/assets/images/dl-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#beranda");

  const navItems = [
    { href: "#beranda", label: "Beranda" },
    { href: "#mengapa-memilih-kami", label: "Mengapa Kami" },
    { href: "#daftar-harga", label: "Daftar Harga" },
    { href: "#lokasi", label: "Lokasi" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      const scrollY = window.scrollY + 120; // add offset for sticky header

      sections.forEach((section, i) => {
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).clientHeight;

          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(navItems[i].href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-blue-100"
          : "bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400"
      }`}
    >
      {/* Decorative top border */}
      <div
        className={`h-1 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 ${
          isScrolled ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      ></div>

      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo Section */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              {/* Glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl blur-lg transition-all duration-500 ${
                  isScrolled ? "bg-blue-500/30" : "bg-white/30"
                } group-hover:bg-yellow-400/40 group-hover:scale-110`}
              ></div>

              {/* Logo container */}
              <div
                className={`relative rounded-2xl p-3 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 ${
                  isScrolled ? "bg-white" : "bg-white/95 backdrop-blur-sm"
                }`}
              >
                <Image
                  src={dlLogo || "/placeholder.svg"}
                  alt="Dolphin Laundry Logo"
                  width={50}
                  height={40}
                  className="h-10 w-12 object-contain"
                />
              </div>
            </div>

            <div className="transition-all duration-300">
              <h1
                className={`text-xl font-bold transition-all duration-500 ${
                  isScrolled ? "text-gray-800" : "text-white"
                } group-hover:text-blue-600 drop-shadow-sm`}
              >
                Dolphin Laundry
              </h1>
              <p
                className={`text-sm font-medium transition-all duration-500 ${
                  isScrolled ? "text-blue-600" : "text-blue-100"
                } group-hover:text-blue-500`}
              >
                Dry Cleaning Kupang
              </p>
            </div>
          </div>

          {/* Enhanced Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`relative text-sm font-semibold transition-all duration-300 hover:scale-105 group px-3 py-2 rounded-lg ${
                      activeSection === item.href
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
                      className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-3/4 ${
                        isScrolled ? "bg-blue-600" : "bg-yellow-300"
                      }`}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
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
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`backdrop-blur-lg border-t transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 border-blue-100"
              : "bg-blue-700/95 border-white/20"
          }`}
        >
          <ul className="py-6 space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`block mx-4 px-6 py-4 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:translate-x-2 ${
                    activeSection === item.href
                      ? isScrolled
                        ? "text-blue-600 bg-blue-50"
                        : "text-yellow-300 bg-white/10"
                      : isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white hover:text-yellow-300 hover:bg-white/20"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transform: isMobileMenuOpen
                      ? "translateY(0)"
                      : "translateY(-20px)",
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transition: `all 0.3s ease-out ${index * 100}ms`,
                  }}
                >
                  <span className="flex items-center">
                    <span
                      className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                        isScrolled ? "bg-blue-400" : "bg-yellow-300"
                      }`}
                    ></span>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
