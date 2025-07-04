"use client";
import { DollarSign, Clock, Leaf, Shield, Users, Settings } from "lucide-react";
import Image from "next/image";
import dLPlace from "@/public/assets/images/2021-05-05.jpg";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Shield size={30} className="text-yellow-500" />,
      title: "Layanan Berkualitas",
      description:
        "Kami menggunakan deterjen berkualitas tinggi dan proses pencucian yang teliti untuk hasil yang maksimal.",
    },
    {
      icon: <Clock size={30} className="text-yellow-500 clock-spin" />,
      title: "Layanan Cepat",
      description:
        "Proses cuci reguler 1-2 hari, express 3-6 jam. Tepat waktu sesuai janji.",
    },
    {
      icon: <DollarSign size={30} className="text-yellow-500" />,
      title: "Harga Terjangkau",
      description:
        "Tarif yang kompetitif dengan kualitas premium. Berbagai paket sesuai kebutuhan dan budget.",
    },
    {
      icon: <Leaf size={30} className="text-yellow-500" />,
      title: "Antar Jemput Gratis",
      description:
        "Layanan antar jemput gratis untuk area Kupang dan sekitarnya dengan minimum pembelian tertentu.",
    },
    {
      icon: <Users size={30} className="text-yellow-500" />,
      title: "Staff Profesional",
      description:
        "Tenaga kerja terlatih dan berpengalaman yang menangani pakaian Anda dengan hati-hati.",
    },
    {
      icon: <Settings size={30} className="text-yellow-500" />,
      title: "Peralatan Modern",
      description:
        "Menggunakan mesin cuci dan pengering modern untuk hasil yang optimal dan perawatan pakaian yang baik.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-blue-500 text-center mb-4">
          Mengapa Memilih Kami?
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Kepercayaan pelanggan adalah prioritas utama kami. Berikut alasan
          mengapa Anda harus memilih Dolphin Laundry
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Gambar */}
          <div className="flex justify-center">
            <Image
              src={dLPlace}
              alt="Dolphin Laundry"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full"
            />
          </div>

          {/* Deskripsi dan Ikon */}
          <div>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="p-4 bg-blue-100 rounded-full flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-500">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
