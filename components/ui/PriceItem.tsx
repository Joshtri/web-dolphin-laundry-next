import React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { Text } from "./Text";

interface ServiceItem {
  type: string;
  price: string;
  duration?: string;
}

export interface PriceItemProps {
  name: string;
  price?: string;
  duration?: string;
  services?: ServiceItem[];
  className?: string;
}

export const PriceItem = React.forwardRef<HTMLDivElement, PriceItemProps>(
  ({ name, price, duration, services, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-200 shadow-md",
          className
        )}
      >
        <Text size="sm" weight="semibold" className="mb-3 text-white">
          {name}
        </Text>

        {price && (
          <div className="flex flex-col space-y-2">
            {duration && (
              <Text
                size="xs"
                weight="medium"
                className="flex items-center text-yellow-300"
              >
                <Icon
                  icon="lucide:clock"
                  width="12"
                  height="12"
                  className="mr-1"
                />
                {duration}
              </Text>
            )}
            <Text size="sm" className="text-green-300 font-bold">
              {price}
            </Text>
          </div>
        )}

        {services && (
          <div className="space-y-2">
            {services.map((service, serviceIdx) => (
              <div
                key={serviceIdx}
                className="bg-white/10 backdrop-blur-sm p-3 rounded border border-white/20 hover:bg-white/15 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <Text
                      size="xs"
                      weight="semibold"
                      className="text-white mb-1"
                    >
                      {service.type}
                    </Text>
                    {service.duration && (
                      <Text
                        size="xs"
                        weight="medium"
                        className="flex items-center text-yellow-300"
                      >
                        <Icon
                          icon="lucide:clock"
                          width="10"
                          height="10"
                          className="mr-1"
                        />
                        {service.duration}
                      </Text>
                    )}
                  </div>
                  <Text size="xs" className="text-green-300 font-bold ml-2">
                    {service.price}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

PriceItem.displayName = "PriceItem";
