"use client";
import type React from "react";
import { Icon } from "@iconify/react";
import { useWhatsApp } from "@/context/WhatsAppContext";
import { Button } from "@heroui/react";

import { useTranslations } from "next-intl";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Link } from "@/i18n/routing";

const Footer: React.FC = () => {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();
  const { openModal } = useWhatsApp();

  const services = [
    { name: t("links.laundryKilo"), href: "#" },
    { name: t("links.dryCleaning"), href: "#" },
    { name: t("links.shoes"), href: "#" },
    { name: t("links.carpet"), href: "#" },
  ];

  const support = [
    { name: t("links.faq"), href: "/faq" },
    { name: t("links.privacy"), href: "#" },
    { name: t("links.terms"), href: "#" },
    { name: t("sections.contact"), href: "/kontak-kami" },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-blue-500 via-blue-600 to-blue-800 text-white relative">
      {/* WhatsApp Contact Section */}
      <div className="border-b border-blue-400/30 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div>
                <Heading
                  size="lg"
                  className="font-bold text-xl text-white mb-1 drop-shadow-sm"
                >
                  {t("whatsappSection.title")}
                </Heading>
                <Text size="sm" color="white" className="text-white/90 text-sm">
                  {t("whatsappSection.subtitle")}
                </Text>
              </div>
            </div>
            <div className="flex w-full md:w-auto">
              <Button
                variant="solid"
                onPress={openModal}
                color="success"
                className="font-bold shadow-lg text-white hover:shadow-xl w-full md:w-auto transition-all duration-300"
                size="lg"
                endContent={
                  <Icon icon="ic:baseline-whatsapp" width="24" height="24" />
                }
              >
                {t("whatsappSection.button")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center">
          {/* Links Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-6xl">
            {/* Services */}
            <div>
              <Heading
                size="lg"
                className="font-bold text-white mb-6 border-b border-white/40 pb-2 inline-block"
              >
                {t("sections.services")}
              </Heading>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <Heading
                size="lg"
                className="font-bold text-white mb-6 border-b border-white/40 pb-2 inline-block"
              >
                {t("sections.support")}
              </Heading>
              <ul className="space-y-4">
                {support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Socials */}
            <div>
              <Heading
                size="lg"
                className="font-bold text-white mb-6 border-b border-white/40 pb-2 inline-block"
              >
                {t("sections.contact")}
              </Heading>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-sm text-white/80 group">
                  <div className="mt-1 p-1 bg-white/15 rounded text-white/80 group-hover:bg-white group-hover:text-blue-600 transition-colors">
                    <Icon icon="lucide:map-pin" width="16" height="16" />
                  </div>
                  <a
                    href="https://goo.gl/maps/Tu5ijHJKQZAwYQiA6"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors leading-relaxed"
                  >
                    Jl. Perintis Kemerdekaan I, Kayu Putih, Kec. Oebobo, Kota
                    Kupang, Nusa Tenggara Timur
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80 group">
                  <div className="p-1 bg-white/15 rounded text-white/80 group-hover:bg-white group-hover:text-blue-600 transition-colors">
                    <Icon icon="ic:baseline-whatsapp" width="16" height="16" />
                  </div>
                  <span
                    className="hover:text-white transition-colors cursor-pointer"
                    onClick={openModal}
                  >
                    0821-4450-0030 / 0815-2950-0130
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80 group">
                  <div className="p-1 bg-white/15 rounded text-white/80 group-hover:bg-white group-hover:text-blue-600 transition-colors">
                    <Icon icon="lucide:clock" width="16" height="16" />
                  </div>
                  <span>{t("operatingHoursShort")}</span>
                </li>
              </ul>

              <div className="mt-8">
                <h6 className="font-semibold text-white text-sm mb-4">
                  {t("sections.followUs")}
                </h6>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/dolphin.laundry_kupang"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 text-white border border-white/30 hover:bg-white hover:text-pink-600 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                  >
                    <Icon icon="lucide:instagram" width="20" height="20" />
                  </a>
                  <a
                    href="https://www.facebook.com/rembo46"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 text-white border border-white/30 hover:bg-white hover:text-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                  >
                    <Icon icon="lucide:facebook" width="20" height="20" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-blue-900/50">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70">
          <Text size="xs" color="white">
            {t("copyright", { year: currentYear })}
          </Text>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              {t("links.cookies")}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t("links.privacy")}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t("links.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
