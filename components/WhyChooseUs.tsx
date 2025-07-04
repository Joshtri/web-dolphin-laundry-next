"use client"
import { useEffect, useState } from "react"
import type React from "react"

import { DollarSign, Clock, Leaf, Shield, Users, Settings, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

import img1 from "@/public/assets/images/2021-05-05.jpg"
import img2 from "@/public/assets/images/PoTaTo$999plutoGhost88.jpg"
import img3 from "@/public/assets/images/jellyHorse73ZpQ.jpg"
import img4 from "@/public/assets/images/klwh38dnbvOQpwlaksA29x.jpg"
import img5 from "@/public/assets/images/n4gg4bl3_r4in93ck_zuul.jpg"

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Shield size={30} className="text-yellow-500" />,
      title: "Layanan Berkualitas",
      description:
        "Kami menggunakan deterjen berkualitas tinggi dan proses pencucian yang teliti untuk hasil yang maksimal.",
    },
    {
      icon: <Clock size={30} className="text-yellow-500" />,
      title: "Layanan Cepat",
      description: "Proses cuci reguler 1-2 hari, express 3-6 jam. Tepat waktu sesuai janji.",
    },
    {
      icon: <DollarSign size={30} className="text-yellow-500" />,
      title: "Harga Terjangkau",
      description: "Tarif yang kompetitif dengan kualitas premium. Berbagai paket sesuai kebutuhan dan budget.",
    },

    {
      icon: <Users size={30} className="text-yellow-500" />,
      title: "Staff Profesional",
      description: "Tenaga kerja terlatih dan berpengalaman yang menangani pakaian Anda dengan hati-hati.",
    },
  ]

  // Using placeholder images since we can't access the actual files
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    // Placeholder for additional images
    
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-slide with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  const handleSlideChange = (newIndex: number | ((prev: number) => number)) => {
    setIsTransitioning(true)
    setTimeout(() => {
      if (typeof newIndex === "function") {
        setCurrentIndex(newIndex)
      } else {
        setCurrentIndex(newIndex)
      }
      setIsTransitioning(false)
    }, 150)
  }

  const prevSlide = () => handleSlideChange((prev) => (prev - 1 + images.length) % images.length)

  const nextSlide = () => handleSlideChange((prev) => (prev + 1) % images.length)

  return (
    <section
      id="mengapa-memilih-kami"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header with enhanced animation */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6 animate-slide-down">
            Mengapa Memilih Kami?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full animate-scale-in"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
            Kepercayaan pelanggan adalah prioritas utama kami. Berikut alasan mengapa Anda harus memilih Dolphin Laundry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Slideshow */}
          <div className="relative group animate-slide-in-left">
            <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={images[currentIndex] || "/placeholder.svg"}
                  alt="Dolphin Laundry"
                  fill
                  className={`object-cover transition-all duration-500 ease-in-out transform ${
                    isTransitioning ? "scale-110 opacity-0 blur-sm" : "scale-100 opacity-100 blur-0"
                  }`}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Enhanced Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-0 rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:shadow-xl"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-blue-600" size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-0 rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:shadow-xl"
              aria-label="Next slide"
            >
              <ChevronRight className="text-blue-600" size={20} />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-white shadow-lg scale-125" : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Features List */}
          <div className="animate-slide-in-right">
            <ul className="space-y-8">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-6 group animate-fade-in-up hover:transform hover:translate-x-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">{feature.icon}</div>
                    </div>
                    {/* Connecting line */}
                    <div className="absolute top-16 left-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-200 to-transparent -translate-x-1/2 opacity-30"></div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-blue-700 mb-2 group-hover:text-blue-800 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out 0.3s both;
        }

        .animate-fade-in-delayed {
          animation: fade-in-up 0.8s ease-out 0.4s both;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out 0.2s both;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.4s both;
        }

        .clock-spin {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}

export default WhyChooseUs
