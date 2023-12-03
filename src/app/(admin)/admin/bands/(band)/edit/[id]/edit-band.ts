"use server";

import { db } from "@/db";
import { TFormState } from "@/types/form";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const editBandSchema = z.object({
  id: z.string(),
  name: z.string(),
  photo: z.string().optional(),
  coverPhoto: z.string().optional(),
  featured: z.boolean().optional(),
  songs: z.array(z.string()),
});

export const editBand = async (
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
      songs: formData.getAll("songs").filter(Boolean),
    };
    const resultParse = editBandSchema.safeParse(dataToParse);

    if (!resultParse.success) {
      console.log(resultParse.error.format(), "error");
      return {
        message: JSON.stringify(resultParse.error.format(), null, 2),
      };
    }

    const data = resultParse.data;

    await db.band.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        photo: data.photo,
        coverPhoto: data.coverPhoto,
        featured: data.featured,
        songs: {
          set: [],
          connect: data.songs.map((song) => ({ id: song })),
        },
      },
    });

    revalidatePath("/admin/artists/create");
    revalidatePath("/admin/artists");
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
