"use client";

import { Accordion, AccordionItem, Button, Skeleton } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useLocale, useTranslations } from "next-intl";
import { useFaqs } from "@/services/publicService";
import LoadingScreen from "@/components/LoadingScreen";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

const FAQ = () => {
  const { data: apiResponse, isLoading, isError } = useFaqs();
  const locale = useLocale();
  const t = useTranslations("faq");

  if (isLoading) {
    return (
      <section
        id="faq"
        className="py-30 bg-gradient-to-br from-blue-600 to-blue-800"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <Skeleton className="w-48 h-10 rounded-lg bg-white/20 mx-auto" />
            <Skeleton className="w-3/4 h-6 rounded-lg bg-white/20 mx-auto" />
          </div>

          <div className="space-y-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg"
                >
                  <Skeleton className="w-1/2 h-6 rounded-lg bg-white/20 mb-2" />
                  <Skeleton className="w-full h-4 rounded-lg bg-white/10" />
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError || !apiResponse?.data) {
    return (
      <section
        id="faq"
        className="py-30 bg-gradient-to-br from-blue-600 to-blue-800"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Text>{t("error")}</Text>
          </div>
        </div>
      </section>
    );
  }

  const faqData = apiResponse.data
    .filter((faq) => faq.isActive)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((faq) => ({
      question: locale === "en" ? faq.questionEn || faq.question : faq.question,
      answer: locale === "en" ? faq.answerEn || faq.answer : faq.answer,
    }));

  return (
    <section
      id="faq"
      className="py-30 bg-gradient-to-br from-blue-600 to-blue-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heading
            as="h2"
            size="3xl"
            align="center"
            className="mb-4 text-white"
          >
            {t("title")}
          </Heading>
          <Text
            size="lg"
            align="center"
            className="max-w-2xl mx-auto text-white/90"
          >
            {t("subtitle")}
          </Text>
        </div>

        <Accordion
          variant="splitted"
          selectionMode="multiple"
          itemClasses={{
            base: "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-4 rounded-xl px-2",
            title: "text-white font-semibold text-lg",
            trigger: "py-4",
            indicator: "text-white",
            content: "text-white/80 pb-6",
          }}
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={item.question}
              title={item.question}
            >
              <Text className="leading-relaxed text-white/90">
                {item.answer}
              </Text>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <Text className="mb-4 text-white/90">{t("moreQuestions")}</Text>
          <Button
            as="a"
            href="https://wa.me/6282144500030?text=Halo%20Dolphin%20Laundry,%20saya%20ingin%20bertanya%20tentang%20layanan%20laundry"
            target="_blank"
            rel="noopener noreferrer"
            color="success"
            size="lg"
            className="text-white font-semibold"
            startContent={
              <Icon icon="ic:baseline-whatsapp" width="20" height="20" />
            }
          >
            {t("contactButton")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
