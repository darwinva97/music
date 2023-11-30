import { db } from "@/db";
import { ProfileForm } from "./form-client";

export const Form = async () => {
  const songs = await db.song.findMany({
    include: {
      artists: true,
    },
  });
  return <ProfileForm songs={songs} />;
};
