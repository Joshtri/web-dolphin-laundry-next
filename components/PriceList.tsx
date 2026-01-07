"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Skeleton } from "@heroui/react";
import { useLocale, useTranslations } from "next-intl";
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
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const { data: apiResponse, isLoading, isError } = usePricing();
  const locale = useLocale();
  const t = useTranslations("pricing");

  const getIcon = (iconName: string) => {
    const lowerName = (iconName || "").toLowerCase();
    if (
      lowerName.includes("droplet") ||
      lowerName.includes("reguler") ||
      lowerName.includes("regular")
    ) {
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
    if (!apiResponse?.data?.categories || !apiResponse?.data?.items) return [];

    // Create a map of categories
    const categoriesMap = new Map(
      apiResponse.data.categories.map((cat) => [cat.id, cat])
    );

    // Group items by category
    const itemsByCategory = new Map<number, typeof apiResponse.data.items>();
    apiResponse.data.items.forEach((item) => {
      if (!itemsByCategory.has(item.categoryId)) {
        itemsByCategory.set(item.categoryId, []);
      }
      itemsByCategory.get(item.categoryId)!.push(item);
    });

    // Transform to PriceCategory format
    return Array.from(categoriesMap.entries())
      .map(([categoryId, category]) => {
        const categoryItems = itemsByCategory.get(categoryId) || [];

        // Get localized category name
        const catName =
          locale === "en" ? category.nameEn || category.name : category.name;

        const catDesc =
          locale === "en"
            ? category.descriptionEn || category.description
            : category.description;

        // Check if this is a "Dry Clean" category (has items with notes indicating service type)
        const isDryClean =
          category.name.toLowerCase().includes("dry clean") ||
          category.name.toLowerCase().includes("khusus");

        let items: PriceItemType[] = [];

        if (isDryClean) {
          // Group items by name (e.g., "Kemeja Panjang" will have multiple service types)
          const groupedByName = new Map<string, typeof categoryItems>();
          categoryItems.forEach((item) => {
            const itemName =
              locale === "en" ? item.nameEn || item.name : item.name;
            if (!groupedByName.has(itemName)) {
              groupedByName.set(itemName, []);
            }
            groupedByName.get(itemName)!.push(item);
          });

          // Transform grouped items
          items = Array.from(groupedByName.entries()).map(
            ([itemName, variants]) => {
              // If there are multiple variants (different service types), create services array
              if (variants.length > 1) {
                return {
                  name: itemName,
                  services: variants.map((variant) => {
                    const serviceType =
                      locale === "en"
                        ? variant.notesEn || variant.notes || "Service"
                        : variant.notes || "Layanan";

                    const formattedPrice = new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(parseFloat(variant.price));

                    const unit =
                      locale === "en"
                        ? variant.unitEn || variant.unit
                        : variant.unit;

                    const duration =
                      locale === "en"
                        ? variant.durationTextEn || variant.durationText
                        : variant.durationText;

                    return {
                      type: serviceType,
                      price:
                        variant.price === "0.00"
                          ? locale === "en"
                            ? "Contact Us"
                            : "Hubungi Kami"
                          : `${formattedPrice}/${unit}`,
                      duration: duration || "-",
                    };
                  }),
                };
              }

              // Single variant item
              const item = variants[0];
              const formattedPrice = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(parseFloat(item.price));

              const unit =
                locale === "en" ? item.unitEn || item.unit : item.unit;

              const duration =
                locale === "en"
                  ? item.durationTextEn || item.durationText
                  : item.durationText;

              return {
                name: itemName,
                price:
                  item.price === "0.00"
                    ? locale === "en"
                      ? item.notesEn || "Contact Us"
                      : item.notes || "Hubungi Kami"
                    : `${formattedPrice}/${unit}`,
                duration: duration || "-",
              };
            }
          );
        } else {
          // Regular categories: transform items directly
          items = categoryItems.map((item) => {
            const itemName =
              locale === "en" ? item.nameEn || item.name : item.name;

            const formattedPrice = new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(parseFloat(item.price));

            const unit = locale === "en" ? item.unitEn || item.unit : item.unit;

            const duration =
              locale === "en"
                ? item.durationTextEn || item.durationText
                : item.durationText;

            // If price is 0, show notes instead
            const priceDisplay =
              item.price === "0.00"
                ? locale === "en"
                  ? item.notesEn || "Contact Us"
                  : item.notes || "Hubungi Kami"
                : `${formattedPrice}/${unit}`;

            return {
              name: itemName,
              price: priceDisplay,
              duration: duration || "-",
            };
          });
        }

        return {
          category: catName || "Unknown Category",
          icon: getIcon(catName),
          description: catDesc || "",
          items,
        };
      })
      .sort((a, b) => {
        const catA = categoriesMap.get(
          Array.from(categoriesMap.entries()).find(
            ([_, cat]) =>
              (locale === "en" ? cat.nameEn || cat.name : cat.name) ===
              a.category
          )?.[0] ?? 0
        );
        const catB = categoriesMap.get(
          Array.from(categoriesMap.entries()).find(
            ([_, cat]) =>
              (locale === "en" ? cat.nameEn || cat.name : cat.name) ===
              b.category
          )?.[0] ?? 0
        );
        return (catA?.sortOrder ?? 0) - (catB?.sortOrder ?? 0);
      });
  }, [apiResponse, locale]);

  const handleCategoryChange = (category: string): void => {
    setActiveCategory(category);
  };

  if (isLoading) {
    return <LoadingScreen message={t("loading")} />;
  }

  if (isError) {
    return (
      <section className="py-16 bg-blue-600 text-white min-h-[400px] flex items-center justify-center">
        <Text>{t("error")}</Text>
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
            {t("headerTitle")}
          </Heading>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4 rounded"></div>
          <Text
            size="lg"
            align="center"
            className="max-w-2xl mx-auto text-white/90"
          >
            {t("headerDescription")}
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
              {t("checkPerfume")}
            </Button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button
            variant={activeCategory === "ALL" ? "solid" : "bordered"}
            className={
              activeCategory === "ALL"
                ? "bg-white text-blue-600 font-semibold shadow-md"
                : "border-white/30 text-white hover:bg-white/10"
            }
            startContent={
              <Icon icon="lucide:clipboard-list" width="18" height="18" />
            }
            onClick={() => handleCategoryChange("ALL")}
          >
            {t("showAll")}
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
              activeCategory === "ALL" || category.category === activeCategory
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
