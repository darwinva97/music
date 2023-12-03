import { db } from "@/db";
import { Hero } from "./hero";
import { Albums } from "./albums";
import { Artists } from "./artists";
import { HotSongs } from "./hot-songs";
import { HotVideos } from "./hot-videos";
import "react-multi-carousel/lib/styles.css";
import { TrendingSongs } from "./trending";

export default async function ProfilePage() {
  const songs = await db.song.findMany({
    include: {
      artists: {
        include: {
          artist: true,
        },
      },
      band: true,
      playlists: {
        include: {
          playlist: true,
        },
      },
    },
  });
  const artists = await db.artist.findMany();
  return (
    <div>
      <Hero songs={songs.slice(0, 4)} />
      <Albums />
      <Artists artists={artists} />
      <TrendingSongs songs={songs} />
      <HotSongs songs={songs} />
      <HotVideos songs={songs} />
    </div>
  );
}
