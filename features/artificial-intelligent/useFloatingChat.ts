import { useMemo } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { usePerfumes, usePricing } from "@/services/publicService";
import { CHAT_STATUS } from "@/features/artificial-intelligent/enum";
// import { useRecaptcha } from "./useRecaptcha";
// import { Recommendation } from "../interfaces";
import { useTranslations } from "next-intl";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import { Recommendation } from "./interfaces";

export const useFloatingChat = () => {
    const t = useTranslations("aiChat");

    const transport = useMemo(
        () => new DefaultChatTransport({ api: "/api/ai/chat" }),
        []
    );

    const { messages, sendMessage, status, error } = useChat({ transport });
    const { executeRecaptcha } = useRecaptcha();
    const { data: perfumeData } = usePerfumes();
    const { data: pricingData } = usePricing();

    const isResponsePending =
        status === CHAT_STATUS.SUBMITTED || status === CHAT_STATUS.STREAMING;

    const getRecommendations = (): Recommendation[] => {
        const recs: Recommendation[] = [];

        if (perfumeData?.data) {
            const popular = perfumeData.data.items.filter((p) => p.popular);
            const fresh = perfumeData.data.items.filter(
                (p) => p.categoryId === 3 && p.popular
            );

            if (popular.length > 0) {
                recs.push({
                    icon: "lucide:sparkles",
                    label: t("popularPerfumes"),
                    detail: popular.slice(0, 3).map((p) => p.name).join(", "),
                    message: t("askPopularPerfumes"),
                    color: "from-purple-500 to-pink-500",
                });
            }

            if (fresh.length > 0) {
                recs.push({
                    icon: "lucide:wind",
                    label: t("freshScents"),
                    detail: fresh.slice(0, 2).map((p) => p.name).join(", "),
                    message: t("askFreshScents"),
                    color: "from-cyan-500 to-blue-500",
                });
            }
        }

        if (pricingData?.data) {
            const expressItems = pricingData.data.items.filter(
                (item) => item.categoryId === 2
            );
            if (expressItems.length > 0) {
                const fastest = expressItems.reduce((a, b) =>
                    a.sortOrder > b.sortOrder ? a : b
                );
                recs.push({
                    icon: "lucide:zap",
                    label: t("fastestService"),
                    detail: `${fastest.name} - ${fastest.durationText}`,
                    message: t("askExpressService"),
                    color: "from-orange-500 to-red-500",
                });
            }
        }

        return recs;
    };

    const sendWithRecaptcha = async (text: string) => {
        const token = await executeRecaptcha("submit");
        const messageData: any = { text };
        if (token) messageData.metadata = { recaptchaToken: token };
        sendMessage(messageData);
    };

    return {
        messages,
        status,
        error,
        isResponsePending,
        sendWithRecaptcha,
        getRecommendations,
    };
};