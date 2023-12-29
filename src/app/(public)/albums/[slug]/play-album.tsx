"use client";
import { getSongsByIds } from "@/api";
import { SongValueAlbum } from "@/api/album";
import { useStore } from "@/store";
import { Play } from "lucide-react";
import { useEffect } from "react";

export const PlayAlbum = ({ songs }: { songs: SongValueAlbum[] }) => {
  const { setSongs } = useStore();

  useEffect(() => {
    getSongsByIds(songs.map((s) => s.id)).then((res) => {
      const playlist = res.map((song) => ({ song, current: false }));
      if (playlist[0]) {
        playlist[0].current = true;
      }
      setSongs(playlist);
    });
  }, []);
  return (
    <div className="inline-flex items-center gap-3 border-black border-[2px] rounded-full px-2 py-1 w-[200px] cursor-pointer m-auto md:m-0">
      <Play fill="black" />
      <span>Reproducir Álbum</span>
    </div>
  );
};
