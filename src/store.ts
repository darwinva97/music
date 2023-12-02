import { create } from "zustand";
import { TSongFull } from "./types";

export type TStore = {
  song: TSongFull | null;
  setSong: (song: TSongFull | null) => void;
};

export const useStore = create<TStore>((set) => ({
  song: null,
  setSong: (song: TSongFull | null) => set({ song }),
}));
