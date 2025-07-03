"use client";
import React from "react";
import { MessageCircle, Instagram, Facebook, MapPin } from "lucide-react";
import { useWhatsApp } from "@/context/WhatsAppContext";

interface ContactItem {
  name: string;
  icon: React.ReactNode;
  link?: string;
  isWhatsApp?: boolean;
}

const ContactUs: React.FC = () => {
  const { openModal } = useWhatsApp();

  const contactItems: ContactItem[] = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="text-green-500 text-3xl" />,
      isWhatsApp: true,
    },
    {
      name: "Instagram",
      icon: <Instagram className="text-pink-500 text-3xl" />,
      link: "https://www.instagram.com/your-username",
    },
    {
      name: "Facebook",
      icon: <Facebook className="text-blue-600 text-3xl" />,
      link: "https://www.facebook.com/your-page",
    },
    {
      name: "Google Maps",
      icon: <MapPin className="text-red-500 text-3xl" />,
      link: "https://goo.gl/maps/Tu5ijHJKQZAwYQiA6",
    },
  ];

  const handleWhatsAppClick = (): void => {
    openModal();
  };

  return (
    <section id="contact-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-500 mb-8">Hubungi Kami</h2>
        <p className="text-gray-600 mb-12">
          Kami siap membantu Anda. Pilih salah satu cara untuk menghubungi kami.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {contactItems.map((item, index) =>
            item.isWhatsApp ? (
              <button
                key={index}
                onClick={handleWhatsAppClick}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center justify-center space-y-4 transition duration-300"
              >
                {item.icon}
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              </button>
            ) : (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center justify-center space-y-4 transition duration-300"
              >
                {item.icon}
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
