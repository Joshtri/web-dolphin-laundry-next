"use client";
import React, { useState } from "react";
import {
  Droplet,
  Zap,
  Leaf,
  ShirtIcon,
  ClipboardList,
  Clock,
} from "lucide-react";
import pricelistData from "@/data/pricelist.json";

interface PriceItem {
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
  items: PriceItem[];
}

const PriceList: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<string>("Tampilkan Semua");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Droplet":
        return <Droplet />;
      case "Zap":
        return <Zap />;
      case "Leaf":
        return <Leaf />;
      case "ShirtIcon":
        return <ShirtIcon />;
      default:
        return <Droplet />;
    }
  };

  const pricelist: PriceCategory[] = pricelistData.map((category) => ({
    ...category,
    icon: getIcon(category.icon),
  }));

  const handleCategoryChange = (category: string): void => {
    setActiveCategory(category);
  };

  return (
    <section id="daftar-harga" className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Daftar Harga Laundry
          </h2>
          <p className="text-gray-600 text-lg">
            Pilih layanan yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === "Tampilkan Semua"
                ? "bg-blue-500 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:border-blue-300"
            }`}
            onClick={() => handleCategoryChange("Tampilkan Semua")}
          >
            <ClipboardList size={18} />
            <span>Tampilkan Semua</span>
          </button>
          {pricelist.map((category, index) => (
            <button
              key={index}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.category
                  ? "bg-blue-500 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:border-blue-300"
              }`}
              onClick={() => handleCategoryChange(category.category)}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.category}</span>
            </button>
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
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden ${
                    filtered.length === 1 ? "w-full md:w-[400px]" : ""
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <span className="text-blue-600 text-xl">
                          {category.icon}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                      {category.category}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 text-center">
                      {category.description}
                    </p>

                    <div className="space-y-3 max-h-64 overflow-y-auto pr-2 price-list-scroll scroll-indicator">
                      {category.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="border-b border-gray-200 pb-3 mb-3 last:border-b-0"
                        >
                          <div className="text-gray-700 font-medium text-sm mb-2">
                            {item.name}
                          </div>

                          {item.price && (
                            <div className="flex flex-col space-y-1">
                              {item.duration && (
                                <span className="text-xs text-blue-500 font-medium flex items-center">
                                  <Clock size={12} className="mr-1" />
                                  {item.duration}
                                </span>
                              )}
                              <span className="text-green-600 font-bold text-sm">
                                {item.price}
                              </span>
                            </div>
                          )}

                          {item.services && (
                            <div className="space-y-2">
                              {item.services.map((service, serviceIdx) => (
                                <div
                                  key={serviceIdx}
                                  className="bg-gray-50 p-2 rounded text-xs"
                                >
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <div className="font-semibold text-gray-600">
                                        {service.type}
                                      </div>
                                      {service.duration && (
                                        <span className="text-blue-500 font-medium flex items-center">
                                          <Clock size={10} className="mr-1" />
                                          {service.duration}
                                        </span>
                                      )}
                                    </div>
                                    <span className="text-green-600 font-bold">
                                      {service.price}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default PriceList;
