import { db } from "@/db";

export default async function ProfilePage() {
  await db.song.findMany({
    include: {
      artists: true,
      band: true,
      playlists: true,
    },
  });
  // return <pre>{JSON.stringify(session, null, 2)}</pre>;
  return null;
}
