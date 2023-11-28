import herobg from "@/../public/img/herobg.jpg";
import { Equalizer } from "@/components/Equalizer";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="m-4 rounded-tl-xl rounded-tr-xl shadow-xl">
      <header className="p-4 text-2xl">New Releases</header>
      <div
        className={cn(
          "h-[400px] rounded-bl-3xl rounded-tr-3xl",
          "flex flex-col items-center justify-around p-10"
        )}
        style={{
          backgroundImage: `url(/img/herobg.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Equalizer />
        <div className="flex flex-col w-full gap-4">
          <div className="flex gap-2 text-white items-center">
            <Image
              src="https://appsbuildin2.click/musica/go/images/dashboard/realease-song/01.png"
              alt="x"
              width={60}
              height={60}
              className="rounded-tr-xl rounded-bl-xl"
            />
            <div className="flex-1 flex flex-col gap-2 items-start justify-center w-full">
              <strong>DJ Khaled Featuring</strong>
              <span>Edyta Gorniak</span>
            </div>
            <strong>9:52</strong>
          </div>
          <div className="flex gap-2 text-white items-center">
            <Image
              src="https://appsbuildin2.click/musica/go/images/dashboard/realease-song/01.png"
              alt="x"
              width={60}
              height={60}
              className="rounded-tr-xl rounded-bl-xl"
            />
            <div className="flex-1 flex flex-col gap-2 items-start justify-center w-full">
              <strong>DJ Khaled Featuring</strong>
              <span>Edyta Gorniak</span>
            </div>
            <strong>9:52</strong>
          </div>

          <div className="flex gap-2 text-white items-center">
            <Image
              src="https://appsbuildin2.click/musica/go/images/dashboard/realease-song/01.png"
              alt="x"
              width={60}
              height={60}
              className="rounded-tr-xl rounded-bl-xl"
            />
            <div className="flex-1 flex flex-col gap-2 items-start justify-center w-full">
              <strong>DJ Khaled Featuring</strong>
              <span>Edyta Gorniak</span>
            </div>
            <strong>9:52</strong>
          </div>
        </div>
      </div>
    </section>
  );
};
