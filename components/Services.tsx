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
      icon: <ShirtIcon size={28} className="text-blue-600" />,
      title: "Laundry Reguler",
      description: "Cuci kering lipat standar. Bersih & wangi.",
    },
    {
      icon: <Timer size={28} className="text-blue-600" />,
      title: "Laundry Express",
      description: "Cuci cepat 3–6 jam. Tetap maksimal.",
    },
    {
      icon: <Droplets size={28} className="text-blue-600" />,
      title: "Dry Cleaning",
      description: "Untuk jas & bahan sensitif.",
    },
    {
      icon: <Package size={28} className="text-blue-600" />,
      title: "Cuci Sepatu",
      description: "Aman untuk berbagai jenis sepatu.",
    },
    {
      icon: <Sparkles size={28} className="text-blue-600" />,
      title: "Cuci Karpet",
      description: "Bersih & harum dengan mesin khusus.",
    },
    {
      icon: <Zap size={28} className="text-blue-600" />,
      title: "Setrika Saja",
      description: "Rapi dengan setrika profesional.",
    },
  ];

  return (
    <section
      id="layanan"
      className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-100 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-200 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">
            Layanan Kami
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-3 rounded-full"></div>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Beragam layanan laundry profesional untuk berbagai kebutuhan Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer max-w-xs sm:max-w-none"
            >
              <div className="shrink-0">{service.icon}</div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
