"use client";

import React, { useState } from "react";
import { Card, CardBody } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import { CHAT_STATUS } from "@/features/artificial-intelligent/enum";
import { useFloatingChat } from "../useFloatingChat";
import { ChatChips } from "./ChatChips";
import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";
import { FloatingButton } from "@/components/floating-button";

const FloatingAiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const { messages, status, isResponsePending, sendWithRecaptcha } =
    useFloatingChat();

  const handleSubmit = async () => {
    if (!input.trim() || isResponsePending) return;
    await sendWithRecaptcha(input);
    setInput("");
  };

  return (
    <>
      <FloatingButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} bgColor="bg-indigo-400" />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-110 sm:h-125 z-10000 flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <Card className="shadow-2xl border border-blue-200/50 bg-white/95 backdrop-blur-xl overflow-hidden flex flex-col h-full">
              <ChatHeader onClose={() => setIsOpen(false)} />

              <CardBody className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
                <ChatMessages
                  messages={messages}
                  isSubmitted={status === CHAT_STATUS.SUBMITTED}
                />
              </CardBody>

              {messages.length === 0 && (
                <ChatChips onChipClick={sendWithRecaptcha} />
              )}

              <ChatInput
                input={input}
                isDisabled={isResponsePending}
                onChange={setInput}
                onSubmit={handleSubmit}
              />
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingAiChat;
