import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface FloatingButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  bgColor?: string; // ⬅️ optional prop
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  isOpen,
  onToggle,
  bgColor = "bg-indigo-500", // ⬅️ default color
}) => {
  const t = useTranslations("aiChat");

  return (
    <motion.button
      onClick={onToggle}
      className={`fixed bottom-6 right-6 ${bgColor} text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl transition-transform z-50`}
      aria-label={t("title")}
      style={{ zIndex: 9999 }}
      animate={{
        y: isOpen ? 0 : [0, -5, 0],
        boxShadow: isOpen
          ? "0px 0px 0px rgba(0,0,0,0)"
          : [
              "0px 10px 15px -3px rgba(0,0,0,0.1)",
              "0px 20px 25px -5px rgba(0,0,0,0.1)",
              "0px 10px 15px -3px rgba(0,0,0,0.1)",
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
        <Icon
          icon={isOpen ? "lucide:x" : "lucide:sparkles"}
          width={isOpen ? 28 : 24}
          height={isOpen ? 28 : 24}
        />
        {!isOpen && (
          <span className="absolute -top-7 -right-5 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap animate-pulse">
            NEW
          </span>
        )}
      </div>
    </motion.button>
  );
};
