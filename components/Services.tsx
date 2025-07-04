"use client";
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
      icon: <ShirtIcon size={40} className="text-blue-500 mx-auto" />,
      title: "Laundry Reguler",
      description:
        "Paket cuci kering lipat standar dengan hasil yang bersih dan wangi. Cocok untuk pakaian sehari-hari.",
    },
    {
      icon: <Timer size={40} className="text-blue-500 mx-auto" />,
      title: "Laundry Express",
      description:
        "Layanan cuci cepat 3-6 jam untuk kebutuhan mendesak. Kualitas tetap terjaga dengan hasil maksimal.",
    },
    {
      icon: <Droplets size={40} className="text-blue-500 mx-auto" />,
      title: "Dry Cleaning",
      description:
        "Pembersihan khusus untuk pakaian berbahan sensitif seperti jas, gaun, dan pakaian formal lainnya.",
    },
    {
      icon: <Package size={40} className="text-blue-500 mx-auto" />,
      title: "Cuci Sepatu",
      description:
        "Layanan pembersihan sepatu dengan teknik khusus untuk berbagai jenis material sepatu.",
    },
    {
      icon: <Sparkles size={40} className="text-blue-500 mx-auto" />,
      title: "Cuci Karpet",
      description:
        "Pembersihan karpet dengan mesin khusus yang dapat menghilangkan noda membandel dan bau tidak sedap.",
    },
    {
      icon: <Zap size={40} className="text-blue-500 mx-auto" />,
      title: "Setrika Saja",
      description:
        "Layanan setrika profesional untuk pakaian yang sudah bersih namun perlu dirapikan.",
    },
  ];

  return (
    <section id="layanan" className="py-20 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-500 animate-fade-in mb-4">
          Layanan Kami
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Kami menyediakan berbagai layanan laundry berkualitas tinggi untuk
          memenuhi kebutuhan Anda
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mt-4 text-gray-800">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
