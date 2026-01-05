"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useWhatsApp } from "@/context/WhatsAppContext";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Divider,
} from "@heroui/react";
import { useTranslations } from "next-intl";

const FloatingWhatsApp: React.FC = () => {
  const { isModalOpen, openModal, closeModal } = useWhatsApp();
  const t = useTranslations("floatingWhatsApp");

  const handleWhatsAppClick = (phoneNumber: string): void => {
    window.open(
      `https://wa.me/${phoneNumber}?text=Halo%20Dolphin%20Laundry,%20saya%20ingin%20memesan%20layanan%20laundry`,
      "_blank"
    );
    closeModal();
  };

  return (
    <>
      <motion.button
        onClick={openModal}
        className="fixed bottom-24 right-6 bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl transition-transform z-40"
        aria-label={t("ariaLabel")}
        style={{ zIndex: 9990 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <Icon icon="ic:baseline-whatsapp" width="32" height="32" />
      </motion.button>

      <Modal
        isOpen={isModalOpen}
        onOpenChange={(isOpen) => !isOpen && closeModal()}
        backdrop="opaque"
        placement="center"
        classNames={{
          base: "mx-4",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t("title")}
              </ModalHeader>
              <ModalBody>
                <p className="text-small text-default-500 mb-2">
                  {t("subtitle")}
                </p>
                <Button
                  color="success"
                  className="w-full text-white"
                  startContent={
                    <Icon icon="ic:baseline-whatsapp" width="20" height="20" />
                  }
                  onPress={() => handleWhatsAppClick("+6282144500030")}
                >
                  {t("contact1")}
                </Button>
                <Button
                  color="success"
                  className="w-full text-white"
                  startContent={
                    <Icon icon="ic:baseline-whatsapp" width="20" height="20" />
                  }
                  onPress={() => handleWhatsAppClick("+6281529500130")}
                >
                  {t("contact2")}
                </Button>
              </ModalBody>
              <Divider className="mt-4"/>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                  startContent={<Icon icon="lucide:x" width="18" height="18" />}
                >
                  {t("cancel")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default FloatingWhatsApp;
