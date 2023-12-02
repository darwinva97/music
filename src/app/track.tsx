"use client";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useStore } from "@/store";
import { HTMLAttributes, useState } from "react";

export const Track = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { duration, currentTime, setLastTime } = useStore();

  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = Math.floor(currentTime - currentMinutes * 60);
  const showCurrent = `${
    currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes
  }:${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;

  const durationMinutes = Math.floor(duration / 60);
  const durationSeconds = Math.floor(duration - durationMinutes * 60);
  const showDuration = `${
    durationMinutes < 10 ? `0${durationMinutes}` : durationMinutes
  }:${durationSeconds < 10 ? `0${durationSeconds}` : durationSeconds}`;

  return (
    <div
      className={cn("flex items-center justify-end w-full gap-2", className)}
      {...props}
    >
      <span className="text-white">
        {!!currentSeconds ? showCurrent : "00:00"}
      </span>
      <Slider
        value={[currentTime]}
        onValueChange={(v) => {
          setLastTime(v[0]);
        }}
        max={duration}
        step={1}
        // value={[progress || 0]}
        rangeClassName="bg-red-500"
        trackClassName="bg-red-500"
        thumbClassName="cursor-pointer"
      />
      <span className="text-white">
        {!!durationSeconds ? showDuration : "00:00"}
      </span>
    </div>
  );
};
