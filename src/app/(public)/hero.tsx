"use client";
import { ContainerImage } from "@/components/ContainerImage";
import { Equalizer } from "@/components/Equalizer";
import { cn } from "@/lib/utils";
import { useStore } from "@/store";
import { TSong } from "@/types";
import { useEffect, useState } from "react";

const Card = ({ song }: { song: TSong }) => {
  const { playSong } = useStore();
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    async function obtenerDuracionAudio(url: string) {
      // Crear un elemento de audio
      const audio = new Audio(url);

      // Esperar a que se cargue los metadatos del audio
      await new Promise((resolve) => {
        audio.addEventListener("loadedmetadata", resolve);
      });

      // Obtener la duración del audio
      const duracion = audio.duration;

      // Devolver la duración
      return duracion;
    }
    song.audio.rendered &&
      obtenerDuracionAudio(song.audio.rendered).then(setDuration);
  }, [song]);

  const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="flex gap-2 text-white items-center"
      onClick={() => {
        playSong(song);
      }}
    >
      <ContainerImage
        image={song.photo.rendered}
        width={60}
        height={60}
        className="rounded-tr-xl rounded-bl-xl"
      />
      <div className="flex-1 flex flex-col gap-2 items-start justify-center w-full">
        <strong>{song.song_name.rendered}</strong>
        <span>
          {song.band.rendered ||
            song.artists?.value.map((artist) => artist.artist_name).join(", ")}
        </span>
      </div>
      <strong>{formatDuration(duration)}</strong>
    </div>
  );
};

export const Hero = ({ songs }: { songs: TSong[] }) => {
  const { setSongs, setIsPlaying } = useStore();
  useEffect(() => {
    const playlist = songs.map((song) => ({ song, current: false }));
    playlist[0].current = true;
    setSongs(playlist);
    setIsPlaying(true);
  }, [songs]);
  return (
    <section className="m-4 rounded-tl-xl rounded-tr-xl rounded-bl-3xl shadow-xl overflow-hidden">
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
          {songs.map((song, index) => (
            <Card key={index} song={song} />
          ))}
        </div>
      </div>
    </section>
  );
};
