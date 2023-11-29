import { db } from "@/db";
import { Hero } from "./hero";
import { Albums } from "./albums";
import { Artists } from "./artists";
import { HotSongs } from "./hot-songs";
import { HotVideos } from "./hot-videos";
import "react-multi-carousel/lib/styles.css";
import { TrendingSongs } from "./trending";

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
      <TrendingSongs />
      <HotSongs />
      <HotVideos />
    </div>
  )
}
