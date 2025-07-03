"use client";
import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const texts: string[] = ["Dolphin Laundry", "Dolphin Dry Cleaning"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const openModal = (): void => setIsModalOpen(true);
  const closeModal = (): void => setIsModalOpen(false);

  const handleWhatsAppClick = (phoneNumber: string): void => {
    const message = encodeURIComponent(
      "Halo Dolphin Laundry, saya ingin memesan layanan laundry"
    );
    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
    closeModal();
  };

  return (
    <section
      id="home"
      className="relative bg-blue-500 text-white overflow-hidden"
      style={{
        backgroundColor: "#3B82F6",
        backgroundImage: `
          radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
          radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
        backgroundSize: "25px 25px",
        backgroundPosition: "0 0, 12.5px 12.5px",
      }}
    >
      {/* Gelombang Atas */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#3B82F6"
            fillOpacity="1"
            d="M0,64L48,85.3C96,107,192,149,288,170.7C384,192,480,192,576,181.3C672,171,768,149,864,144C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Konten Teks */}
      <div className="container mx-auto py-20 text-center relative z-10 px-4">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Selamat datang di{" "}
          <span className="inline-block">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentText}
                className={
                  currentText === 1
                    ? "text-yellow-400 text-3xl"
                    : "text-yellow-400"
                }
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.8 }}
                style={{ display: "inline-block" }}
              >
                {texts[currentText]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>
        <motion.p
          className="text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Layanan laundry segar, cepat, dan dapat diandalkan untuk Anda!
        </motion.p>
        <motion.button
          onClick={openModal}
          className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center justify-center w-max mx-auto shadow-md transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <MessageCircle className="mr-2 text-lg" />
          Pesan Sekarang via WhatsApp
        </motion.button>
      </div>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-xl text-black font-bold mb-4">
                Pilih Nomor WhatsApp
              </h2>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full mb-2 flex items-center justify-center"
                onClick={() => handleWhatsAppClick("+6282144500030")}
              >
                <MessageCircle className="mr-2 text-lg" />
                Hubungi Nomor Pertama
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full flex items-center justify-center"
                onClick={() => handleWhatsAppClick("+6281529500130")}
              >
                <MessageCircle className="mr-2 text-lg" />
                Hubungi Nomor Kedua
              </button>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex mx-auto items-center transition duration-300"
                onClick={closeModal}
              >
                <X className="mr-2 text-lg" />
                Batal
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gelombang Bawah */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#2563EB"
            fillOpacity="1"
            d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,213.3C672,235,768,245,864,213.3C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Bubble Animations */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      <div className="bubble bubble-5"></div>
      <div className="bubble bubble-6"></div>
      <div className="bubble bubble-7"></div>
      <div className="bubble bubble-8"></div>
      <div className="bubble bubble-9"></div>
      <div className="bubble bubble-10"></div>
    </section>
  );
};

export default Hero;
