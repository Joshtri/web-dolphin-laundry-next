"use client"
import type React from "react"
import { MapPin, Map, Clock, ExternalLink } from "lucide-react"
import Image from "next/image"
import dLPlace from "@/public/assets/images/2021-05-05.jpg";


const Location: React.FC = () => {
  return (
    <section id="lokasi" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Lokasi Kami</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kunjungi toko kami yang strategis dan mudah dijangkau di pusat kota Kupang
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lokasi Detail */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={dLPlace}
                alt="Lokasi Dolphin Laundry"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Detail Lokasi</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Alamat:</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Jl. R. W. Monginsidi I No.2, Pasir Panjang, Kec. Kota Lama,
                    <br />
                    Kota Kupang, Nusa Tenggara Timur
                  </p>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <Clock className="text-blue-600" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-700">Jam Operasional</h4>
                    <p className="text-gray-600">Setiap Hari: 05:45 - 22:00</p>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <a
                    href="https://goo.gl/maps/Tu5ijHJKQZAwYQiA6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <ExternalLink size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span>Petunjuk Arah</span>
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Detail Map */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Map className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Peta Lokasi</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Temukan kami dengan mudah menggunakan peta interaktif di bawah ini. Lokasi strategis di pusat kota.
              </p>

              {/* Map Container */}
              <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-200 mb-6">
                <iframe
                  className="w-full h-64"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.289388707983!2d123.60522407433285!3d-10.157115809599961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c569cc81f3ca8f9%3A0x5a7a632a6da5a80c!2sDOLPHIN%20LAUNDRY%20%26%20DRY%20CLEANING!5e0!3m2!1sen!2sid!4v1683602919145!5m2!1sen!2sid"
                  allowFullScreen={true}
                  loading="lazy"
                  title="Lokasi Dolphin Laundry"
                ></iframe>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-100 mb-6">
                <Clock className="text-blue-600" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-700">Jam Operasional</h4>
                  <p className="text-gray-600">Setiap Hari: 05:45 - 22:00</p>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
                <a
                  href="https://goo.gl/maps/Tu5ijHJKQZAwYQiA6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <ExternalLink size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Buka di Google Maps</span>
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-3">
              <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800">Lokasi Strategis</h4>
              <p className="text-gray-600 text-sm">Berada di pusat kota Kupang, mudah dijangkau dari berbagai arah</p>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-green-100 rounded-full w-fit mx-auto">
                <Clock className="text-green-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800">Buka Setiap Hari</h4>
              <p className="text-gray-600 text-sm">Melayani Anda dari pagi hingga malam, 7 hari seminggu</p>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-100 rounded-full w-fit mx-auto">
                <Map className="text-yellow-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800">Mudah Ditemukan</h4>
              <p className="text-gray-600 text-sm">Landmark jelas dan akses transportasi umum yang mudah</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
