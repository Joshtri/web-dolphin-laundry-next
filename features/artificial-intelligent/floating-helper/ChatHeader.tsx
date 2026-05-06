import { Icon } from "@iconify/react";
import { Button, CardHeader, Divider, Image } from "@heroui/react";
import { useTranslations } from "next-intl";

interface ChatHeaderProps {
  onClose: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => {
  const t = useTranslations("aiChat");

  return (
    <>
      <CardHeader className="flex gap-3 pt-4 px-4 pb-2 shrink-0">
        <Image
          src="/assets/images/dl-logo.png"
          alt="AI Assistant"
          width={50}
          height={40}
        />
        <div className="flex flex-col">
          <p className="text-md font-bold text-gray-800">
            Dolphin AI Assistant
          </p>
          <p className="text-xs text-green-600 font-medium flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
            {t("online")}
          </p>
        </div>
        <Button
          isIconOnly
          size="sm"
          variant="light"
          onPress={onClose}
          className="ml-auto text-gray-400 hover:text-gray-600"
        >
          <Icon icon="lucide:x" width="18" />
        </Button>
      </CardHeader>
      <Divider className="my-0" />
    </>
  );
};
