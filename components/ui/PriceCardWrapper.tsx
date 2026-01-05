import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/react";
import { cn } from "@/lib/utils";
import { Heading } from "./Heading";
import { Text } from "./Text";

export interface PriceCardWrapperProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
  isSingleCard?: boolean;
  className?: string;
}

export const PriceCardWrapper = React.forwardRef<
  HTMLDivElement,
  PriceCardWrapperProps
>(
  (
    { icon, title, description, children, isSingleCard = false, className },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-2xl hover:bg-white/15 transition-all duration-300 shadow-xl",
          isSingleCard && "w-full md:w-[450px]",
          className
        )}
      >
        <CardHeader className="flex flex-col items-center bg-white/5 backdrop-blur-sm p-6 border-b border-white/10">
          <div className="p-3 bg-white rounded-lg shadow-lg mb-4">
            <span className="text-blue-600 text-xl">{icon}</span>
          </div>
          <Heading as="h3" size="xl" weight="bold" align="center" className="mb-2 text-white">
            {title}
          </Heading>
          <Text size="sm" align="center" className="leading-relaxed text-white/90">
            {description}
          </Text>
        </CardHeader>

        <CardBody className="p-6 bg-white/5">{children}</CardBody>
      </Card>
    );
  }
);

PriceCardWrapper.displayName = "PriceCardWrapper";
