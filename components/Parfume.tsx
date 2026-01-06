"use client";
import type React from "react";
import { useState, useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Icon } from "@iconify/react";
import { Button, Card, CardBody, Input, Chip, Skeleton } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { usePerfumes } from "@/services/publicService";
import LoadingScreen from "@/components/LoadingScreen";

// Perfume image mapping - map perfume names to image URLs
const getPerfumeImage = (perfumeName: string): string | null => {
  const nameKey = perfumeName.toLowerCase().trim();

  // Mapping of perfume names to aroma/ingredient images (NOT perfume bottles)
  const imageMap: Record<string, string> = {
    // Premium Category - Representing the aroma/ingredients
    "kenzo batang":
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=400&fit=crop", // Wooden sticks/branches
    "kenzo bunga":
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop", // Beautiful flowers
    "kenzo daun":
      "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=400&h=400&fit=crop", // Green leaves
    bulgary:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=400&h=400&fit=crop", // Bergamot/citrus
    casablanca:
      "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=400&h=400&fit=crop", // White lily (Casablanca lily)
    dunhill:
      "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=400&fit=crop", // Tobacco leaves
    elegance:
      "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=400&h=400&fit=crop", // White elegant flowers

    // Celebrity Category
    "jenifer lopez pollo":
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=400&fit=crop", // Tropical fruits
    syahrini:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=400&fit=crop", // Glamorous pink flowers
    "gold lavender angelina jolie":
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&h=400&fit=crop", // Golden lavender

    // Fresh Category
    oxygen:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=400&fit=crop", // Fresh air/sky/clouds
    "aqua fresh green tea":
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop", // Green tea leaves
    "the blue akasia":
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop", // Acacia flowers
    "mint melati keraton":
      "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&h=400&fit=crop", // Mint leaves + jasmine
    "molto blue atlantic":
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=400&fit=crop", // Ocean/sea waves
    kispray:
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop", // Fresh clean linen
    downi:
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop", // Soft cotton/fabric
    "jeruk nipis kopi":
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop", // Lime and coffee beans

    // Floral Category
    lilac:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop", // Lilac flowers
    lavender:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&h=400&fit=crop", // Lavender field
    blossom:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop", // Cherry blossom
    "forbidden rose":
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&h=400&fit=crop", // Red rose
    "soft lavender":
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&h=400&fit=crop", // Soft lavender buds

    // Sweet Category
    vanilla:
      "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=400&h=400&fit=crop", // Vanilla pods/beans
    cuddle:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=400&fit=crop", // Soft cozy textures
    "bubble gum":
      "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&h=400&fit=crop", // Pink bubble gum
    "baby berry miss cherie":
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&h=400&fit=crop", // Mixed berries

    // Fruity Category
    "mix fruit":
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=400&fit=crop", // Mixed colorful fruits
    orange:
      "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=400&h=400&fit=crop", // Fresh oranges
    strawberry:
      "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400&h=400&fit=crop", // Fresh strawberries
    bulbery:
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&h=400&fit=crop", // Blueberries
    "apple anasui":
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop", // Red apples
    "shine apple":
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=400&fit=crop", // Shiny green apples

    // Mysterious Category
    "black magic":
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&h=400&fit=crop", // Dark mysterious rose/night
  };

  return imageMap[nameKey] || null;
};

const PerfumeSelection: React.FC = () => {
  const { data: apiResponse, isLoading, isError } = usePerfumes();
  const locale = useLocale();
  const t = useTranslations("parfume");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  // Default selectedCategory to translated "All" when data is loaded is handled in useMemo or effects,
  // but better to stick to a key or handle "Semua" mapping.
  // Actually, we should initialize selectedCategory with the translation of "All" or a fixed key.
  // Let's use the translation key "allCategory" result for consistency, or just a fixed string if mapped.

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [showPopular, setShowPopular] = useState(false);
  const [showFeatureDropdown, setShowFeatureDropdown] = useState(false);
  const [showFeatureExplanation, setShowFeatureExplanation] = useState(false);

  // Transform API data to flat perfumes array
  const perfumes = useMemo(() => {
    if (!apiResponse?.data?.items || !apiResponse?.data?.categories) return [];

    const categoriesMap = new Map(
      apiResponse.data.categories.map((cat) => [
        cat.id,
        locale === "en" ? cat.nameEn || cat.name : cat.name,
      ])
    );

    return apiResponse.data.items.map((perfume) => ({
      name: locale === "en" ? perfume.nameEn || perfume.name : perfume.name,
      category: categoriesMap.get(perfume.categoryId) || "",
      popular: perfume.popular,
      fabricSafe: perfume.fabricSafe,
      longLasting: perfume.longLasting,
      premium: perfume.premium,
    }));
  }, [apiResponse, locale]);

  // Dynamic categories from API
  const allCategoryLabel = t("allCategory");

  const categories = useMemo(() => {
    if (!apiResponse?.data?.categories) return [allCategoryLabel];

    const cats = apiResponse.data.categories
      .filter((cat) => cat.isActive)
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .map((cat) => (locale === "en" ? cat.nameEn || cat.name : cat.name));

    return [allCategoryLabel, ...cats];
  }, [apiResponse, locale, allCategoryLabel]);

  // Ensure selectedCategory matches the translated "All" label if it was "Semua" (default)
  // This is a simple effect to sync local state with translation changes if needed,
  // or just handle it in the filter.
  // For simplicity, we'll strip "Semua" init and use mapped value.

  const features = [
    {
      id: "fabricSafe",
      name: t("features.fabricSafe"),
      icon: <Icon icon="lucide:shield" width="14" height="14" />,
      color: "bg-green-500",
      text: "text-green-100",
    },
    {
      id: "longLasting",
      name: t("features.longLasting"),
      icon: <Icon icon="lucide:clock" width="14" height="14" />,
      color: "bg-blue-500",
      text: "text-blue-100",
    },
    {
      id: "premium",
      name: t("features.premium"),
      icon: <Icon icon="lucide:award" width="14" height="14" />,
      color: "bg-purple-500",
      text: "text-purple-100",
    },
  ];

  const filteredPerfumes = useMemo(() => {
    // Handle "Semua" case insensitive or translation based
    const isAllCategory =
      selectedCategory === "Semua" || selectedCategory === allCategoryLabel;

    return perfumes.filter((perfume) => {
      const matchesSearch = perfume.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        isAllCategory || perfume.category === selectedCategory;

      const matchesFeatures =
        selectedFeatures.length === 0 ||
        selectedFeatures.every((feature) => {
          switch (feature) {
            case "fabricSafe":
              return perfume.fabricSafe;
            case "longLasting":
              return perfume.longLasting;
            case "premium":
              return perfume.premium;
            default:
              return true;
          }
        });

      return matchesSearch && matchesCategory && matchesFeatures;
    });
  }, [
    perfumes,
    searchTerm,
    selectedCategory,
    selectedFeatures,
    allCategoryLabel,
  ]);

  const popularPerfumes = useMemo(
    () => perfumes.filter((p) => p.popular).slice(0, 8),
    [perfumes]
  );

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((f) => f !== featureId)
        : [...prev, featureId]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategory(allCategoryLabel);
    setSelectedFeatures([]);
    setSearchTerm("");
  };

  // Loading state
  if (isLoading) {
    return <LoadingScreen message="Memuat Koleksi Parfum..." />;
  }

  // Error state
  if (isError) {
    return (
      <section className="py-20 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-800 min-h-[50vh] flex items-center justify-center">
        <div className="text-white bg-white/10 px-6 py-4 rounded-xl border border-white/20">
          <Icon
            icon="lucide:alert-circle"
            className="w-8 h-8 mx-auto mb-2 text-red-300"
          />
          <p>{t("error")}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="perfume-selection"
      className="py-20 bg-gradient-to-b from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "25px 25px",
          backgroundPosition: "0 0, 12px 12px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              {t("title")}
            </h2>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto lg:mx-0 mb-8 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
            <p className="text-xl text-blue-50 mb-8 leading-relaxed font-light">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Parfume Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
              <div className="absolute inset-0 bg-blue-400/30 blur-[60px] rounded-full scale-110 -z-10 group-hover:bg-blue-400/40 transition-all duration-700" />
              <img
                src="/assets/images/parfume-image.png"
                alt="Premium Perfume Collection"
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white/20 group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-full shadow-lg text-sm"
              >
                Make your laundry fresh
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 bg-white text-blue-600 font-bold px-4 py-2 rounded-full shadow-lg text-sm flex items-center gap-1"
              >
                <Icon icon="lucide:sparkles" className="w-4 h-4" /> 100% Free
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Filters Panel */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 mb-12 border border-white/20 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            {/* Search */}
            <div className="w-full md:w-96 relative">
              <Input
                type="text"
                placeholder={t("searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                startContent={
                  <Icon
                    icon="lucide:search"
                    className="text-white/60 w-5 h-5"
                  />
                }
                classNames={{
                  input: "text-white placeholder:text-white/60",
                  inputWrapper: "bg-white/10 border-white/20  !cursor-text",
                }}
                size="lg"
              />
            </div>

            {/* Feature Toggles (Desktop) */}
            <div className="hidden md:flex gap-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => toggleFeature(feature.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 border ${
                    selectedFeatures.includes(feature.id)
                      ? `${feature.color} text-white border-transparent shadow-lg scale-105`
                      : "bg-transparent text-white/80 border-white/30 hover:bg-white/10"
                  }`}
                >
                  {feature.icon}
                  {feature.name}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <div className="md:hidden w-full">
              <Button
                fullWidth
                variant="bordered"
                className="text-white border-white/30"
                onClick={() => setShowFeatureDropdown(!showFeatureDropdown)}
                endContent={
                  <Icon
                    icon={
                      showFeatureDropdown
                        ? "lucide:chevron-up"
                        : "lucide:chevron-down"
                    }
                  />
                }
              >
                {t("filterBy")}
              </Button>

              <AnimatePresence>
                {showFeatureDropdown && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2 pt-4">
                      {features.map((feature) => (
                        <button
                          key={feature.id}
                          onClick={() => toggleFeature(feature.id)}
                          className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 border ${
                            selectedFeatures.includes(feature.id)
                              ? `${feature.color} text-white border-transparent`
                              : "bg-transparent text-white/80 border-white/30"
                          }`}
                        >
                          {feature.icon}
                          {feature.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-white text-blue-600 shadow-lg scale-105"
                    : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Clear Filter */}
          {(selectedCategory !== allCategoryLabel ||
            selectedFeatures.length > 0 ||
            searchTerm) && (
            <div className="text-center mt-6">
              <button
                onClick={clearAllFilters}
                className="text-white/70 hover:text-white text-sm underline decoration-white/30 underline-offset-4"
              >
                {t("clearFilters")}
              </button>
            </div>
          )}
        </div>

        {/* Perfume Grid */}
        <motion.div
          layout
          className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 border border-white/10"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Icon icon="lucide:sparkles" className="text-yellow-400" />
              {t("allPerfumes")}
              <span className="text-white/50 text-lg font-normal">
                ({filteredPerfumes.length})
              </span>
            </h3>
            <Button
              size="sm"
              variant="light"
              className="text-yellow-300 hover:text-yellow-200"
              onClick={() => setShowPopular(!showPopular)}
              startContent={
                <Icon
                  icon="lucide:star"
                  className={showPopular ? "fill-current" : ""}
                />
              }
            >
              {showPopular ? t("hidePopular") : t("showPopular")}
            </Button>
          </div>

          {/* Popular Section (Conditional) */}
          <AnimatePresence>
            {showPopular && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8 p-4 bg-yellow-400/10 rounded-xl border border-yellow-400/20 overflow-hidden"
              >
                <h4 className="text-yellow-300 font-bold mb-3 flex items-center gap-2">
                  <Icon icon="lucide:crown" /> Popular Choices
                </h4>
                <div className="flex flex-wrap gap-2">
                  {popularPerfumes.map((p) => (
                    <Chip
                      key={p.name}
                      variant="flat"
                      classNames={{
                        base: "bg-yellow-400/20 text-yellow-200 border border-yellow-400/30",
                      }}
                    >
                      {p.name}
                    </Chip>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Grid - FIX: Using CSS Grid instead of Flex for better layout */}
          <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredPerfumes.length > 0 ? (
                  filteredPerfumes.map((perfume, index) => (
                    <motion.div
                      key={`${perfume.name}-${index}`}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2, delay: index * 0.03 }} // Stagger effect
                      className="group relative bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/30 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      {/* Popular Badge - Made larger and more visible */}
                      {perfume.popular && (
                        <div className="absolute top-2 right-2 z-10">
                          <div className="bg-yellow-400 text-blue-900 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                            <Icon
                              icon="lucide:star"
                              className="w-3 h-3 fill-current"
                            />
                            Popular
                          </div>
                        </div>
                      )}

                      <div className="aspect-square bg-gradient-to-br from-white/5 to-white/10 rounded-xl mb-3 flex items-center justify-center relative overflow-hidden group-hover:from-white/10 group-hover:to-white/20 transition-colors">
                        {getPerfumeImage(perfume.name) ? (
                          <img
                            src={getPerfumeImage(perfume.name)!}
                            alt={perfume.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                            loading="lazy"
                            onError={(e) => {
                              // Fallback to icon if image fails to load
                              e.currentTarget.style.display = "none";
                              const fallbackIcon =
                                e.currentTarget.nextElementSibling;
                              if (fallbackIcon) {
                                (fallbackIcon as HTMLElement).style.display =
                                  "block";
                              }
                            }}
                          />
                        ) : null}
                        <Icon
                          icon="lucide:sparkles"
                          className="w-12 h-12 text-white/30 group-hover:text-white/60 group-hover:scale-110 transition-all duration-500"
                          style={{
                            display: getPerfumeImage(perfume.name)
                              ? "none"
                              : "block",
                          }}
                        />
                      </div>

                      <h4 className="font-bold text-white text-center leading-tight mb-2 group-hover:text-blue-200 transition-colors">
                        {perfume.name}
                      </h4>

                      {/* Feature Badges - Moved outside image, below title */}
                      <div className="flex justify-center gap-1.5 mb-2">
                        {perfume.fabricSafe && (
                          <div
                            className="p-1.5 bg-green-500/30 border border-green-400/40 rounded-full text-green-300"
                            title="Fabric Safe"
                          >
                            <Icon icon="lucide:shield" width="14" height="14" />
                          </div>
                        )}
                        {perfume.longLasting && (
                          <div
                            className="p-1.5 bg-blue-500/30 border border-blue-400/40 rounded-full text-blue-300"
                            title="Long Lasting"
                          >
                            <Icon icon="lucide:clock" width="14" height="14" />
                          </div>
                        )}
                        {perfume.premium && (
                          <div
                            className="p-1.5 bg-purple-500/30 border border-purple-400/40 rounded-full text-purple-300"
                            title="Premium"
                          >
                            <Icon icon="lucide:award" width="14" height="14" />
                          </div>
                        )}
                      </div>

                      <div className="flex justify-center">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-white/50 bg-white/10 px-2 py-0.5 rounded-full">
                          {perfume.category}
                        </span>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center text-white/50">
                    <Icon
                      icon="lucide:search-x"
                      className="w-12 h-12 mx-auto mb-3 opacity-50"
                    />
                    <p className="text-lg">
                      No perfumes found matching your criteria
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerfumeSelection;
