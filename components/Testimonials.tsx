"use client";
import React, { useEffect } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  // Load Elfsight script once
  useEffect(() => {
    const existingScript = document.querySelector(
      "script[src='https://apps.elfsight.com/p/platform.js']"
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://apps.elfsight.com/p/platform.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 text-yellow-400 fill-current animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Testimoni Pelanggan
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 mx-auto mb-6 rounded-full"></div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah
            pengalaman nyata dari pelanggan setia Dolphin Laundry.
          </p>
        </div>

        {/* Testimonials Widget Section */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-200 transform rotate-180 hidden lg:block z-30" />
            <Quote className="absolute -bottom-4 -right-4 w-12 h-12 text-blue-200 hidden lg:block z-30" />

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 lg:p-12 hover:shadow-2xl transition-all duration-500">
              <div className="min-h-[400px] flex items-center justify-center">
                {/* Elfsight Embed */}
                <div className="elfsight-app-439c6e10-f0b5-436d-a99c-ec40193a44db w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
