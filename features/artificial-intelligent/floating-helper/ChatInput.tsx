import { Icon } from "@iconify/react";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@heroui/react";
import { useTranslations } from "next-intl";

interface ChatInputProps {
  input: string;
  isDisabled: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  input,
  isDisabled,
  onChange,
  onSubmit,
}) => {
  const t = useTranslations("aiChat");

  return (
    <div className="px-4 pb-3 pt-2 border-t border-gray-100 shrink-0">
      <div className="relative">
        <Textarea
          value={input}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSubmit();
            }
          }}
          placeholder={t("inputPlaceholder")}
          minRows={2}
          maxRows={6}
          isDisabled={isDisabled}
          classNames={{
            input: "text-sm bg-transparent pr-10 pb-8",
            inputWrapper:
              "border border-gray-200 rounded-xl focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 bg-gray-50",
          }}
        />
        <Button
          isIconOnly
          size="sm"
          color="primary"
          isDisabled={!input.trim() || isDisabled}
          onPress={onSubmit}
          className="absolute bottom-3 right-3 z-10 w-8 h-8 min-w-0 rounded-lg text-white shadow-sm"
        >
          <Icon icon="lucide:send" width="14" />
        </Button>
      </div>

      {/* reCAPTCHA attribution */}
      <div className="flex justify-center items-center mt-2 text-xs text-gray-500">
        <span>Protected by</span>

        <Popover placement="bottom">
          <PopoverTrigger>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-blue-600 hover:text-blue-700 underline"
            >
              reCAPTCHA
            </a>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-tiny">
                This site is protected by reCAPTCHA and the Google Privacy
              </div>
              <div className="text-tiny">Policy and Terms of Service apply</div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
