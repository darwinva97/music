"use client";
import { useStore } from "@/store";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    song,
    volume,
    setDuration,
    lastTime,
    setCurrentTime,
    isPlaying,
    setIsPlaying,
  } = useStore();

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

  useEffect(() => {
    setCurrentTime(0);
    audioRef.current?.play();
    setIsPlaying(true);
  }, [song]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = lastTime;
  }, [lastTime]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume / 100;
  }, [volume]);

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
      {isPlaying ? (
        <Play
          color="#ffffff"
          fill="white"
          strokeWidth={1.75}
          size={30}
          cursor="pointer"
          onClick={() => {
            if (!audioRef.current) {
              return;
            }
            audioRef.current.play();
            setIsPlaying(true);
          }}
        />
      ) : (
        <Pause
          color="#ffffff"
          fill="white"
          strokeWidth={1.75}
          size={30}
          cursor="pointer"
          onClick={() => {
            if (!audioRef.current) {
              return;
            }
            audioRef.current.pause();
            setIsPlaying(false);
          }}
        />
      )}
      <SkipForward
        color="#ffffff"
        fill="white"
        strokeWidth={1.75}
        size={30}
        cursor="pointer"
      />
      {song?.audioSrc ? (
        <audio
          ref={audioRef}
          onLoadedMetadata={() => {
            if (!audioRef.current) {
              return;
            }
            setDuration(audioRef.current.duration);
          }}
          onTimeUpdate={() => {
            if (!audioRef.current) {
              return;
            }
            setCurrentTime(audioRef.current.currentTime);
          }}
          src={song?.audioSrc}
          autoPlay
          onEnded={() => {
            if (!audioRef.current) {
              return;
            }
            setIsPlaying(false);
          }}
        />
      ) : (
        <audio ref={audioRef} src="tu_archivo_de_audio.mp3" />
      )}
    </div>
  );
};
