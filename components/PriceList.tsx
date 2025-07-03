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

const Pricelist: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<string>("Tampilkan Semua");

  // Mapping icon names to actual icon components
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

  // Transform JSON data to include actual icon components
  const pricelist: PriceCategory[] = pricelistData.map((category) => ({
    ...category,
    icon: getIcon(category.icon),
  }));

  const handleCategoryChange = (category: string): void => {
    setActiveCategory(category);
  };

  return (
    <section className="py-10 bg-gray-50 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-blue-500 mb-6 text-center">
        Daftar Harga
      </h2>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center space-x-2 mb-6">
        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-white mb-2 ${
            activeCategory === "Tampilkan Semua"
              ? "bg-blue-500"
              : "bg-gray-300 hover:bg-blue-400"
          } transition duration-300`}
          onClick={() => handleCategoryChange("Tampilkan Semua")}
        >
          <ClipboardList />
          <span>Tampilkan Semua</span>
        </button>
        {pricelist.map((category, index) => (
          <button
            key={index}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-white mb-2 ${
              activeCategory === category.category
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-blue-400"
            } transition duration-300`}
            onClick={() => handleCategoryChange(category.category)}
          >
            <span className="text-lg">{category.icon}</span>
            <span>{category.category}</span>
          </button>
        ))}
      </div>

      {/* Pricelist Items */}
      <div className="flex justify-center w-full">
        <div className="w-full max-w-md md:max-w-2xl">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            {pricelist
              .filter(
                (category) =>
                  activeCategory === "Tampilkan Semua" ||
                  category.category === activeCategory
              )
              .map((category, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-2xl font-bold text-blue-500 mb-2 text-center">
                    {category.category}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 text-center">
                    {category.description}
                  </p>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="border-b border-gray-200 pb-3 mb-3"
                      >
                        <div className="text-gray-700 font-medium text-lg mb-2">
                          {item.name}
                        </div>

                        {/* Regular items with single price */}
                        {item.price && (
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            {item.duration && (
                              <span className="text-sm text-blue-500 font-medium flex items-center">
                                <Clock size={14} className="mr-2" />
                                Selesai dalam: {item.duration}
                              </span>
                            )}
                            <span className="text-yellow-600 font-bold text-lg mt-2 sm:mt-0">
                              {item.price}
                            </span>
                          </div>
                        )}

                        {/* Items with multiple services */}
                        {item.services && (
                          <div className="space-y-2">
                            {item.services.map((service, serviceIdx) => (
                              <div
                                key={serviceIdx}
                                className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-50 p-3 rounded-lg"
                              >
                                <div>
                                  <div className="text-sm font-semibold text-gray-600">
                                    {service.type}
                                  </div>
                                  {service.duration && (
                                    <span className="text-sm text-blue-500 font-medium flex items-center">
                                      <Clock size={12} className="mr-1" />
                                      Selesai dalam: {service.duration}
                                    </span>
                                  )}
                                </div>
                                <span className="text-yellow-600 font-bold text-lg mt-1 sm:mt-0">
                                  {service.price}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricelist;
