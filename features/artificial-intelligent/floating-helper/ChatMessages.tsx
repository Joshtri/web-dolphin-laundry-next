import { useRef, useEffect } from "react";
import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import { isTextUIPart } from "ai";
import { useTranslations } from "next-intl";
import { parseMarkdown } from "@/features/utils";

interface ChatMessagesProps {
  messages: any[];
  isSubmitted: boolean;
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, isSubmitted }) => {
  const t = useTranslations("aiChat");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {messages.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-3 border border-blue-100"
        >
          <p className="text-sm text-gray-700">{t("welcome")}</p>
        </motion.div>
      ) : (
        messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <div className="w-9 h-5 rounded-full flex items-center justify-center shrink-0 mr-2 mt-1">
                <Image src="/assets/images/dl-logo.png" alt="AI Assistant" width={45} height={30} />
              </div>
            )}
            <div
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                msg.role === "user"
                  ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-br-md"
                  : "bg-gray-100 text-gray-800 rounded-bl-md"
              }`}
            >
              <p className="whitespace-pre-wrap leading-relaxed">
                {msg.parts.filter(isTextUIPart).map((p: any) => parseMarkdown(p.text)).flat()}
              </p>
            </div>
          </div>
        ))
      )}

      {/* Typing indicator */}
      {isSubmitted && (
        <div className="flex justify-start">
          <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2 mt-1">
            <Image src="/assets/images/dl-logo.png" alt="AI Assistant" width={14} height={14} />
          </div>
          <div className="bg-gray-100 rounded-2xl px-4 py-3">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300" />
            </div>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </>
  );
};