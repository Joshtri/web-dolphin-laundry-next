"use client";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Testimonials: React.FC = () => {
  const t = useTranslations("testimonials");
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
    <section
      id="testimoni"
      className="py-24 bg-gradient-to-b from-blue-600 to-blue-900 relative overflow-hidden"
    >
      {/* Top Wave Divider - Seamlessly connects from WhyChooseUs */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] sm:h-[100px]"
          style={{ display: "block", marginTop: "-1px" }}
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,738.38,14.66,656.12-2.68,570.32-1.67,487.93,15.05c-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-blue-600"
          ></path>
        </svg>
      </div>
      {/* Texture/Pattern Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex justify-center items-center mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="relative w-5 h-5">
                  <Icon
                    icon="lucide:star"
                    width="20"
                    height="20"
                    className="text-yellow-400/50 absolute inset-0"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.2, // Staggered delay
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <Icon
                      icon="lucide:star"
                      width="20"
                      height="20"
                      className="text-yellow-400 fill-current"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
            <span className="ml-3 text-white font-semibold text-sm">
              Dipercaya 1000+ Pelanggan
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {t("title")}
          </h2>

          <div className="w-24 h-1.5 bg-yellow-400 mx-auto mb-8 rounded-full"></div>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Testimonials Widget Section */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Decorative Quotes */}
            <Icon
              icon="lucide:quote"
              width="96"
              height="96"
              className="absolute -top-12 -left-12 text-white/10 transform rotate-180 hidden lg:block z-0"
            />
            <Icon
              icon="lucide:quote"
              width="96"
              height="96"
              className="absolute -bottom-12 -right-12 text-white/10 hidden lg:block z-0"
            />

            <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] shadow-2xl shadow-blue-900/50 border border-white/20 p-8 lg:p-12 relative z-10">
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
