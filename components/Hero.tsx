"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { Button, Chip } from "@heroui/react";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import Image from "next/image";
import RealisticBubbles from "@/components/ui/RealisticBubbles";
import { useTranslations } from "next-intl";
import { useWhatsApp } from "@/context/WhatsAppContext";

const Hero: React.FC = () => {
  const t = useTranslations("hero");
  const [currentText, setCurrentText] = useState<number>(0);
  const { openModal } = useWhatsApp();

  // Refs for GSAP animations
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textSwitchRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorativeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null); // Desktop image ref
  const mobileImageRef = useRef<HTMLDivElement>(null); // Mobile image ref

  const texts: string[] = [t("brandName1"), t("brandName2")];

  // Initialize animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple Floating effect only (no 3D rotation)
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      // Initial setup
      const initialY = 30;

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

      // Main timeline
      const tl = gsap.timeline();

      // Decorative elements animation
      decorativeRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.to(ref, {
            scale: 1.1,
            opacity: 0.8,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.3,
          });
        }
      });

      // Text and CTA entrance
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          textSwitchRef.current,
          {
            opacity: 1,
            rotationX: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          featuresRef.current?.children || [],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: "back.out(1.7)",
          },
          "-=0.1"
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        );

      // Image entrance
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          opacity: 0,
          scale: 0.8,
          x: 50,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      // Mobile Image entrance
      if (mobileImageRef.current) {
        gsap.to(mobileImageRef.current, {
          y: -10,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });

        gsap.from(mobileImageRef.current, {
          opacity: 0,
          scale: 0.8,
          y: 30, // Enter from bottom for mobile
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      // Feature dots animation
      gsap.to(".feature-dot", {
        scale: 1.2,
        opacity: 1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
        ease: "power2.inOut",
      });

      // Mouse move effects removed for cleaner look

      // CTA button hover
      const ctaButton = ctaRef.current?.querySelector(".cta-button");
      if (ctaButton) {
        const icon = ctaButton.querySelector(".cta-icon");
        if (icon) {
          gsap.to(icon, {
            rotation: 360,
            duration: 3,
            repeat: -1,
            ease: "none",
          });
        }

        ctaButton.addEventListener("mouseenter", () => {
          gsap.to(ctaButton, {
            scale: 1.03,
            boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
            duration: 0.2,
            ease: "power2.out",
          });
        });

        ctaButton.addEventListener("mouseleave", () => {
          gsap.to(ctaButton, {
            scale: 1,
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            duration: 0.2,
            ease: "power2.out",
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Text switching
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
      className="relative min-h-screen flex items-start justify-center bg-gradient-to-r from-blue-400 via-blue-700 to-blue-950 text-white overflow-hidden pt-20 sm:pt-24 md:pt-0"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.6,
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

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Column (Right) */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            {/* Main Heading */}
            <div className="mb-4 sm:mb-6 md:mb-8">
              <Heading
                ref={titleRef}
                as="h1"
                size="4xl"
                weight="bold"
                className="mb-2 sm:mb-3 md:mb-4 leading-tight text-white"
              >
                {t("welcome")}
              </Heading>
              <Heading as="h2" size="4xl" weight="extrabold">
                <span
                  ref={textSwitchRef}
                  className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent leading-tight"
                  style={{ display: "inline-block" }}
                >
                  {texts[currentText]}
                </span>
              </Heading>
            </div>

            {/* Mobile Image (Visible only on mobile, between Title and Description) */}
            <div className="lg:hidden w-full flex justify-center items-center mb-8">
              <div
                ref={mobileImageRef}
                className="relative w-full h-[500px] sm:h-[600px] max-w-[500px]"
              >
                <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-110 -z-10 animate-pulse" />
                <Image
                  src="/assets/images/hero-image-rezie-Photoroom.png"
                  alt="Happy customer with clean laundry"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                  priority
                  quality={100}
                  unoptimized={false}
                />
              </div>
            </div>

            {/* Subtitle */}
            <Text
              ref={subtitleRef}
              as="p"
              size="lg"
              className="mb-4 sm:mb-6 md:mb-8 text-white leading-relaxed px-2 lg:px-0"
            >
              {t("description")}
            </Text>

            {/* Features */}
            <div
              ref={featuresRef}
              className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 text-xs sm:text-sm md:text-base px-2 lg:px-0"
            >
              {[
                { text: t("features.freePerfume"), color: "bg-pink-400" },
                { text: t("features.separateWash"), color: "bg-green-400" },
                { text: t("features.pickupDelivery"), color: "bg-yellow-400" },
                { text: t("features.express"), color: "bg-blue-400" },
              ].map((feature, index) => (
                <Chip
                  key={index}
                  variant="flat"
                  className="opacity-0 transform translate-y-4 scale-90 cursor-pointer bg-white/10 backdrop-blur-sm text-white"
                  onMouseEnter={(e) =>
                    handleFeatureHover(e.currentTarget, true)
                  }
                  onMouseLeave={(e) =>
                    handleFeatureHover(e.currentTarget, false)
                  }
                  startContent={
                    <div
                      className={`feature-dot w-1.5 h-1.5 sm:w-2 sm:h-2 ${feature.color} rounded-full opacity-70`}
                    />
                  }
                >
                  {feature.text}
                </Chip>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center opacity-0 transform translate-y-4 px-4 lg:px-0"
            >
              <Button
                onPress={openModal}
                color="success"
                size="lg"
                radius="lg"
                className=" font-semibold shadow-lg sm:shadow-xl w-full sm:w-auto max-w-xs text-white"
                startContent={
                  <Icon icon="ic:baseline-whatsapp" width="20" height="20" />
                }
              >
                {t("cta")}
              </Button>
            </div>
          </div>

          {/* Image Column (Left) - Desktop Only */}
          <div className="order-2 lg:order-1 hidden lg:flex justify-center items-center w-full">
            <div
              ref={imageRef}
              className="relative w-full h-[550px] sm:h-[650px] md:h-[750px] lg:h-[900px] xl:h-[1000px] 2xl:h-[1100px] max-w-[550px] sm:max-w-[650px] md:max-w-[750px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1400px]"
            >
              {/* Glow effect aligned with image */}
              <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-110 -z-10 animate-pulse" />

              <Image
                src="/assets/images/hero-image-rezie-Photoroom.png"
                alt="Happy customer with clean laundry"
                fill
                sizes="(max-width: 640px) 550px, (max-width: 768px) 650px, (max-width: 1024px) 900px, (max-width: 1280px) 1200px, 1400px"
                className="object-contain object-top drop-shadow-[0_0_40px_rgba(255,255,255,0.8)]"
                priority
                quality={100}
                unoptimized={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bubbles (ThreeJS) */}
      <RealisticBubbles />
    </section>
  );
};

export default Hero;
