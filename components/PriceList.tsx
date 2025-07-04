"use client"
import type React from "react"
import { useState } from "react"
import { Droplet, Zap, Leaf, ShirtIcon, ClipboardList, Clock } from "lucide-react"
import pricelistData from "@/data/pricelist.json" // Adjust the path as necessary
// Real data from user
interface PriceItem {
  name: string
  price?: string
  duration?: string
  services?: {
    type: string
    price: string
    duration: string
  }[]
}

interface PriceCategory {
  category: string
  icon: React.ReactNode
  description: string
  items: PriceItem[]
}

const PriceList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Tampilkan Semua")

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Droplet":
        return <Droplet />
      case "Zap":
        return <Zap />
      case "Leaf":
        return <Leaf />
      case "ShirtIcon":
        return <ShirtIcon />
      default:
        return <Droplet />
    }
  }

  const pricelist: PriceCategory[] = pricelistData.map((category) => ({
    ...category,
    icon: getIcon(category.icon),
  }))

  const handleCategoryChange = (category: string): void => {
    setActiveCategory(category)
  }

  return (
    <section id="daftar-harga" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Daftar Harga Laundry</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pilih layanan yang sesuai dengan kebutuhan Anda dengan harga terjangkau dan kualitas terbaik
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            className={`flex items-center space-x-2 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeCategory === "Tampilkan Semua"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:border-blue-300 shadow-sm"
            }`}
            onClick={() => handleCategoryChange("Tampilkan Semua")}
          >
            <ClipboardList size={18} />
            <span>Tampilkan Semua</span>
          </button>
          {pricelist.map((category, index) => (
            <button
              key={index}
              className={`flex items-center space-x-2 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category.category
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:border-blue-300 shadow-sm"
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
            (category) => activeCategory === "Tampilkan Semua" || category.category === activeCategory,
          )
          return (
            <div
              className={`${
                filtered.length === 1 ? "flex justify-center" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              } gap-6 max-w-6xl mx-auto`}
            >
              {filtered.map((category, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    filtered.length === 1 ? "w-full md:w-[450px]" : ""
                  }`}
                >
                  {/* Card Header */}
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-blue-500 rounded-lg shadow-sm">
                        <span className="text-white text-xl">{category.icon}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{category.category}</h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">{category.description}</p>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="space-y-4 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                      {category.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors duration-200"
                        >
                          <div className="text-gray-800 font-semibold text-sm mb-3">{item.name}</div>

                          {item.price && (
                            <div className="flex flex-col space-y-2">
                              {item.duration && (
                                <span className="text-xs text-blue-600 font-medium flex items-center">
                                  <Clock size={12} className="mr-1" />
                                  {item.duration}
                                </span>
                              )}
                              <span className="text-green-600 font-bold text-sm">{item.price}</span>
                            </div>
                          )}

                          {item.services && (
                            <div className="space-y-2">
                              {item.services.map((service, serviceIdx) => (
                                <div key={serviceIdx} className="bg-white p-3 rounded border border-gray-200">
                                  <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                      <div className="font-semibold text-gray-700 text-xs mb-1">{service.type}</div>
                                      {service.duration && (
                                        <span className="text-blue-600 font-medium flex items-center text-xs">
                                          <Clock size={10} className="mr-1" />
                                          {service.duration}
                                        </span>
                                      )}
                                    </div>
                                    <span className="text-green-600 font-bold text-xs ml-2">{service.price}</span>
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
          )
        })()}
      </div>

      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 #f1f5f9;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
    </section>
  )
}

export default PriceList
