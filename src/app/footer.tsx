import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Play, SkipBack, SkipForward, Volume1, Volume2 } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";

const TitleSong = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex gap-4", className)} {...props}>
    <Image
      src={"/next.svg"}
      width={80}
      height={80}
      alt="Song"
      className="mr-1"
    />
    <div className="flex flex-col items-start text-white">
      <h3>Song</h3>
      <h4>Artist</h4>
    </div>
  </div>
);

const Volume = () => (
  <div className="hidden md:flex justify-end flex-1 gap-2 ">
    <Volume1 color="white" size={20} strokeWidth={1.75} />
    <Slider
      className="min-w-[60px] max-w-[200px]"
      rangeClassName="bg-red-500"
      trackClassName="bg-red-500"
      thumbClassName="cursor-pointer"
    />
    <Volume2 color="white" size={20} strokeWidth={1.75} />
  </div>
);

const Player = () => (
  <div
    className={"flex items-center justify-end md:justify-start flex-1 gap-4"}
  >
    <SkipBack
      color="#ffffff"
      fill="white"
      strokeWidth={1.75}
      size={30}
      cursor="pointer"
    />
    <Play
      color="#ffffff"
      fill="white"
      strokeWidth={1.75}
      size={30}
      cursor="pointer"
    />
    <SkipForward
      color="#ffffff"
      fill="white"
      strokeWidth={1.75}
      size={30}
      cursor="pointer"
    />
  </div>
);

const Buttons = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex items-center justify-around flex-1 gap-4", className)}
    {...props}
  >
    <Player />
    <Volume />
  </div>
);

const Track = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
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
