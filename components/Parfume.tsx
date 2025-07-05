"use client";
import type React from "react";
import { useState } from "react";
import {
  Search,
  Sparkles,
  Star,
  Shield,
  Clock,
  Award,
  ChevronUp,
  ChevronDown,
  Filter,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PerfumeSelection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [showPopular, setShowPopular] = useState(false);
  const [showFeatureDropdown, setShowFeatureDropdown] = useState(false);
  const [showFeatureExplanation, setShowFeatureExplanation] = useState(false);

  const maxVisible = 12;

  const perfumes = [
    {
      name: "Kenzo Batang",
      category: "Premium",
      popular: true,
      fabricSafe: true,
      longLasting: true,
      premium: true,
    },
    {
      name: "Kenzo Bunga",
      category: "Premium",
      popular: true,
      fabricSafe: true,
      longLasting: true,
      premium: true,
    },
    {
      name: "Kenzo Daun",
      category: "Premium",
      popular: false,
      fabricSafe: true,
      longLasting: true,
      premium: true,
    },
    {
      name: "Jenifer Lopez Pollo",
      category: "Celebrity",
      popular: true,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "Oxygen",
      category: "Fresh",
      popular: false,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "Lilac",
      category: "Floral",
      popular: true,
      fabricSafe: true,
      longLasting: true,
      premium: false,
    },
    {
      name: "Black Magic",
      category: "Mysterious",
      popular: false,
      fabricSafe: true,
      longLasting: true,
      premium: true,
    },
    {
      name: "Vanilla",
      category: "Sweet",
      popular: true,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "Lavender",
      category: "Floral",
      popular: true,
      fabricSafe: true,
      longLasting: true,
      premium: false,
    },
    {
      name: "Bulgary",
      category: "Premium",
      popular: false,
      fabricSafe: true,
      longLasting: true,
      premium: true,
    },
    {
      name: "Aqua Fresh Green Tea",
      category: "Fresh",
      popular: true,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "The Blue Akasia",
      category: "Fresh",
      popular: false,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "Cuddle",
      category: "Sweet",
      popular: true,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "Casablanca",
      category: "Premium",
      popular: false,
      fabricSafe: true,
      longLasting: true,
      premium: true,
    },
    {
      name: "Mix Fruit",
      category: "Fruity",
      popular: true,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "Syahrini",
      category: "Celebrity",
      popular: false,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "Mint Melati Keraton",
      category: "Fresh",
      popular: true,
      fabricSafe: true,
      longLasting: true,
      premium: false,
    },
    {
      name: "Bubble Gum",
      category: "Sweet",
      popular: false,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "Blossom",
      category: "Floral",
      popular: true,
      fabricSafe: true,
      longLasting: true,
      premium: false,
    },
    {
      name: "Forbidden Rose",
      category: "Floral",
      popular: false,
      fabricSafe: true,
      longLasting: true,
      premium: true,
    },
    {
      name: "Molto Blue Atlantic",
      category: "Fresh",
      popular: true,
      fabricSafe: true,
      longLasting: true,
      premium: false,
    },
    {
      name: "Dunhill",
      category: "Premium",
      popular: false,
      fabricSafe: true,
      longLasting: true,
      premium: true,
    },
    {
      name: "Orange",
      category: "Fruity",
      popular: true,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "Strawberry",
      category: "Fruity",
      popular: true,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "Elegance",
      category: "Premium",
      popular: false,
      fabricSafe: true,
      longLasting: true,
      premium: true,
    },
    {
      name: "Soft Lavender",
      category: "Floral",
      popular: true,
      fabricSafe: true,
      longLasting: true,
      premium: false,
    },
    {
      name: "Baby Berry Miss Cherie",
      category: "Sweet",
      popular: false,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "Gold Lavender Angelina Jolie",
      category: "Celebrity",
      popular: true,
      fabricSafe: true,
      longLasting: true,
      premium: true,
    },
    {
      name: "Bulbery",
      category: "Fruity",
      popular: false,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "Apple Anasui",
      category: "Fruity",
      popular: true,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "Kispray",
      category: "Fresh",
      popular: false,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "Downi",
      category: "Fresh",
      popular: true,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "Shine Apple",
      category: "Fruity",
      popular: false,
      fabricSafe: true,
      longLasting: false,
      premium: false,
    },
    {
      name: "Jeruk Nipis Kopi",
      category: "Fresh",
      popular: true,
      fabricSafe: true,
      longLasting: true,
      premium: false,
    },
  ];

  const categories = [
    "Semua",
    "Premium",
    "Celebrity",
    "Fresh",
    "Floral",
    "Sweet",
    "Fruity",
    "Mysterious",
  ];

  const features = [
    {
      id: "fabricSafe",
      name: "Aman untuk Semua Kain",
      icon: <Shield size={14} />,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      id: "longLasting",
      name: "Aroma Tahan Lama",
      icon: <Clock size={14} />,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      id: "premium",
      name: "Formula Premium",
      icon: <Award size={14} />,
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
  ];

  const filteredPerfumes = perfumes.filter((perfume) => {
    const matchesSearch = perfume.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "Semua" || perfume.category === selectedCategory;

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

  const popularPerfumes = perfumes.filter((p) => p.popular).slice(0, 8);

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((f) => f !== featureId)
        : [...prev, featureId]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategory("Semua");
    setSelectedFeatures([]);
    setSearchTerm("");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const perfumeCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <motion.section
      id="perfume-selection"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-100 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-5"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-5"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            FREE Parfum Dipilih Sendiri
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            🌟 Yang membedakan kami dari laundry lain:{" "}
            <strong>
              GRATIS parfum premium yang bebas dipilih sendiri oleh pelanggan!
            </strong>{" "}
            Berikan aroma favorit Anda pada baju cucian yang dicuci terpisah
            tidak dicampur.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="relative max-w-md mx-auto mb-6"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              {/* Search Input */}
              <motion.div
                className="relative flex-1"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Cari parfum..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                />
              </motion.div>

              {/* Filter Button */}
              <div className="relative">
                <motion.button
                  onClick={() => setShowFeatureDropdown(!showFeatureDropdown)}
                  className="p-2 bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl shadow-md hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: showFeatureDropdown ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Filter size={18} />
                  </motion.div>
                </motion.button>

                {/* Dropdown */}
                <AnimatePresence>
                  {showFeatureDropdown && (
                    <motion.div
                      className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="p-4 space-y-2">
                        <p className="text-sm text-gray-600 font-medium mb-1">
                          Filter berdasarkan fitur:
                        </p>
                        {features.map((feature, index) => (
                          <motion.button
                            key={feature.id}
                            onClick={() => toggleFeature(feature.id)}
                            className={`flex items-center w-full justify-between px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                              selectedFeatures.includes(feature.id)
                                ? `${feature.color} text-white`
                                : "text-gray-700 hover:bg-blue-50"
                            }`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center gap-2">
                              {feature.icon}
                              <span>{feature.name}</span>
                            </div>
                            <AnimatePresence>
                              {selectedFeatures.includes(feature.id) && (
                                <motion.div
                                  className="w-2 h-2 rounded-full bg-white"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                  transition={{ duration: 0.2 }}
                                />
                              )}
                            </AnimatePresence>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-6"
            variants={itemVariants}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                    : "bg-white/80 backdrop-blur-sm text-gray-700 border border-white/50 hover:bg-blue-50"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Clear Filters */}
          <AnimatePresence>
            {(selectedCategory !== "Semua" ||
              selectedFeatures.length > 0 ||
              searchTerm) && (
              <motion.button
                onClick={clearAllFilters}
                className="text-sm text-blue-600 hover:text-blue-700 underline mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                whileHover={{ scale: 1.05 }}
              >
                Hapus semua filter
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Popular Perfumes Section */}
        <AnimatePresence>
          {selectedCategory === "Semua" &&
            searchTerm === "" &&
            selectedFeatures.length === 0 && (
              <motion.div
                className="mb-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <motion.button
                    onClick={() => setShowPopular((prev) => !prev)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm mb-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <Star className="text-yellow-500 mr-2" size={18} />
                    </motion.div>
                    {showPopular
                      ? "Sembunyikan Parfum Populer"
                      : "Tampilkan Parfum Populer"}
                    <motion.div
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 1,
                      }}
                    >
                      <Star className="text-yellow-500 ml-2" size={18} />
                    </motion.div>
                  </motion.button>
                </div>

                <AnimatePresence>
                  {showPopular && (
                    <motion.div
                      className="flex flex-wrap justify-center gap-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {popularPerfumes.map((perfume, index) => (
                        <motion.div
                          key={index}
                          className="group bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-white"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <div className="flex items-center space-x-2">
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                              }}
                            >
                              <Sparkles size={14} className="text-yellow-300" />
                            </motion.div>
                            <span className="text-sm font-medium">
                              {perfume.name}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
        </AnimatePresence>

        {/* All Perfumes - Compact Grid */}
        <motion.div
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50"
          variants={itemVariants}
        >
          <motion.h3
            className="text-xl font-bold text-gray-800 mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={filteredPerfumes.length} // Re-animate when count changes
            transition={{ duration: 0.5 }}
          >
            Semua Pilihan Parfum ({filteredPerfumes.length})
          </motion.h3>

          <AnimatePresence mode="wait">
            {filteredPerfumes.length > 0 ? (
              <motion.div
                className="flex flex-wrap gap-2 justify-center"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
                key={`${selectedCategory}-${selectedFeatures.join(
                  "-"
                )}-${searchTerm}`}
              >
                {(showAll
                  ? filteredPerfumes
                  : filteredPerfumes.slice(0, maxVisible)
                ).map((perfume, index) => (
                  <motion.div
                    key={`${perfume.name}-${index}`}
                    className="group bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-white/50 hover:shadow-md transition-all duration-300 hover:bg-blue-50 hover:border-blue-200"
                    variants={perfumeCardVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                    layout
                  >
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <motion.div
                          animate={{ rotate: perfume.popular ? [0, 360] : 0 }}
                          transition={{
                            duration: perfume.popular ? 2 : 0,
                            repeat: perfume.popular
                              ? Number.POSITIVE_INFINITY
                              : 0,
                            ease: "linear",
                          }}
                        >
                          <Sparkles
                            size={12}
                            className={`${
                              perfume.popular
                                ? "text-yellow-500"
                                : "text-blue-500"
                            } group-hover:scale-110 transition-transform duration-300`}
                          />
                        </motion.div>
                        <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                          {perfume.name}
                        </span>
                      </div>

                      {/* Feature Icons */}
                      <motion.div
                        className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                      >
                        {perfume.fabricSafe && (
                          <motion.div whileHover={{ scale: 1.2 }}>
                            <Shield size={10} className="text-green-500" />
                          </motion.div>
                        )}
                        {perfume.longLasting && (
                          <motion.div whileHover={{ scale: 1.2 }}>
                            <Clock size={10} className="text-blue-500" />
                          </motion.div>
                        )}
                        {perfume.premium && (
                          <motion.div whileHover={{ scale: 1.2 }}>
                            <Award size={10} className="text-purple-500" />
                          </motion.div>
                        )}
                      </motion.div>

                      {/* Category Badge */}
                      <motion.span
                        className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                      >
                        {perfume.category}
                      </motion.span>

                      {/* Popular Star */}
                      {perfume.popular && (
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        >
                          <Star
                            size={10}
                            className="text-yellow-500 fill-current"
                          />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Search className="mx-auto text-gray-400 mb-3" size={32} />
                </motion.div>
                <p className="text-gray-600">Parfum tidak ditemukan</p>
                <p className="text-sm text-gray-500 mt-2">
                  Coba ubah filter atau kata kunci pencarian
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Show More / Less Button */}
          <AnimatePresence>
            {filteredPerfumes.length > maxVisible && (
              <motion.div
                className="text-center mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <motion.button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showAll ? (
                    <>
                      Sembunyikan{" "}
                      <motion.div
                        animate={{ y: [-2, 2, -2] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        <ChevronUp size={16} />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      Lihat Lebih Banyak{" "}
                      <motion.div
                        animate={{ y: [-2, 2, -2] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Feature Summary Accordion */}
        <motion.div className="mt-12 max-w-4xl mx-auto" variants={itemVariants}>
          <motion.button
            onClick={() => setShowFeatureExplanation(!showFeatureExplanation)}
            className="w-full flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-md border border-white/50 hover:bg-white transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h4 className="text-lg font-bold text-gray-800">
              Keterangan Fitur
            </h4>
            <motion.div
              animate={{ rotate: showFeatureExplanation ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {showFeatureExplanation ? (
                <ChevronUp className="text-blue-600" size={20} />
              ) : (
                <ChevronDown className="text-blue-600" size={20} />
              )}
            </motion.div>
          </motion.button>

          {/* Accordion Content */}
          <AnimatePresence>
            {showFeatureExplanation && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm bg-white/40 backdrop-blur-sm rounded-b-xl px-6 py-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    className="flex items-start space-x-3 p-4 bg-white/70 border border-white/60 rounded-xl shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <motion.div
                      className={`p-2 ${feature.color} rounded-full text-white`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">
                        {feature.name}
                      </p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {feature.id === "fabricSafe" &&
                          "Tidak merusak serat kain"}
                        {feature.id === "longLasting" &&
                          "Wangi bertahan 3-5 hari"}
                        {feature.id === "premium" && "Kualitas import terbaik"}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PerfumeSelection;
