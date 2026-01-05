"use client";
import React from "react";
import { WhatsAppProvider } from "@/context/WhatsAppContext";
import { HeroUIProvider } from "@heroui/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ClientProviders({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <WhatsAppProvider>
        <HeroUIProvider>{children}</HeroUIProvider>
      </WhatsAppProvider>
    </QueryClientProvider>
  );
}
