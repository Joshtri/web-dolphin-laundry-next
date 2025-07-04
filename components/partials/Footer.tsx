"use client";
import type React from "react";
import { MessageCircle, Instagram, Facebook, MapPin } from "lucide-react";
import { useWhatsApp } from "@/context/WhatsAppContext";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { openModal } = useWhatsApp();

  const contactItems = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="text-green-500 text-2xl" />,
      isWhatsApp: true,
    },
    {
      name: "Instagram",
      icon: <Instagram className="text-pink-500 text-2xl" />,
      link: "https://www.instagram.com/dolphin.laundry_kupang",
    },
    {
      name: "Facebook",
      icon: <Facebook className="text-blue-600 text-2xl" />,
      link: "https://www.facebook.com/rembo46",
    },
    {
      name: "Maps",
      icon: <MapPin className="text-red-500 text-2xl" />,
      link: "https://goo.gl/maps/Tu5ijHJKQZAwYQiA6",
    },
  ];

  const handleWhatsAppClick = () => {
    openModal();
  };

  return (
    <footer className="bg-blue-600 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Hubungi Kami</h3>
        <p className="text-white/80 max-w-md mx-auto mb-6 text-sm">
          Kami siap membantu Anda. Pilih salah satu platform di bawah ini untuk
          terhubung dengan kami.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {contactItems.map((item, index) =>
            item.isWhatsApp ? (
              <button
                key={index}
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/90 text-blue-700 rounded-full shadow-md hover:bg-white hover:scale-105 transition-all"
              >
                {item.icon}
                <span className="font-semibold text-sm">{item.name}</span>
              </button>
            ) : (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/90 text-blue-700 rounded-full shadow-md hover:bg-white hover:scale-105 transition-all"
              >
                {item.icon}
                <span className="font-semibold text-sm">{item.name}</span>
              </a>
            )
          )}
        </div>

        <p className="text-lg font-semibold">
          Dolphin Laundry & Dry Cleaning Kupang
        </p>
        <p className="mt-2 text-sm">
          © {currentYear} Dolphin Laundry & Dry Cleaning Kupang. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4 text-sm">
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
