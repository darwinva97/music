import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { TSong } from "./types";

export type TStore = {
  initInteraction: boolean;
  setInitInteraction: (initInteraction: boolean) => void;
  songs: { song: TSong; current?: boolean }[];
  setSongs: (songs: { song: TSong; current?: boolean }[]) => void;
  playSong: (song: TSong) => void;
  nextSong: () => void;
  previousSong: () => void;
  addSong: (song: TSong) => void;
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

export const useStore = create(
  devtools<TStore>((set) => ({
    initInteraction: false,
    setInitInteraction: (initInteraction: boolean) => set({ initInteraction }),
    songs: [],
    setSongs: (songs: { song: TSong; current?: boolean }[]) => set({ songs }),
    playSong: (song: TSong) =>
      set((state) => {
        const songs = [...state.songs];
        const lastSong = [...songs].pop();
        const currentSong = songs.find((song) => song.current);

        if (song.id === currentSong?.song.id) {
          return {
            isPlaying: true,
          };
        }

        const existSongIndex = songs.findIndex(
          (_song) => _song.song.id === song.id
        );

        if (existSongIndex > -1) {
          if (currentSong?.current) {
            currentSong.current = false;
          }
          songs[existSongIndex].current = true;
          return {
            songs,
            isPlaying: true,
          };
        }

        if (lastSong?.current) {
          if (lastSong?.song.id === song.id) {
            return {
              isPlaying: true,
            };
          } else {
            lastSong.current = false;
          }
        }

        return {
          songs: [
            ...songs.map((song) => ({ ...song, current: false })),
            { song, current: true },
          ],
          isPlaying: true,
        };
      }),
    nextSong: () => {
      set((state) => {
        const songs = [...state.songs];
        const currentSongIndex = songs.findIndex((song) => song.current);
        if (currentSongIndex < state.songs.length - 1) {
          songs[currentSongIndex].current = false;
          songs[currentSongIndex + 1].current = true;
          return { songs };
        }
        return state;
      });
    },
    previousSong: () => {
      set((state) => {
        const songs = [...state.songs];
        const currentSongIndex = songs.findIndex((song) => song.current);
        if (currentSongIndex > 0) {
          songs[currentSongIndex].current = false;
          songs[currentSongIndex - 1].current = true;
          return { songs };
        }
        return state;
      });
    },
    addSong: (song: TSong) =>
      set((state) => ({ songs: [...state.songs, { song }] })),
    isPlaying: false,
    setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
    song: null,
    setSong: (song: TSong | null) => set({ song }),
    volume: 100,
    setVolume: (volume: number) => set({ volume }),
    duration: 0,
    setDuration: (duration: number) => set({ duration }),
    lastTime: 0,
    setLastTime: (lastTime: number) => !isNaN(lastTime) && set({ lastTime }),
    currentTime: 0,
    setCurrentTime: (currentTime: number) => set({ currentTime }),
  }))
);
