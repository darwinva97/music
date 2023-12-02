"use server";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const createBandSchema = z.object({
  name: z.string(),
  photo: z.string(),
  coverPhoto: z.string(),
  featured: z.boolean().optional(),
  songs: z.array(z.string()),
});

type TState = {
  message: string | null;
};
export async function createBand(
  prevState: TState,
  formData: FormData
): Promise<TState> {
  console.log(prevState, "prevState");
  try {
    const payload = {
      name: formData.get("name"),
      photo: formData.get("photo"),
      coverPhoto: formData.get("coverPhoto"),
      featured: !!formData.get("featured"),
      songs: formData.getAll("songs").filter(Boolean),
    };
    const resultParse = createBandSchema.safeParse(payload);
    if (!resultParse.success) {
      return {
        message: JSON.stringify(resultParse.error.format(), null, 2),
      };
    }
    const data = resultParse.data;
    const newBand = await db.band.create({
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
    revalidatePath("/admin/bands/create");
    revalidatePath("/admin/bands");
    revalidatePath("/");
    console.log(newBand);
    return {
      message: "Done!",
    };
  } catch (error) {
    return {
      message: "Failed to create",
    };
  }
}
