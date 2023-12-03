"use client";
import { ContainerImage } from "@/components/ContainerImage";
import { useStore } from "@/store";
import { TSong } from "@/types";

export const CardTrending = (song: TSong) => {
  const { photo, name, band, artists } = song;
  const { playSong } = useStore();
  return (
    <div
      className="inline-flex flex-col items-center h-full"
      onClick={() => {
        playSong(song);
      }}
    >
      <ContainerImage
        image={
          photo ||
          "https://appsbuildin2.click/musica/go/images/dashboard/tranding-song/01.png"
        }
        width={300}
        height={260}
      />
      <div className="inline-flex flex-col gap-2 p-4 text-center max-w-[300px]">
        <strong>{name}</strong>
        <span>
          {band?.name || artists.map((artist) => artist.artist.name).join(", ")}
        </span>
      </div>
    </div>
  );
};
