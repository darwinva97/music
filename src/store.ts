import { create } from "zustand";
import { TSong, TSongFull } from "./types";

export type TStore = {
  song: TSong | null;
  setSong: (song: TSong | null) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
  duration: number;
  setDuration: (duration: number) => void;
  currentTime: number;
  lastTime: number;
  setLastTime: (lastTime: number) => void;
  setCurrentTime: (currentTime: number) => void;
};

export const useStore = create<TStore>((set) => ({
  isPlaying: false,
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  song: null,
  setSong: (song: TSong | null) => set({ song }),
  volume: 0.5,
  setVolume: (volume: number) => set({ volume }),
  duration: 0,
  setDuration: (duration: number) => set({ duration }),
  lastTime: 0,
  setLastTime: (lastTime: number) => set({ lastTime }),
  currentTime: 0,
  setCurrentTime: (currentTime: number) => set({ currentTime }),
}));
