import { db } from "@/db";
import { Hero } from "./hero";
import { Albums } from "./albums";
import { Artists } from "./artists";

export default async function ProfilePage() {
  await db.song.findMany({
    include: {
      artists: true,
      band: true,
      playlists: true,
    },
  });
  // return <pre>{JSON.stringify(session, null, 2)}</pre>;
  return (
    <div>
      <Hero />
      <Albums />
      <Artists />
    </div>
  )
}
