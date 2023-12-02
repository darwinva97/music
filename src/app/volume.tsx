"use client";
import { Slider } from "@/components/ui/slider";
import { useStore } from "@/store";
import { Volume1, Volume2 } from "lucide-react";

export const Volume = () => {
  const { setVolume, volume } = useStore();
  return (
    <div className="hidden md:flex justify-end flex-1 gap-2 ">
      <Volume1 color="white" size={20} strokeWidth={1.75} />
      <Slider
        value={[volume]}
        onValueChange={(v) => setVolume(v[0])}
        className="min-w-[60px] max-w-[200px]"
        rangeClassName="bg-red-500"
        trackClassName="bg-red-500"
        thumbClassName="cursor-pointer"
      />
      <Volume2 color="white" size={20} strokeWidth={1.75} />
    </div>
  );
};
