"use client";
import React, { createContext, useContext, useState } from "react";

interface WhatsAppContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(
  undefined
);

export const useWhatsApp = (): WhatsAppContextType => {
  const context = useContext(WhatsAppContext);
  if (!context) {
    throw new Error("useWhatsApp must be used within a WhatsAppProvider");
  }
  return context;
};

export const WhatsAppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => setIsModalOpen(true);
  const closeModal = (): void => setIsModalOpen(false);

  return (
    <WhatsAppContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </WhatsAppContext.Provider>
  );
};
