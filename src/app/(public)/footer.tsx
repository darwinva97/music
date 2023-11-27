import { Slider } from "@/components/ui/slider";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex fixed bottom-0 left-0 w-full bg-[rgba(44,53,103,0.7)] p-4">
      <div className="flex items-center w-full gap-2">
        <span className="text-white">00:00</span>
        <Slider rangeClassName="bg-red-500" trackClassName="bg-red-500" />
        <span className="text-white">00:00</span>
      </div>
      <div className="flex items-center w-full gap-2">
        <Image src={"/next.svg"} width={50} height={50} alt="Song" />
        <div className="flex flex-col items-start">
          <h3>Song</h3>
          <h4>Artist</h4>
        </div>
        <div className="flex items-center">
          Button
        </div>
      </div>
    </footer>
  );
};