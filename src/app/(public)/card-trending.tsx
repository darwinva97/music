"use client";
import { ContainerImage } from "@/components/ContainerImage";
import { useStore } from "@/store";
import { TSong } from "@/types";

export const CardTrending = (song: TSong) => {
  const { photo, song_name, band, artists } = song;
  const { playSong } = useStore();
  return (
    <div
      className="inline-flex flex-col items-center h-full"
      onClick={() => {
        playSong(song);
      }}
    >
      <ContainerImage image={photo.rendered} width={300} height={260} />
      <div className="inline-flex flex-col gap-2 p-4 text-center max-w-[300px]">
        <strong>{song_name.rendered}</strong>
        <span>
          {band?.rendered ||
            artists.value.map((artist) => artist.artist_name).join(", ")}
        </span>
      </div>
    </div>
  );
};
