"use client";
import type React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Card, CardBody, Button } from "@heroui/react";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { useTranslations } from "next-intl";
import dLPlace from "@/public/assets/images/2021-05-05.jpg";

const Location: React.FC = () => {
  const t = useTranslations("location");
  return (
    <section
      id="lokasi"
      className="py-24 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 relative overflow-hidden"
    >
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(110%+1.3px)] h-[60px] sm:h-[100px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,738.38,14.66,656.12-2.68,570.32-1.67,487.93,15.05c-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-blue-900"
          ></path>
        </svg>
      </div>
      {/* Background Pattern matched from Hero */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "25px 25px",
          backgroundPosition: "0 0, 12px 12px",
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Heading
            as="h2"
            size="4xl"
            align="center"
            className="mb-4 text-white tracking-tight"
          >
            {t("title")}
          </Heading>
          <div className="w-20 h-1.5 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
          <Text
            size="lg"
            align="center"
            className="max-w-2xl mx-auto text-white"
          >
            {t("subtitle")}
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Lokasi Detail */}
          <Card className="overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-blue-900/50 transition-all duration-300">
            {/* Image Section */}
            <div className="relative h-72 overflow-hidden group">
              <Image
                src={dLPlace}
                alt="Lokasi Dolphin Laundry"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl drop-shadow-lg">
                  Dolphin Laundry Store
                </p>
                <p className="text-sm opacity-100 text-white drop-shadow-md">
                  Siap melayani kebutuhan laundry Anda
                </p>
              </div>
            </div>

            {/* Content Section */}
            <CardBody className="p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-white/10 rounded-xl text-yellow-400 border border-white/10">
                  <Icon icon="lucide:map-pin" width="24" height="24" />
                </div>
                <Heading as="h3" size="xl" weight="bold" className="text-white">
                  {t("locationDetail")}
                </Heading>
              </div>

              <div className="space-y-6">
                <div>
                  <Heading
                    as="h4"
                    size="base"
                    weight="semibold"
                    className="mb-2 text-white"
                  >
                    {t("addressLabel")}
                  </Heading>
                  <Text className="leading-relaxed text-white">
                    {t("address")}
                  </Text>
                </div>

                <div className="flex items-start space-x-4 p-5 bg-white/5 rounded-2xl border border-white/10 group hover:border-yellow-400/50 transition-colors">
                  <Icon
                    icon="lucide:clock"
                    className="text-yellow-400 mt-1"
                    width="20"
                    height="20"
                  />
                  <div>
                    <Heading
                      as="h4"
                      size="base"
                      weight="semibold"
                      className="text-white mb-1"
                    >
                      {t("operatingHours")}
                    </Heading>
                    <div className="text-white text-sm space-y-1">
                      <p>Senin - Minggu</p>
                      <p className="font-medium text-yellow-300">
                        07:00 - 21:00 WITA
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  onPress={() =>
                    window.open(
                      "https://goo.gl/maps/Tu5ijHJKQZAwYQiA6",
                      "_blank",
                    )
                  }
                  className="w-full bg-yellow-400 text-blue-900 font-bold shadow-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                  size="lg"
                  radius="lg"
                  startContent={
                    <Icon icon="lucide:external-link" width="18" height="18" />
                  }
                >
                  {t("directionsButton")}
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* Detail Map */}
          <Card className="overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-blue-900/50 transition-all duration-300 flex flex-col h-full">
            <CardBody className="p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 text-white ring-1 ring-gray-400/50 rounded-full  bg-white/20">
                  <Icon icon="lucide:map" width="24" height="24" />
                </div>
                <Heading as="h3" size="xl" weight="bold" className="text-white">
                  {t("mapTitle")}
                </Heading>
              </div>

              <Text className="mb-6 leading-relaxed text-white">
                {t("mapDescription")}
              </Text>

              {/* Map Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/20 mb-6 flex-1 min-h-[300px]">
                <iframe
                  className="w-full h-full absolute inset-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.289388707983!2d123.60522407433285!3d-10.157115809599961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c569cc81f3ca8f9%3A0x5a7a632a6da5a80c!2sDOLPHIN%20LAUNDRY%20%26%20DRY%20CLEANING!5e0!3m2!1sen!2sid!4v1683602919145!5m2!1sen!2sid"
                  allowFullScreen={true}
                  loading="lazy"
                  title="Lokasi Dolphin Laundry"
                  style={{ filter: "contrast(1.2) opacity(0.9)" }}
                ></iframe>
              </div>

              <Button
                onPress={() =>
                  window.open("https://goo.gl/maps/Tu5ijHJKQZAwYQiA6", "_blank")
                }
                color="primary"
                size="lg"
                radius="lg"
                className="w-full font-bold bg-blue-600 text-white shadow-lg border border-blue-400 hover:bg-white hover:text-blue-600"
                startContent={
                  <Icon icon="lucide:external-link" width="18" height="18" />
                }
              >
                {t("openInMaps")}
              </Button>
            </CardBody>
          </Card>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: "lucide:map-pin",
              color: "text-white ring-1 ring-gray-400/50 bg-white/20",
              key: "strategic",
            },
            {
              icon: "lucide:clock",
              color: "text-white ring-1 ring-gray-400/50 bg-white/20",
              key: "openDaily",
            },
            {
              icon: "lucide:map",
              color: "text-white ring-1 ring-gray-400/50 bg-white/20",
              key: "easyToFind",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300 text-center group"
            >
              <div
                className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <Icon icon={item.icon} width="28" height="28" />
              </div>
              <Heading
                as="h4"
                size="base"
                weight="bold"
                className="text-white mb-2"
              >
                {t(`advantages.${item.key}.title`)}
              </Heading>
              <Text size="sm" className="text-white/90">
                {t(`advantages.${item.key}.description`)}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
