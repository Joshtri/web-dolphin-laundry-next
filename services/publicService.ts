import axios from "axios";
import { useQuery } from "@tanstack/react-query";


export interface PricingItem {
    id: number;
    categoryId: number;
    name: string;
    nameEn: string | null;
    price: string;
    unit: string;
    unitEn: string | null;
    durationText: string;
    durationTextEn: string | null;
    notes: string | null;
    notesEn: string | null;
    sortOrder: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface PricingCategory {
    id: number;
    name: string;
    nameEn: string | null;
    description: string;
    descriptionEn: string | null;
    sortOrder: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface PricingApiData {
    categories: PricingCategory[];
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
}

export interface PerfumeApiData {
    categories: PerfumeCategory[];
    items: Perfume[];
}

const API_URL = "/api"; // Use local proxy to hide external API URL

export const fetchPricing = async (): Promise<ApiResponse<PricingApiData>> => {
    const response = await axios.get<ApiResponse<PricingApiData>>(`${API_URL}/pricing`);
    return response.data;
};

export const fetchFaqs = async (): Promise<ApiResponse<FaqItem[]>> => {
    const response = await axios.get<ApiResponse<FaqItem[]>>(`${API_URL}/faqs`);
    return response.data;
};

export const fetchPerfumes = async (): Promise<ApiResponse<PerfumeApiData>> => {
    const response = await axios.get<ApiResponse<PerfumeApiData>>(`${API_URL}/perfumes`);
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
