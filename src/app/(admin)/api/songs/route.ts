import { db } from "@/db";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";

const createSongSchema = z.object({
  name: z.string(),
});

export const POST = async function (req: Request) {
  const body = await req.json();
  const parseResult = createSongSchema.safeParse(body);
  if (!parseResult.success) {
    return Response.json({
      data: null,
      error: parseResult.error,
    });
  }
  const { name } = parseResult.data;
  const newSong = await db.song.create({
    data: {
      name,
    },
  });
  return Response.json({
    data: newSong,
    error: null,
  });
};
