"use client";
import { Play, SkipBack, SkipForward } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    // Actualizar la duración del audio cuando se carga
    setDuration(audioRef.current.duration);

    // Manejar eventos de reproducción y tiempo del audio
    const handleTimeUpdate = () => {
      if (!audioRef.current) {
        return;
      }
      setCurrentTime(audioRef.current.currentTime);
    };

    const handlePlayPause = () => {
      setIsPlaying(!isPlaying);
    };

    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current.addEventListener("play", handlePlayPause);
    audioRef.current.addEventListener("pause", handlePlayPause);

    // Limpiar los event listeners cuando el componente se desmonta
    return () => {
      if (!audioRef.current) {
        return;
      }
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.removeEventListener("play", handlePlayPause);
      audioRef.current.removeEventListener("pause", handlePlayPause);
    };
  }, [isPlaying]);
  return (
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
      <audio ref={audioRef} src="tu_archivo_de_audio.mp3" />
    </div>
  );
};
