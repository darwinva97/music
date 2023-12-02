"use client";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useStore } from "@/store";
import { HTMLAttributes } from "react";

export const Track = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { song } = useStore();
  return (
    <div
      className={cn("flex items-center justify-end w-full gap-2", className)}
      {...props}
    >
      <span className="text-white">00:00</span>
      <Slider
        rangeClassName="bg-red-500"
        trackClassName="bg-red-500"
        thumbClassName="cursor-pointer"
      />
      <span className="text-white">00:00</span>
    </div>
  );
};
