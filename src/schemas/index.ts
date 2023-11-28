import { z } from "zod";

export const createSongSchema = z.object({
  name: z.string(),
  photo: z.string(),
  coverPhoto: z.string(),
  audioSrc: z.string(),
  videoSrc: z.string(),
  featured: z.boolean(),
});
