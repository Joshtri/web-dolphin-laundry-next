"use client";
import React from "react";
import { MapPin, Map } from "lucide-react";
import Image from "next/image";
import dLPlace from "@/public/assets/images/2021-05-05.jpg";

const Location: React.FC = () => {
  return (
    <section id="lokasi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-10">
          Lokasi Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lokasi Detail */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={dLPlace}
                  alt="Lokasi Dolphin Laundry"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-4xl text-green-500" />
                  <h3 className="text-lg font-semibold">Detail Lokasi</h3>
                </div>
                <p className="text-gray-600 mt-2">
                  Alamat:
                  <br />
                  Jl. R. W. Monginsidi I No.2, Pasir Panjang, Kec. Kota Lama,
                  Kota Kupang, Nusa Tenggara Tim.
                </p>
                <p className="mt-4 font-semibold">
                  Jam Buka: Setiap Hari, 07:00 - 21:00
                </p>
                <button className="mt-4 bg-yellow-400 px-4 py-2 rounded text-white hover:bg-yellow-500">
                  <a href="https://goo.gl/maps/Tu5ijHJKQZAwYQiA6">
                    Petunjuk Arah
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Detail Map */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-2">
              <Map className="text-3xl text-green-500" />
              <h3 className="text-lg font-semibold">Detail Peta</h3>
            </div>
            <p className="text-gray-600 mt-2">
              Temukan kami dengan mudah menggunakan peta di bawah ini.
            </p>
            <iframe
              className="mt-4 w-full h-64 rounded shadow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.289388707983!2d123.60522407433285!3d-10.157115809599961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c569cc81f3ca8f9%3A0x5a7a632a6da5a80c!2sDOLPHIN%20LAUNDRY%20%26%20DRY%20CLEANING!5e0!3m2!1sen!2sid!4v1683602919145!5m2!1sen!2sid"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>

            <p className="mt-4 font-semibold">
              Jam Buka: Setiap Hari, 05:45 - 22:00
            </p>
            <button className="mt-4 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600">
              <a
                href="https://goo.gl/maps/Tu5ijHJKQZAwYQiA6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Petunjuk Arah
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
