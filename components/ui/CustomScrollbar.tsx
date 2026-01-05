import React from "react";
import { cn } from "@/lib/utils";

export interface CustomScrollbarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  maxHeight?: string;
}

export const CustomScrollbar = React.forwardRef<
  HTMLDivElement,
  CustomScrollbarProps
>(({ className, maxHeight = "max-h-80", children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "overflow-y-auto pr-2",
        maxHeight,
        // Custom scrollbar styles
        "[&::-webkit-scrollbar]:w-1",
        "[&::-webkit-scrollbar-track]:bg-gray-100",
        "[&::-webkit-scrollbar-track]:rounded",
        "[&::-webkit-scrollbar-thumb]:bg-blue-500",
        "[&::-webkit-scrollbar-thumb]:rounded",
        "[&::-webkit-scrollbar-thumb:hover]:bg-blue-600",
        // Firefox
        "scrollbar-thin",
        "scrollbar-track-gray-100",
        "scrollbar-thumb-blue-500",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

CustomScrollbar.displayName = "CustomScrollbar";
