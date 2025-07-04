"use client";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, MapPin } from "lucide-react";
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
    // Floating bubbles animation function (defined outside of context)
    const createBubbles = () => {
      if (!bubblesRef.current) return;

      // Clear existing bubbles
      bubblesRef.current.innerHTML = "";

      // Create new bubbles
      const bubbleCount = 100;
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;

      for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement("div");
        bubble.className = "absolute rounded-full bg-white/20";

        // Random size between 10px and 40px
        const size = 10 + Math.random() * 30;

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
              delay: 2 + Math.random() * 3, // Random delay before restarting
            });
          },
        });
      }
    };

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          featuresRef.current,
          ctaRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      // Main timeline
      const tl = gsap.timeline();

      // Decorative elements animation
      decorativeRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.to(ref, {
            scale: 1.2,
            opacity: 1,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.5,
          });
        }
      });

      // Main entrance animation
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          textSwitchRef.current,
          {
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          featuresRef.current?.children || [],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        );

      // Feature dots animation
      gsap.to(".feature-dot", {
        scale: 1.3,
        opacity: 1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "power2.inOut",
      });

      // Initial creation of bubbles
      createBubbles();

      // Recreate bubbles on window resize
      window.addEventListener("resize", createBubbles);

      // CTA button hover animation setup
      const ctaButton = ctaRef.current?.querySelector(".cta-button");
      if (ctaButton) {
        const icon = ctaButton.querySelector(".cta-icon");

        // Icon rotation animation
        gsap.to(icon, {
          rotation: 360,
          duration: 4,
          repeat: -1,
          ease: "none",
        });

        // Button hover effects
        ctaButton.addEventListener("mouseenter", () => {
          gsap.to(ctaButton, {
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        ctaButton.addEventListener("mouseleave", () => {
          gsap.to(ctaButton, {
            scale: 1,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    }, heroRef);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", createBubbles);
    };
  }, []);

  // Text switching animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (textSwitchRef.current) {
        gsap.to(textSwitchRef.current, {
          rotationX: -90,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            setCurrentText((prev) => (prev + 1) % texts.length);
            gsap.fromTo(
              textSwitchRef.current,
              { rotationX: 90, opacity: 0 },
              { rotationX: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
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
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
      );

      const modalContent =
        modalRef.current.querySelectorAll(".modal-content > *");
      gsap.fromTo(
        modalContent,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          delay: 0.2,
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
        scale: 0.8,
        duration: 0.2,
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
      scale: isEntering ? 1.05 : 1,
      y: isEntering ? -2 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={heroRef}
      id="beranda"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0, 15px 15px",
        }}
      ></div>

      {/* Animated Decorative Elements */}
      <div
        ref={(el) => {
          decorativeRefs.current[0] = el;
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
      />
      <div
        ref={(el) => {
          decorativeRefs.current[1] = el;
        }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl"
      />
      <div
        ref={(el) => {
          decorativeRefs.current[2] = el;
        }}
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400/15 rounded-full blur-xl"
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        {/* Main Heading */}
        <div className="mb-8">
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
          >
            Selamat Datang di
          </h1>
          <div className="text-6xl md:text-7xl font-extrabold">
            <span
              ref={textSwitchRef}
              className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
              style={{ display: "inline-block" }}
            >
              {texts[currentText]}
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed"
        >
          Solusi terpercaya untuk kebutuhan laundry dan dry cleaning Anda di
          Kupang dengan kualitas premium dan pelayanan terbaik
        </p>

        {/* Features */}
        <div
          ref={featuresRef}
          className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base"
        >
          {[
            { text: "Buka Setiap Hari", color: "bg-green-400" },
            { text: "Antar Jemput Gratis", color: "bg-yellow-400" },
            { text: "Express 3 Jam", color: "bg-blue-400" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 transform translate-y-4 scale-90"
              onMouseEnter={(e) => handleFeatureHover(e.currentTarget, true)}
              onMouseLeave={(e) => handleFeatureHover(e.currentTarget, false)}
            >
              <div
                className={`feature-dot w-2 h-2 ${feature.color} rounded-full opacity-70`}
              />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 transform translate-y-4"
        >
          <button
            onClick={openModal}
            className="cta-button group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl flex items-center space-x-3 transition-colors duration-300"
          >
            <div className="cta-icon">
              <MessageCircle size={24} />
            </div>
            <span className="text-lg">Pesan Sekarang</span>
          </button>

          {/* <div className="flex items-center space-x-2 text-blue-100">
            <MapPin size={18} />
            <span className="text-sm">Jl. R. W. Monginsidi I No.2, Kupang</span>
          </div> */}
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm p-4">
          <div
            ref={modalRef}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Hubungi Kami</h2>
              <p className="text-blue-100">
                Pilih nomor WhatsApp untuk menghubungi kami
              </p>
            </div>

            {/* Modal Content */}
            <div className="modal-content p-6 space-y-4">
              {[
                { phone: "+6282144500030", label: "Kontak Pertama" },
                { phone: "+6281529500130", label: "Kontak Kedua" },
              ].map((contact, index) => (
                <button
                  key={index}
                  className="group w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-4 rounded-xl shadow-lg flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-102 hover:-translate-y-1"
                  onClick={() => handleWhatsAppClick(contact.phone)}
                >
                  <div className="group-hover:rotate-12 transition-transform duration-300">
                    <MessageCircle size={20} />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{contact.label}</div>
                    <div className="text-sm text-green-100">
                      {contact.phone}
                    </div>
                  </div>
                </button>
              ))}

              <button
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 mt-4 hover:scale-102"
                onClick={closeModal}
              >
                <X size={18} />
                <span>Batal</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animated Floating Bubbles */}
      <div
        ref={bubblesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      />

      {/* Animated Wave Bottom */}
      {/* <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-20 md:h-32"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(255,255,255,0.1)"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div> */}

      <style jsx>{`
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default Hero;
