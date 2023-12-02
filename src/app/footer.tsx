"use client";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Player } from "./player";
import { Track } from "./track";
import { Volume } from "./volume";
import { useStore } from "@/store";
import { ContainerImage } from "@/components/ContainerImage";

const TitleSong = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { song } = useStore();
  return (
    <div className={cn("flex gap-4", className)} {...props}>
      <ContainerImage
        image={song?.photo || "/next.svg"}
        width={80}
        height={80}
        className="mr-1"
      />
      <div className="flex flex-col items-start text-white">
        <h3>{song?.name}</h3>
        <h4>
          {song?.band?.name ||
            song?.artists.map((artist) => artist.artist.name).join(", ")}
        </h4>
      </div>
    </div>
  );
};

const Buttons = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex items-center justify-around flex-1 gap-4", className)}
    {...props}
  >
    <Player />
    <Volume />
  </div>
);

export const Footer = () => {
  return (
    <footer
      className={cn(
        "grid grid-cols-2 grid-rows-2 gap-2 p-2",
        "md:grid-cols-3 md:grid-rows-1 md:gap-8 md:px-8 md:py-6",
        "fixed bottom-0 w-full left-0",
        "bg-[rgba(44,53,103,0.7)] bg-blend-normal"
      )}
    >
      <Track className="col-start-1 col-end-4 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2" />
      <TitleSong className="col-start-1 col-end-2 md:row-start-1 md:row-end-2" />
      <Buttons className="col-start-3 col-end-4 md:row-start-1 md:row-end-2" />
    </footer>
  );
};
