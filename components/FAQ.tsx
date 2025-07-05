"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Apa yang membedakan Dolphin Laundry dari laundry lain?",
    answer:
      "🌟 YANG MEMBEDAKAN KAMI: 1) GRATIS parfum premium yang bebas dipilih sendiri oleh pelanggan dari 34+ pilihan aroma eksklusif, 2) Baju cucian Anda dicuci terpisah dan tidak dicampur dengan milik pelanggan lain untuk higienitas maksimal. Inilah keunggulan utama yang tidak akan Anda temukan di tempat lain!",
  },
  {
    question: "Berapa lama proses laundry reguler di Dolphin Laundry?",
    answer:
      "Untuk laundry reguler, proses memakan waktu 1-2 hari kerja. Kami juga menyediakan layanan express 3 jam untuk kebutuhan mendesak dengan biaya tambahan.",
  },

  {
    question: "Parfum apa saja yang tersedia dan apakah benar gratis?",
    answer:
      "Ya BENAR-BENAR GRATIS! Ini adalah keunggulan utama kami. Kami memiliki 34+ pilihan parfum import berkualitas premium, mulai dari aroma fresh, floral, hingga woody. Yang istimewa: Anda bebas memilih parfum favorit sendiri tanpa biaya tambahan apapun. Tidak ada laundry lain yang memberikan kebebasan ini!",
  },
  {
    question: "Bagaimana cara menghitung harga laundry?",
    answer:
      "Harga dihitung per kilogram dengan minimum 2kg. Laundry reguler mulai Rp 12.000/kg, express 3 jam Rp 45.000/kg. Dry cleaning dan layanan khusus memiliki tarif tersendiri.",
  },
  {
    question:
      "Apakah benar baju dicuci terpisah tidak dicampur dengan milik orang lain?",
    answer:
      "Ya! Ini adalah komitmen kami yang membedakan dari laundry lain. Setiap baju cucian pelanggan dicuci secara terpisah dan tidak dicampur dengan milik pelanggan lain untuk menjaga higienitas maksimal dan menghindari transfer bakteri atau kotoran. Sistem ini memastikan kebersihan dan keamanan pakaian Anda.",
  },
  {
    question: "Apakah pakaian aman dari kerusakan atau hilang?",
    answer:
      "Kami menggunakan mesin dan deterjen berkualitas tinggi dengan SOP ketat. Setiap pakaian diberi label dan dicatat. Jika terjadi kerusakan akibat kelalaian kami, akan ada kompensasi sesuai kesepakatan.",
  },
  {
    question: "Apakah bisa cuci selimut, boneka, atau barang besar?",
    answer:
      "Tentu saja! Kami melayani cuci selimut, boneka, karpet, sepatu, tas, dan barang khusus lainnya. Harga disesuaikan dengan jenis dan tingkat kesulitan pencucian.",
  },
  {
    question: "Bagaimana cara booking atau reservasi?",
    answer:
      "Sangat mudah! Hubungi kami melalui WhatsApp di 082144500030 atau 081529500130. Tim kami akan membantu koordinasi jadwal antar jemput dan detail pemesanan.",
  },
  {
    question: "Jam operasional Dolphin Laundry?",
    answer:
      "Kami buka setiap hari dari jam 05:45 - 22:00 WITA. Untuk layanan antar jemput bisa diatur di luar jam operasional dengan konfirmasi terlebih dahulu.",
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang layanan laundry kami
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    openItems.includes(index) ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Masih ada pertanyaan lain?</p>
          <a
            href="https://wa.me/6282144500030?text=Halo%20Dolphin%20Laundry,%20saya%20ingin%20bertanya%20tentang%20layanan%20laundry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" />
            </svg>
            Hubungi WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
