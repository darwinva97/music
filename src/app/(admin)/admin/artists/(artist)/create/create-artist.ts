"use server";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const createArtistSchema = z.object({
  name: z.string(),
  photo: z.string(),
  coverPhoto: z.string(),
  featured: z.boolean().optional(),
  songs: z.array(z.string()),
});

type TState = {
  message: string | null;
};
export async function createArtist(
  _prevState: TState,
  formData: FormData
): Promise<TState> {
  try {
    const payload = {
      name: formData.get("name"),
      photo: formData.get("photo"),
      coverPhoto: formData.get("coverPhoto"),
      featured: !!formData.get("featured"),
      songs: formData.getAll("songs").filter(Boolean),
    };
    const resultParse = createArtistSchema.safeParse(payload);
    if (!resultParse.success) {
      return {
        message: JSON.stringify(resultParse.error.format(), null, 2),
      };
    }
    const data = resultParse.data;
    const newArtist = await db.artist.create({
      data: {
        name: data.name,
        photo: data.photo,
        coverPhoto: data.coverPhoto,
        slug: data.name.replaceAll(" ", "-").toLowerCase(),
        songs: {
          connect: data.songs.map((song) => ({ id: song })),
        },
      },
    });
    revalidatePath("/admin/artists/create");
    revalidatePath("/admin/artists");
    revalidatePath("/");
    console.log(newArtist);
    return {
      message: "Realizado!",
    };
  } catch (error) {
    return {
      message: "Failed to create",
    };
  }
}
