"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Skeleton } from "@heroui/react";
import { useLocale } from "next-intl";
import { usePricing } from "@/services/publicService";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { PriceCardWrapper } from "@/components/ui/PriceCardWrapper";
import { PriceItem } from "@/components/ui/PriceItem";
import { CustomScrollbar } from "@/components/ui/CustomScrollbar";
import LoadingScreen from "@/components/LoadingScreen";

// Real data from user
interface PriceItemType {
  name: string;
  price?: string;
  duration?: string;
  services?: {
    type: string;
    price: string;
    duration: string;
  }[];
}

interface PriceCategory {
  category: string;
  icon: React.ReactNode;
  description: string;
  items: PriceItemType[];
}

const PriceList: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<string>("Tampilkan Semua");
  const { data: apiResponse, isLoading, isError } = usePricing();
  const locale = useLocale();

  const getIcon = (iconName: string) => {
    const lowerName = (iconName || "").toLowerCase();
    if (lowerName.includes("droplet") || lowerName.includes("reguler")) {
      return <Icon icon="lucide:droplet" width="24" height="24" />;
    }
    if (lowerName.includes("zap") || lowerName.includes("express")) {
      return <Icon icon="lucide:zap" width="24" height="24" />;
    }
    if (
      lowerName.includes("shirt") ||
      lowerName.includes("dry clean") ||
      lowerName.includes("khusus")
    ) {
      return <Icon icon="lucide:shirt" width="24" height="24" />;
    }
    return <Icon icon="lucide:leaf" width="24" height="24" />;
  };

  const pricelist: PriceCategory[] = React.useMemo(() => {
    if (!apiResponse?.data || !Array.isArray(apiResponse.data)) return [];

    return apiResponse.data.map((category) => {
      let items: PriceItemType[] = [];

      // Get localized category name
      const catName =
        locale === "en"
          ? category.categoryEn || category.category
          : category.category;

      const catDesc =
        locale === "en"
          ? category.descriptionEn || category.description
          : category.description;

      const isDryClean = category.category.toLowerCase().includes("dry clean");

      if (isDryClean && Array.isArray(category.items)) {
        // Handle Dry Clean category with both patterns:
        // Pattern 1: Items with services array
        // Pattern 2: Items with direct price/duration

        items = category.items.map((item) => {
          const itemName =
            locale === "en" ? item.nameEn || item.name : item.name;

          // Check if this item has services array (Pattern 1)
          if (item.services && Array.isArray(item.services)) {
            return {
              name: itemName,
              services: item.services.map((service) => ({
                type:
                  locale === "en"
                    ? service.typeEn || service.type
                    : service.type,
                price:
                  locale === "en"
                    ? service.priceEn || service.price
                    : service.price,
                duration:
                  locale === "en"
                    ? service.durationEn || service.duration
                    : service.duration,
              })),
            };
          }

          // Otherwise, it's a single service item (Pattern 2)
          return {
            name: itemName,
            price: locale === "en" ? item.priceEn || item.price : item.price,
            duration:
              locale === "en"
                ? item.durationEn || item.duration
                : item.duration,
          };
        });
      } else {
        // Regular categories (non-Dry Clean)
        if (Array.isArray(category.items)) {
          items = category.items.map((item) => ({
            name: locale === "en" ? item.nameEn || item.name : item.name,
            price: locale === "en" ? item.priceEn || item.price : item.price,
            duration:
              locale === "en"
                ? item.durationEn || item.duration
                : item.duration,
          }));
        }
      }

      return {
        category: catName || "Unknown Category",
        icon: getIcon(category.icon),
        description: catDesc || "",
        items,
      };
    });
  }, [apiResponse, locale]);

  const handleCategoryChange = (category: string): void => {
    setActiveCategory(category);
  };

  if (isLoading) {
    return <LoadingScreen message="Memuat Daftar Harga..." />;
  }

  if (isError) {
    return (
      <section className="py-16 bg-blue-600 text-white min-h-[400px] flex items-center justify-center">
        <Text>Gagal memuat harga.</Text>
      </section>
    );
  }

  return (
    <section
      id="daftar-harga"
      className="py-16 bg-gradient-to-t from-blue-600 via-blue-600 to-blue-600 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "25px 25px",
          backgroundPosition: "0 0, 12px 12px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <Heading
            as="h2"
            size="3xl"
            align="center"
            className="mb-4 text-white"
          >
            Daftar Harga Laundry
          </Heading>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4 rounded"></div>
          <Text
            size="lg"
            align="center"
            className="max-w-2xl mx-auto text-white/90"
          >
            Pilih layanan yang sesuai dengan kebutuhan Anda dengan harga
            terjangkau dan kualitas terbaik
          </Text>

          <div className="mt-6">
            <Button
              radius="full"
              startContent={
                <Icon icon="lucide:sparkles" width="16" height="16" />
              }
              className="bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-300 shadow-lg"
              onPress={() => {
                window.location.href = "/#perfume-selection";
              }}
            >
              Cek Parfum
            </Button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button
            variant={
              activeCategory === "Tampilkan Semua" ? "solid" : "bordered"
            }
            className={
              activeCategory === "Tampilkan Semua"
                ? "bg-white text-blue-600 font-semibold shadow-md"
                : "border-white/30 text-white hover:bg-white/10"
            }
            startContent={
              <Icon icon="lucide:clipboard-list" width="18" height="18" />
            }
            onClick={() => handleCategoryChange("Tampilkan Semua")}
          >
            Tampilkan Semua
          </Button>
          {pricelist.map((category, index) => (
            <Button
              key={index}
              variant={
                activeCategory === category.category ? "solid" : "bordered"
              }
              className={
                activeCategory === category.category
                  ? "bg-white text-blue-600 font-semibold shadow-md"
                  : "border-white/30 text-white hover:bg-white/10"
              }
              startContent={<span className="text-lg">{category.icon}</span>}
              onClick={() => handleCategoryChange(category.category)}
            >
              {category.category}
            </Button>
          ))}
        </div>

        {/* Pricelist Cards */}
        {(() => {
          const filtered = pricelist.filter(
            (category) =>
              activeCategory === "Tampilkan Semua" ||
              category.category === activeCategory
          );
          return (
            <div
              className={`${
                filtered.length === 1
                  ? "flex justify-center"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              } gap-6 max-w-6xl mx-auto`}
            >
              {filtered.map((category, index) => (
                <PriceCardWrapper
                  key={index}
                  icon={category.icon}
                  title={category.category}
                  description={category.description}
                  isSingleCard={filtered.length === 1}
                >
                  <CustomScrollbar>
                    <div className="space-y-4">
                      {category.items.map((item, idx) => (
                        <PriceItem
                          key={idx}
                          name={item.name}
                          price={item.price}
                          duration={item.duration}
                          services={item.services}
                        />
                      ))}
                    </div>
                  </CustomScrollbar>
                </PriceCardWrapper>
              ))}
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default PriceList;
