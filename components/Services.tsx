"use client";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Card, CardBody, Button } from "@heroui/react";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NextLink from "next/link";
import { useLocale } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const t = useTranslations("services");
  const locale = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const services = [
    {
      icon: (
        <Icon
          icon="lucide:shirt"
          width="28"
          height="28"
          className="text-blue-600"
        />
      ),
      title: t("items.regular.title"),
      description: t("items.regular.description"),
    },
    {
      icon: (
        <Icon
          icon="lucide:timer"
          width="28"
          height="28"
          className="text-blue-600"
        />
      ),
      title: t("items.express.title"),
      description: t("items.express.description"),
    },
    {
      icon: (
        <Icon
          icon="lucide:droplets"
          width="28"
          height="28"
          className="text-blue-600"
        />
      ),
      title: t("items.dryCleaning.title"),
      description: t("items.dryCleaning.description"),
    },
    {
      icon: (
        <Icon
          icon="lucide:package"
          width="28"
          height="28"
          className="text-blue-600"
        />
      ),
      title: t("items.shoes.title"),
      description: t("items.shoes.description"),
    },
    {
      icon: (
        <Icon
          icon="lucide:sparkles"
          width="28"
          height="28"
          className="text-blue-600"
        />
      ),
      title: t("items.carpet.title"),
      description: t("items.carpet.description"),
    },
    {
      icon: (
        <Icon
          icon="lucide:zap"
          width="28"
          height="28"
          className="text-blue-600"
        />
      ),
      title: t("items.ironing.title"),
      description: t("items.ironing.description"),
    },
  ];

  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Counter Animation
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          const target = 10000;
          const obj = { val: 0 };

          gsap.to(obj, {
            val: target,
            duration: 2.5,
            ease: "power2.out",
            onUpdate: () => {
              if (counterRef.current) {
                counterRef.current.textContent = Math.ceil(
                  obj.val
                ).toLocaleString();
              }
            },
          });
        },
      });

      // Layout Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Explicitly animate TO values to ensure they stick
      tl.fromTo(
        ".stat-content",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
      ).fromTo(
        ".service-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.2)",
          onComplete: () => {
            // Safety: clear transform/opacity overrides after animation
            gsap.set(".stat-content, .service-card", {
              clearProps: "opacity,transform",
            });
          },
        },
        "-=0.6"
      );
    }, containerRef); // Scope to container

    return () => ctx.revert(); // CLEANUP IS CRITICAL
  }, []);

  return (
    <section
      id="layanan"
      ref={containerRef}
      className="py-24 bg-gradient-to-r from-blue-400 via-blue-700  to-blue-900 relative overflow-hidden"
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Heading
            as="h2"
            size="4xl"
            weight="extrabold"
            className="mb-6 tracking-tight text-white text-5xl md:text-6xl font-black"
          >
            {t("title")}
          </Heading>
          <div className="h-1.5 w-32 bg-yellow-400 rounded-full me-auto"></div>
        </div>

        {/* Added Border Box Container */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-6 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Big Typography Stats */}
            <div className="lg:col-span-5 flex flex-col justify-center border-r-0 lg:border-r border-white/20 pr-0 lg:pr-12">
              <div className="stat-content">
                <Text className="text-white/80 italic mb-2 font-medium font-serif">
                  {t("stats.asOfNow")}
                </Text>

                <div className="relative">
                  <h2 className="text-[5rem] sm:text-[6rem] md:text-[7rem] font-black leading-[0.9] tracking-tighter text-white">
                    <span ref={counterRef} className="main-counter">
                      0
                    </span>
                  </h2>
                </div>

                <Heading
                  as="h3"
                  size="2xl"
                  weight="bold"
                  className="text-white mt-2 mb-6"
                >
                  {t("stats.itemsLaundered")} {t("stats.itemsLaunderedSuffix")}
                </Heading>

                <Text className="text-white/90 max-w-md mb-8">
                  {t("stats.savingLine", {
                    customers: "100+",
                    satisfaction: 98,
                  })}
                </Text>

                <Button
                  as={NextLink}
                  href={`#daftar-harga`}
                  className="bg-white text-blue-600 px-8 py-6 rounded-lg font-bold text-lg transition-colors w-fit shadow-lg"
                >
                  {t("menu.priceList")}
                </Button>
              </div>
            </div>

            {/* Right: Services Grid */}
            <div className="lg:col-span-7 pl-0 lg:pl-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    isPressable
                    className="service-card border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  >
                    <CardBody className="flex flex-row items-start gap-4 p-5">
                      <div className="shrink-0 text-blue-600 p-2 bg-white rounded-lg border border-white/50 shadow-md">
                        {service.icon}
                      </div>
                      <div>
                        <Heading
                          as="h3"
                          size="sm"
                          weight="bold"
                          className="text-white mb-1"
                        >
                          {service.title}
                        </Heading>
                        <Text
                          size="sm"
                          className="text-white/90 leading-relaxed text-xs"
                        >
                          {service.description}
                        </Text>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
