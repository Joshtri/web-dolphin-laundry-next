import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface ServiceType {
    type: string;
    typeEn?: string;
    price: string;
    priceEn?: string;
    duration: string;
    durationEn?: string;
}

export interface PricingItem {
    name: string;
    nameEn?: string;
    // For items with services array (grouped items)
    services?: ServiceType[];
    // For items without services (single service items)
    price?: string;
    priceEn?: string;
    duration?: string;
    durationEn?: string;
}

export interface PricingCategory {
    category: string;
    categoryEn?: string;
    icon: string;
    description: string;
    descriptionEn?: string;
    items: PricingItem[];
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
}

export interface FaqItem {
    id: number;
    question: string;
    questionEn: string | null;
    answer: string;
    answerEn: string | null;
    sortOrder: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Perfume {
    id: number;
    categoryId: number;
    name: string;
    nameEn: string | null;
    popular: boolean;
    fabricSafe: boolean;
    longLasting: boolean;
    premium: boolean;
    sortOrder: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface PerfumeCategory {
    id: number;
    name: string;
    nameEn: string | null;
    sortOrder: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    perfumes: Perfume[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchPricing = async (): Promise<ApiResponse<PricingCategory[]>> => {
    const response = await axios.get<ApiResponse<PricingCategory[]>>(`${API_URL}/pricing`);
    return response.data;
};

export const fetchFaqs = async (): Promise<ApiResponse<FaqItem[]>> => {
    const response = await axios.get<ApiResponse<FaqItem[]>>(`${API_URL}/faqs`);
    return response.data;
};

export const fetchPerfumes = async (): Promise<ApiResponse<PerfumeCategory[]>> => {
    const response = await axios.get<ApiResponse<PerfumeCategory[]>>(`${API_URL}/perfumes`);
    return response.data;
};

export const usePricing = () => {
    return useQuery({
        queryKey: ["pricing"],
        queryFn: fetchPricing,
        staleTime: 5 * 60 * 1000, // 5 minutes cache
    });
};

export const useFaqs = () => {
    return useQuery({
        queryKey: ["faqs"],
        queryFn: fetchFaqs,
        staleTime: 5 * 60 * 1000, // 5 minutes cache
    });
};

export const usePerfumes = () => {
    return useQuery({
        queryKey: ["perfumes"],
        queryFn: fetchPerfumes,
        staleTime: 5 * 60 * 1000, // 5 minutes cache
    });
};
