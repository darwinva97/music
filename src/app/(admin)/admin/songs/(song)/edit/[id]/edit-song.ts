"use server";

import { db } from "@/db";
import { TFormState } from "@/types/form";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const editSongSchema = z.object({
  id: z.string(),
  name: z.string(),
  photo: z.string().optional(),
  coverPhoto: z.string().optional(),
  featured: z.boolean().optional(),
  artists: z.array(z.string()),
  band: z.string().optional(),
});

export const editSong = async (
  prevState: TFormState,
  formData: FormData
): Promise<TFormState> => {
  try {
    const dataToParse = {
      id: formData.get("id"),
      name: formData.get("name"),
      photo: formData.get("photo"),
      coverPhoto: formData.get("coverPhoto"),
      featured: !!formData.get("featured"),
      band: formData.get("band") || "",
      artists: formData.getAll("artists").filter(Boolean),
    };
    const resultParse = editSongSchema.safeParse(dataToParse);

    if (!resultParse.success) {
      console.log(resultParse.error.format(), "error");
      return {
        message: JSON.stringify(resultParse.error.format(), null, 2),
      };
    }

    const data = resultParse.data;

    await db.songsOnArtist.deleteMany({
      where: {
        songId: data.id,
      },
    });

    const updatedArtist = data.band
      ? await db.song.update({
          where: {
            id: data.id,
          },
          data: {
            name: data.name,
            photo: data.photo,
            coverPhoto: data.coverPhoto,
            featured: data.featured,
            artists: {
              create: data.artists.map((artist) => ({
                artist: {
                  connect: { id: artist },
                },
              })),
            },
            band: {
              connect: { id: data.band },
            },
          },
        })
      : await db.song.update({
          where: {
            id: data.id,
          },
          data: {
            name: data.name,
            photo: data.photo,
            coverPhoto: data.coverPhoto,
            featured: data.featured,
            artists: {
              create: data.artists.map((artist) => ({
                artist: {
                  connect: { id: artist },
                },
              })),
            },
          },
        });

    revalidatePath("/admin/artists/create");
    revalidatePath("/admin/artists");
    revalidatePath("/");
    console.log(updatedArtist);

    return {
      message: "Done",
    };
  } catch (error) {
    return {
      message: "Error: " + error,
    };
  }
};
