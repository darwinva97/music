"use client";
import { useStore } from "@/store";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

export const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    initInteraction,
    setInitInteraction,
    songs,
    volume,
    setDuration,
    lastTime,
    setCurrentTime,
    isPlaying,
    setIsPlaying,
    nextSong,
    previousSong,
  } = useStore();

  const song = useMemo(() => {
    return songs.find((song) => song.current)?.song;
  }, [songs]);

  const playAudio = async () => {
    if (!audioRef.current) {
      return;
    }
    try {
      await audioRef.current.play();
    } catch (error) {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (initInteraction || !audioRef.current) {
      return;
    }
    const fn = () => {
      if (isPlaying && audioRef.current?.paused && !initInteraction) {
        playAudio();
        setInitInteraction(true);
      }
    };
    window.addEventListener("click", fn);
    return () => {
      window.removeEventListener("click", fn);
    };
  }, [isPlaying, initInteraction, audioRef.current]);

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
      // setIsPlaying(true);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };
    const handlePause = () => {
      setIsPlaying(false);
    };

    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current.addEventListener("play", handlePlay);
    audioRef.current.addEventListener("pause", handlePause);

    if (isPlaying && audioRef.current.paused) {
      playAudio();
    }
    // Limpiar los event listeners cuando el componente se desmonta
    return () => {
      if (!audioRef.current) {
        return;
      }
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.removeEventListener("play", handlePlay);
      audioRef.current.removeEventListener("pause", handlePause);
    };
  }, [isPlaying]);

  useEffect(() => {
    setCurrentTime(0);
    setIsPlaying(true);
    playAudio();
  }, [song]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      playAudio();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = lastTime;
  }, [lastTime]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume / 100;
  }, [volume]);

  const disableNext = useMemo(() => {
    return !song || song?.id === songs[songs.length - 1]?.song.id;
  }, [song, songs]);

  const disablePrev = useMemo(() => {
    return !song || song?.id === songs[0]?.song.id;
  }, [song, songs]);

  return (
    <div
      className={"flex items-center justify-end md:justify-start flex-1 gap-4"}
    >
      <SkipBack
        color={disablePrev ? "#cccccc" : "#ffffff"}
        fill={disablePrev ? "#cccccc" : "#ffffff"}
        cursor={disablePrev ? "not-allowed" : "pointer"}
        strokeWidth={1.75}
        size={30}
        onClick={() => {
          if (disablePrev) {
            return;
          }
          previousSong();
          setIsPlaying(true);
        }}
      />
      {!isPlaying ? (
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
            playAudio();
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
        color={disableNext ? "#cccccc" : "#ffffff"}
        fill={disableNext ? "#cccccc" : "#ffffff"}
        cursor={disableNext ? "not-allowed" : "pointer"}
        strokeWidth={1.75}
        size={30}
        onClick={() => {
          if (disableNext) {
            return;
          }
          nextSong();
          setIsPlaying(true);
        }}
      />
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
        src={song?.audioSrc || ""}
        onEnded={() => {
          if (!audioRef.current) {
            return;
          }
          setIsPlaying(false);
        }}
      />
    </div>
  );
};
