import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChipItem } from "../interfaces";

interface ChatChipsProps {
  onChipClick: (message: string) => void;
}

export const ChatChips: React.FC<ChatChipsProps> = ({ onChipClick }) => {
  const t = useTranslations("aiChat");

  const chips: ChipItem[] = [
    {
      label: t("chipPricing"),
      msg: t("askPricing"),
      cls: "bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100",
    },
    {
      label: t("chipLocation"),
      msg: t("askLocation"),
      cls: "bg-green-50 text-green-600 border-green-100 hover:bg-green-100",
    },
    {
      label: t("chipPerfume"),
      msg: t("askPerfume"),
      cls: "bg-purple-50 text-purple-600 border-purple-100 hover:bg-purple-100",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="px-4 pb-2 flex flex-wrap gap-2"
    >
      {chips.map((chip) => (
        <button
          key={chip.label}
          onClick={() => onChipClick(chip.msg)}
          className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${chip.cls}`}
        >
          {chip.label}
        </button>
      ))}
    </motion.div>
  );
};
