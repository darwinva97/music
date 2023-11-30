"use server";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const createArtistSchema = z.object({
  name: z.string(),
  songs: z.array(z.string()),
});

type TState = {
  message: string | null;
};
export async function createArtist(
  prevState: TState,
  formData: FormData
): Promise<TState> {
  console.log(prevState, "prevState");
  try {
    const payload = {
      name: formData.get("name"),
      songs: formData.getAll("songs"),
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
      message: "Done!",
    };
  } catch (error) {
    return {
      message: "Failed to create",
    };
  }
}
