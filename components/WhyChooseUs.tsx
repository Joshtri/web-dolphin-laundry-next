"use client";
import { useEffect, useState } from "react";
import type React from "react";
import { usePathname } from "next/navigation";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import img1 from "@/public/assets/images/2021-05-05.jpg";
import img2 from "@/public/assets/images/PoTaTo$999plutoGhost88.jpg";
import img3 from "@/public/assets/images/jellyHorse73ZpQ.jpg";
import img4 from "@/public/assets/images/klwh38dnbvOQpwlaksA29x.jpg";
import img5 from "@/public/assets/images/n4gg4bl3_r4in93ck_zuul.jpg";

const WhyChooseUs: React.FC = () => {
  const t = useTranslations("whyChooseUs");
  const pathname = usePathname();

  // Check if we're on the dedicated page
  const isStandalonePage = pathname?.includes("mengapa-memilih-kami");

  const features = [
    {
      icon: (
        <Icon
          icon="lucide:leaf"
          width="30"
          height="30"
          className="text-yellow-500"
        />
      ),
      title: t("features.freePerfume.title"),
      description: t("features.freePerfume.description"),
    },
    {
      icon: (
        <Icon
          icon="lucide:shield"
          width="30"
          height="30"
          className="text-yellow-500"
        />
      ),
      title: t("features.separateWash.title"),
      description: t("features.separateWash.description"),
    },
    {
      icon: (
        <Icon
          icon="lucide:clock"
          width="30"
          height="30"
          className="text-yellow-500"
        />
      ),
      title: t("features.expressService.title"),
      description: t("features.expressService.description"),
    },
    {
      icon: (
        <Icon
          icon="lucide:dollar-sign"
          width="30"
          height="30"
          className="text-yellow-500"
        />
      ),
      title: t("features.affordablePrice.title"),
      description: t("features.affordablePrice.description"),
    },
    {
      icon: (
        <Icon
          icon="lucide:users"
          width="30"
          height="30"
          className="text-yellow-500"
        />
      ),
      title: t("features.professionalStaff.title"),
      description: t("features.professionalStaff.description"),
    },
  ];

  // Using placeholder images since we can't access the actual files
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    // Placeholder for additional images
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSlideChange = (newIndex: number | ((prev: number) => number)) => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (typeof newIndex === "function") {
        setCurrentIndex(newIndex);
      } else {
        setCurrentIndex(newIndex);
      }
      setIsTransitioning(false);
    }, 150);
  };

  const prevSlide = () =>
    handleSlideChange((prev) => (prev - 1 + images.length) % images.length);

  const nextSlide = () =>
    handleSlideChange((prev) => (prev + 1) % images.length);

  return (
    <section
      id="mengapa-memilih-kami"
      className={`${
        isStandalonePage ? "py-30" : "py-24"
      } bg-gradient-to-b from-blue-800 to-blue-600 relative overflow-hidden`}
    >
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

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header with enhanced animation */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 animate-slide-down tracking-tight">
            {t("title")}
          </h2>
          <div className="w-32 h-1.5 bg-white/50 mx-auto mb-8 rounded-full animate-scale-in"></div>
          <p className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed font-light">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Slideshow - Blue Theme */}
          <div className="relative group animate-slide-in-left">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border-4 border-white/20 p-2 bg-white/10 backdrop-blur-sm">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src={images[currentIndex] || "/placeholder.svg"}
                  alt="Dolphin Laundry"
                  fill
                  className={`object-cover transition-all duration-700 ease-in-out transform ${
                    isTransitioning
                      ? "scale-110 opacity-80 blur-sm"
                      : "scale-105 opacity-100 blur-0"
                  }`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
              </div>
            </div>

            {/* Enhanced Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white text-blue-600 rounded-full p-4 shadow-lg hover:bg-blue-50 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <Icon icon="lucide:chevron-left" width="24" height="24" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white text-blue-600 rounded-full p-4 shadow-lg hover:bg-blue-50 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <Icon icon="lucide:chevron-right" width="24" height="24" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                    index === currentIndex
                      ? "bg-white w-8"
                      : "bg-white/40 w-3 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Features List - Blue Theme */}
          <div className="animate-slide-in-right">
            <ul className="space-y-5">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-6 group animate-fade-in-up p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative shrink-0">
                    <div className="p-4 bg-white rounded-2xl shadow-lg border border-white/50 text-blue-600 group-hover:scale-110 transition-all duration-300">
                      {/* Icon with transition */}
                      <>{feature.icon}</>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider - Seamlessly connects to Testimonials */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] sm:h-[100px]"
          style={{ display: "block", marginBottom: "-1px" }}
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,738.38,14.66,656.12-2.68,570.32-1.67,487.93,15.05c-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-blue-600"
          ></path>
        </svg>
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
  );
};

export default WhyChooseUs;
