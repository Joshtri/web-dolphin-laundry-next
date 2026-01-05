"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Icon
        icon="lucide:languages"
        width="16"
        height="16"
        className="text-gray-600"
      />
      <div className="flex gap-1">
        <Button
          size="sm"
          variant={locale === "id" ? "solid" : "light"}
          color={locale === "id" ? "primary" : "default"}
          onClick={() => handleLanguageChange("id")}
          disabled={isPending}
          className="min-w-[50px]"
        >
          ID
        </Button>
        <Button
          size="sm"
          variant={locale === "en" ? "solid" : "light"}
          color={locale === "en" ? "primary" : "default"}
          onClick={() => handleLanguageChange("en")}
          disabled={isPending}
          className="min-w-[50px]"
        >
          EN
        </Button>
      </div>
    </div>
  );
}
