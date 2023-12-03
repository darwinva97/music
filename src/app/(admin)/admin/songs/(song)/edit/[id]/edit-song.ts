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
  audioSrc: z.string().optional(),
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
      audioSrc: formData.get("audioSrc") || "",
    };
    const resultParse = editSongSchema.safeParse(dataToParse);

    if (!resultParse.success) {
      console.log(resultParse.error.format(), "error");
      return {
        message: JSON.stringify(resultParse.error.format(), null, 2),
      };
    }

    const data = resultParse.data;

    // await db.songsOnArtist.deleteMany({
    //   where: {
    //     songId: data.id,
    //   },
    // });

    const existingArtists = await Promise.all(
      data.artists.map(async (artist) => {
        const existingArtist = await db.artist.findUnique({
          where: { id: artist },
        });
        return existingArtist;
      })
    );

    const validArtists = existingArtists.filter((artist) => artist !== null);

    data.band
      ? await db.song.update({
          where: {
            id: data.id,
          },
          data: {
            name: data.name,
            photo: data.photo,
            coverPhoto: data.coverPhoto,
            featured: data.featured,
            audioSrc: data.audioSrc,
            artists: {
              connectOrCreate: validArtists.map((artist) => ({
                where: {
                  artistId_songId: {
                    songId: data.id,
                    artistId: artist!.id,
                  },
                },
                create: {
                  artist: {
                    connect: { id: artist!.id },
                  },
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
            audioSrc: data.audioSrc,
            artists: {
              connectOrCreate: validArtists.map((artist) => ({
                where: {
                  artistId_songId: {
                    songId: data.id,
                    artistId: artist!.id,
                  },
                },
                create: {
                  artist: {
                    connect: { id: artist!.id },
                  },
                },
              })),
            },
            band: {
              disconnect: true,
            },
          },
        });

    revalidatePath("/admin/songs/edit/" + data.id);
    revalidatePath("/admin/songs/create");
    revalidatePath("/admin/songs");
    revalidatePath("/");

    return {
      message: "Done",
    };
  } catch (error) {
    return {
      message: "Error: " + error,
    };
  }
};
