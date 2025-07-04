"use client";
import type React from "react";
import {
  ShirtIcon,
  Droplets,
  Sparkles,
  Timer,
  Package,
  Zap,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <ShirtIcon size={40} className="text-blue-600 mx-auto" />,
      title: "Laundry Reguler",
      description:
        "Paket cuci kering lipat standar dengan hasil yang bersih dan wangi. Cocok untuk pakaian sehari-hari.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Timer size={40} className="text-blue-600 mx-auto" />,
      title: "Laundry Express",
      description:
        "Layanan cuci cepat 3-6 jam untuk kebutuhan mendesak. Kualitas tetap terjaga dengan hasil maksimal.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Droplets size={40} className="text-blue-600 mx-auto" />,
      title: "Dry Cleaning",
      description:
        "Pembersihan khusus untuk pakaian berbahan sensitif seperti jas, gaun, dan pakaian formal lainnya.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Package size={40} className="text-blue-600 mx-auto" />,
      title: "Cuci Sepatu",
      description:
        "Layanan pembersihan sepatu dengan teknik khusus untuk berbagai jenis material sepatu.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Sparkles size={40} className="text-blue-600 mx-auto" />,
      title: "Cuci Karpet",
      description:
        "Pembersihan karpet dengan mesin khusus yang dapat menghilangkan noda membandel dan bau tidak sedap.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Zap size={40} className="text-blue-600 mx-auto" />,
      title: "Setrika Saja",
      description:
        "Layanan setrika profesional untuk pakaian yang sudah bersih namun perlu dirapikan.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-100 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-200 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Layanan Kami
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan berbagai layanan laundry berkualitas tinggi untuk
            memenuhi kebutuhan Anda
          </p>
          <p className="text-sm text-blue-600 font-medium">
            ✨ Semua layanan dengan jaminan kualitas terbaik
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Card Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Icon Container */}
              <div className="relative p-8">
                <div
                  className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:w-16 transition-all duration-500"></div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Services;
