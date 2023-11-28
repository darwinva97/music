import { db } from "@/db";
import { createSongSchema } from "@/schemas";

export const POST = async function (req: Request) {
  const body = await req.json();
  const parseResult = createSongSchema.safeParse(body);
  if (!parseResult.success) {
    return Response.json({
      data: null,
      error: parseResult.error,
    });
  }
  const newSong = await db.song.create({
    data: parseResult.data,
  });
  return Response.json({
    data: newSong,
    error: null,
  });
};
