"use client";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";
import { gsap } from "gsap";

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Refs for GSAP animations
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textSwitchRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLDivElement>(null);
  const decorativeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const texts: string[] = ["Dolphin Laundry", "Dolphin Dry Cleaning"];

  // Initialize animations on mount
  useEffect(() => {
    // Floating bubbles animation function
    const createBubbles = () => {
      if (!bubblesRef.current) return;

      // Clear existing bubbles
      bubblesRef.current.innerHTML = "";

      // Create new bubbles - adjusted count based on screen size
      const bubbleCount = window.innerWidth < 768 ? 50 : 100;
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;

      for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement("div");
        bubble.className = "absolute rounded-full bg-white/20";

        // Random size between 5px and 30px (smaller on mobile)
        const size =
          window.innerWidth < 768
            ? 5 + Math.random() * 15
            : 10 + Math.random() * 20;

        // Random position at bottom
        const left = Math.random() * containerWidth;

        // Random animation duration between 10s and 20s
        const duration = 10 + Math.random() * 10;

        // Random delay between 0s and 5s
        const delay = Math.random() * 5;

        // Random opacity between 0.1 and 0.3
        const opacity = 0.1 + Math.random() * 0.2;

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}px`;
        bubble.style.bottom = `-${size}px`;
        bubble.style.opacity = `${opacity}`;

        bubblesRef.current.appendChild(bubble);

        // Animate bubble
        gsap.to(bubble, {
          y: -containerHeight - size,
          duration: duration,
          delay: delay,
          ease: "none",
          onComplete: () => {
            // Reset bubble position when it reaches the top
            bubble.style.bottom = `-${size}px`;
            gsap.set(bubble, { y: 0 });
            gsap.to(bubble, {
              y: -containerHeight - size,
              duration: duration,
              ease: "none",
              repeat: -1,
              delay: 2 + Math.random() * 3,
            });
          },
        });
      }
    };

    const ctx = gsap.context(() => {
      // Initial setup - responsive values
      const initialY = window.innerWidth < 768 ? 20 : 30;
      const durationMultiplier = window.innerWidth < 768 ? 0.8 : 1;

      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          featuresRef.current,
          ctaRef.current,
        ],
        {
          opacity: 0,
          y: initialY,
        }
      );

      // Main timeline with responsive durations
      const tl = gsap.timeline();

      // Decorative elements animation
      decorativeRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.to(ref, {
            scale: 1.1,
            opacity: 0.8,
            duration: 3 * durationMultiplier,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.3,
          });
        }
      });

      // Main entrance animation with responsive values
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8 * durationMultiplier,
        ease: "power3.out",
      })
        .to(
          textSwitchRef.current,
          {
            opacity: 1,
            rotationX: 0,
            duration: 0.6 * durationMultiplier,
            ease: "back.out(1.7)",
          },
          `-=${0.4 * durationMultiplier}`
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6 * durationMultiplier,
            ease: "power2.out",
          },
          `-=${0.2 * durationMultiplier}`
        )
        .to(
          featuresRef.current?.children || [],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4 * durationMultiplier,
            stagger: 0.08,
            ease: "back.out(1.7)",
          },
          `-=${0.1 * durationMultiplier}`
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6 * durationMultiplier,
            ease: "power2.out",
          },
          `-=${0.2 * durationMultiplier}`
        );

      // Feature dots animation
      gsap.to(".feature-dot", {
        scale: 1.2,
        opacity: 1,
        duration: 1.5 * durationMultiplier,
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
        ease: "power2.inOut",
      });

      // Initial creation of bubbles
      createBubbles();

      // Recreate bubbles on window resize (debounced)
      let resizeTimeout: NodeJS.Timeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(createBubbles, 300);
      };
      window.addEventListener("resize", handleResize);

      // CTA button hover animation setup
      const ctaButton = ctaRef.current?.querySelector(".cta-button");
      if (ctaButton) {
        const icon = ctaButton.querySelector(".cta-icon");

        // Icon rotation animation
        gsap.to(icon, {
          rotation: 360,
          duration: 3 * durationMultiplier,
          repeat: -1,
          ease: "none",
        });

        // Button hover effects
        ctaButton.addEventListener("mouseenter", () => {
          gsap.to(ctaButton, {
            scale: 1.03,
            boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
            duration: 0.2 * durationMultiplier,
            ease: "power2.out",
          });
        });

        ctaButton.addEventListener("mouseleave", () => {
          gsap.to(ctaButton, {
            scale: 1,
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            duration: 0.2 * durationMultiplier,
            ease: "power2.out",
          });
        });
      }

      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(resizeTimeout);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Text switching animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (textSwitchRef.current) {
        gsap.to(textSwitchRef.current, {
          rotationX: -90,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setCurrentText((prev) => (prev + 1) % texts.length);
            gsap.fromTo(
              textSwitchRef.current,
              { rotationX: 90, opacity: 0 },
              { rotationX: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
            );
          },
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  // Modal animations
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.25, ease: "back.out(1.7)" }
      );

      const modalContent =
        modalRef.current.querySelectorAll(".modal-content > *");
      gsap.fromTo(
        modalContent,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.08,
          delay: 0.15,
          ease: "power2.out",
        }
      );
    }
  }, [isModalOpen]);

  const openModal = (): void => setIsModalOpen(true);

  const closeModal = (): void => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.15,
        ease: "power2.in",
        onComplete: () => setIsModalOpen(false),
      });
    }
  };

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

  // Feature hover handlers
  const handleFeatureHover = (element: HTMLElement, isEntering: boolean) => {
    gsap.to(element, {
      scale: isEntering ? 1.03 : 1,
      y: isEntering ? -1 : 0,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={heroRef}
      id="beranda"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white overflow-hidden pt-16 sm:pt-20 md:pt-24"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "25px 25px",
          backgroundPosition: "0 0, 12px 12px",
        }}
      ></div>

      {/* Responsive Decorative Elements */}
      <div
        ref={(el) => {
          decorativeRefs.current[0] = el;
        }}
        className="absolute top-8 sm:top-16 left-4 sm:left-8 w-16 sm:w-24 h-16 sm:h-24 bg-white/8 rounded-full blur-xl"
      />
      <div
        ref={(el) => {
          decorativeRefs.current[1] = el;
        }}
        className="absolute bottom-8 sm:bottom-16 right-4 sm:right-8 w-20 sm:w-32 h-20 sm:h-32 bg-yellow-400/15 rounded-full blur-xl sm:blur-2xl"
      />
      <div
        ref={(el) => {
          decorativeRefs.current[2] = el;
        }}
        className="absolute top-1/2 left-1/5 w-12 sm:w-20 h-12 sm:h-20 bg-green-400/10 rounded-full blur-xl"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-5xl">
        {/* Main Heading */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1
            ref={titleRef}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight"
          >
            Selamat Datang di
          </h1>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
            <span
              ref={textSwitchRef}
              className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent leading-tight"
              style={{ display: "inline-block" }}
            >
              {texts[currentText]}
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed px-2"
        >
          🌟 Yang membedakan kami: <strong>GRATIS PARFUM PREMIUM</strong> yang
          bebas dipilih sendiri oleh pelanggan! Baju cucian dicuci terpisah,
          tidak dicampur dengan milik orang lain. Solusi terpercaya untuk
          kebutuhan laundry dan dry cleaning Anda di Kupang
        </p>

        {/* Features */}
        <div
          ref={featuresRef}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 text-xs sm:text-sm md:text-base px-2"
        >
          {[
            { text: "FREE Parfum Dipilih Sendiri", color: "bg-pink-400" },
            { text: "Cuci Terpisah Tidak Dicampur", color: "bg-green-400" },
            { text: "Antar Jemput Gratis", color: "bg-yellow-400" },
            { text: "Express 3 Jam", color: "bg-blue-400" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-full opacity-0 transform translate-y-4 scale-90 cursor-pointer"
              onMouseEnter={(e) => handleFeatureHover(e.currentTarget, true)}
              onMouseLeave={(e) => handleFeatureHover(e.currentTarget, false)}
            >
              <div
                className={`feature-dot w-1.5 h-1.5 sm:w-2 sm:h-2 ${feature.color} rounded-full opacity-70`}
              />
              <span className="whitespace-nowrap">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center opacity-0 transform translate-y-4 px-4"
        >
          <button
            onClick={openModal}
            className="cta-button group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl flex items-center space-x-2 sm:space-x-3 transition-colors duration-300 w-full sm:w-auto max-w-xs"
          >
            <div className="cta-icon">
              <MessageCircle
                size={16}
                className="sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
            </div>
            <span className="text-sm sm:text-base md:text-lg">
              Pesan Sekarang
            </span>
          </button>
        </div>
      </div>

      {/* Responsive Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm p-4">
          <div
            ref={modalRef}
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl max-w-xs sm:max-w-sm w-full overflow-hidden mx-2 sm:mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 sm:p-5 text-white">
              <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                Hubungi Kami
              </h2>
              <p className="text-blue-100 text-xs sm:text-sm">
                Pilih nomor WhatsApp untuk menghubungi kami
              </p>
            </div>

            {/* Modal Content */}
            <div className="modal-content p-4 sm:p-5 space-y-2 sm:space-y-3">
              {[
                { phone: "+6282144500030", label: "Kontak Pertama" },
                { phone: "+6281529500130", label: "Kontak Kedua" },
              ].map((contact, index) => (
                <button
                  key={index}
                  className="group w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg flex items-center justify-center space-x-2 sm:space-x-3 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
                  onClick={() => handleWhatsAppClick(contact.phone)}
                >
                  <div className="group-hover:rotate-12 transition-transform duration-300">
                    <MessageCircle size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-xs sm:text-sm">
                      {contact.label}
                    </div>
                    <div className="text-xs text-green-100">
                      {contact.phone}
                    </div>
                  </div>
                </button>
              ))}

              <button
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 mt-3 sm:mt-4 hover:scale-[1.02]"
                onClick={closeModal}
              >
                <X size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Batal</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Bubbles */}
      <div
        ref={bubblesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      />
    </section>
  );
};

export default Hero;
