"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Card, CardHeader, CardBody } from "@heroui/react";
import { useTranslations } from "next-intl";

const FloatingAiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("aiChat");

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl transition-transform z-50 group"
        aria-label="Tanya AI Dolphin"
        style={{ zIndex: 9999 }}
        animate={{
          y: isOpen ? 0 : [0, -5, 0],
          boxShadow: isOpen
            ? "0px 0px 0px rgba(0,0,0,0)"
            : [
                "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
                "0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
                "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
              ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          {isOpen ? (
            <Icon icon="lucide:x" width="28" height="28" />
          ) : (
            <Icon icon="lucide:bot" width="28" height="28" />
          )}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>
          )}
        </div>
      </motion.button>

      {/* Coming Soon Teaser */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-[300px] z-[10000]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <Card className="shadow-2xl border border-blue-200/50 bg-white/90 backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>
              <CardHeader className="flex gap-3 pt-4 px-4 pb-2">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg text-white shadow-md">
                  {/* <Icon icon="lucide:sparkles" width="20" height="20" /> */}
                </div>
                <div className="flex flex-col">
                  <p className="text-md font-bold text-gray-800">
                    {t("title")}
                  </p>
                  <p className="text-xs text-blue-600 font-medium">
                    {t("status")}
                  </p>
                </div>
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  onPress={toggleChat}
                  className="ml-auto text-gray-400 hover:text-gray-600"
                >
                  <Icon icon="lucide:x" width="18" />
                </Button>
              </CardHeader>
              <CardBody className="px-4 pb-5 pt-2">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("description")}
                </p>
                <div className="mt-4 p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                  <p className="text-xs font-semibold text-blue-700 text-center">
                    {t("featureTeaser")}
                  </p>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingAiChat;
