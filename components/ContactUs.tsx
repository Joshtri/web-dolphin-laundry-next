"use client";
import type React from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { useWhatsApp } from "@/context/WhatsAppContext";
import { Card, CardBody } from "@heroui/react";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

interface ContactItem {
  name: string;
  icon: React.ReactNode;
  link?: string;
  isWhatsApp?: boolean;
}

const ContactUs: React.FC = () => {
  const { openModal } = useWhatsApp();
  const t = useTranslations("contactUs");

  const contactItems: ContactItem[] = [
    {
      name: "WhatsApp",
      icon: (
        <Icon
          icon="ic:baseline-whatsapp"
          className="text-green-500"
          width="32"
          height="32"
        />
      ),
      isWhatsApp: true,
    },
    {
      name: "Instagram",
      icon: (
        <Icon
          icon="lucide:instagram"
          className="text-pink-500"
          width="32"
          height="32"
        />
      ),
      link: "https://www.instagram.com/dolphin.laundry_kupang",
    },
    {
      name: "Facebook",
      icon: (
        <Icon
          icon="lucide:facebook"
          className="text-blue-600"
          width="32"
          height="32"
        />
      ),
      link: "https://www.facebook.com/rembo46",
    },
    {
      name: "Google Maps",
      icon: (
        <Icon
          icon="lucide:map-pin"
          className="text-red-500"
          width="32"
          height="32"
        />
      ),
      link: "https://goo.gl/maps/Tu5ijHJKQZAwYQiA6",
    },
  ];

  const handleWhatsAppClick = (): void => {
    openModal();
  };

  return (
    <section
      id="kontak-kami"
      className="py-30 bg-gradient-to-br from-blue-500 via-blue-100/30 to-blue-300 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <Heading as="h2" size="4xl" gradient align="center" className="mb-6">
            {t("title")}
          </Heading>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <Text
            size="lg"
            color="secondary"
            align="center"
            className="max-w-2xl mx-auto leading-relaxed"
          >
            🌟 {t("tagline")}{" "}
            <Text as="span" weight="bold">
              {t("highlight")}
            </Text>{" "}
            {t("description")}
          </Text>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactItems.map((item, index) =>
            item.isWhatsApp ? (
              <Card
                key={index}
                isPressable
                onPress={handleWhatsAppClick}
                className="transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm border border-blue-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-200/50"
              >
                <CardBody className="flex flex-col items-center justify-center space-y-4 p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <Heading
                    as="h3"
                    size="lg"
                    weight="bold"
                    className="text-gray-800"
                  >
                    {item.name}
                  </Heading>
                </CardBody>
              </Card>
            ) : (
              <Card
                key={index}
                isPressable
                as="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm border border-blue-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-200/50"
              >
                <CardBody className="flex flex-col items-center justify-center space-y-4 p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <Heading
                    as="h3"
                    size="lg"
                    weight="bold"
                    className="text-gray-800"
                  >
                    {item.name}
                  </Heading>
                </CardBody>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
