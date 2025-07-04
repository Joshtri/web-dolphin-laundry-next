"use client"
import type React from "react"
import { MessageCircle, Instagram, Facebook, MapPin } from "lucide-react"
import { useWhatsApp } from "@/context/WhatsAppContext"

interface ContactItem {
  name: string
  icon: React.ReactNode
  link?: string
  isWhatsApp?: boolean
}

const ContactUs: React.FC = () => {
  const { openModal } = useWhatsApp()

  const contactItems: ContactItem[] = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="text-green-500 text-3xl" />,
      isWhatsApp: true,
    },
    {
      name: "Instagram",
      icon: <Instagram className="text-pink-500 text-3xl" />,
      link: "https://www.instagram.com/dolphin.laundry_kupang",
    },
    {
      name: "Facebook",
      icon: <Facebook className="text-blue-600 text-3xl" />,
      link: "https://www.facebook.com/rembo46",
    },
    {
      name: "Google Maps",
      icon: <MapPin className="text-red-500 text-3xl" />,
      link: "https://goo.gl/maps/Tu5ijHJKQZAwYQiA6",
    },
  ]

  const handleWhatsAppClick = (): void => {
    openModal()
  }

  return (
    <section
      id="contact-us"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-100 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Hubungi Kami
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kami siap membantu Anda. Pilih salah satu cara untuk menghubungi kami.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactItems.map((item, index) =>
            item.isWhatsApp ? (
              <button
                key={index}
                onClick={handleWhatsAppClick}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-2xl flex flex-col items-center justify-center space-y-4 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <div className="group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                  {item.name}
                </h3>
                {/* Hover Indicator */}
                <div className="w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:w-12 transition-all duration-500"></div>
              </button>
            ) : (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-2xl flex flex-col items-center justify-center space-y-4 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <div className="group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                  {item.name}
                </h3>
                {/* Hover Indicator */}
                <div className="w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:w-12 transition-all duration-500"></div>
              </a>
            ),
          )}
        </div>

        {/* Bottom Section */}
        {/* <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Jam Operasional</h3>
          <p className="text-gray-600 mb-2">Setiap Hari: 05:45 - 22:00</p>
          <p className="text-sm text-blue-600 font-medium">📍 Jl. R. W. Monginsidi I No.2, Kupang</p>
        </div> */}
      </div>
    </section>
  )
}

export default ContactUs
