"use client";
import { useState } from "react";
import Image from "next/image";
import dlLogo from "@/public/assets/images/dl-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-500 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src={dlLogo}
            alt="Dolphin Laundry Logo"
            width={80}
            height={64}
            className="h-16 w-20"
          />
          <h1 className="text-lg font-bold">
            Dolphin Laundry & Dry Cleaning Kupang
          </h1>
        </div>

        {/* Menu Items for Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <a href="#beranda" className="hover:text-yellow-300">
                Beranda
              </a>
            </li>
            <li>
              <a href="#layanan" className="hover:text-yellow-300">
                Layanan Kami
              </a>
            </li>
            <li>
              <a href="#lokasi" className="hover:text-yellow-300">
                Lokasi
              </a>
            </li>
            <li>
              <a href="#hubungi-kami" className="hover:text-yellow-300">
                Kontak Kami
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-white focus:outline-none"
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-blue-600 text-white ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="space-y-2 py-4">
          <li>
            <a
              href="#beranda"
              className="block text-left pl-4 hover:text-yellow-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#layanan"
              className="block text-left pl-4 hover:text-yellow-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Layanan Kami
            </a>
          </li>
          <li>
            <a
              href="#lokasi"
              className="block text-left pl-4 hover:text-yellow-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lokasi
            </a>
          </li>
          <li>
            <a
              href="#hubungi-kami"
              className="block text-left pl-4 hover:text-yellow-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontak Kami
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
