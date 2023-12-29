import { Hero } from "./hero";
import { Albums } from "./albums";
import { Artists } from "./artists";
import { HotSongs } from "./hot-songs";
import { HotVideos } from "./hot-videos";
import { TrendingSongs } from "./trending";
import { getAlbums, getArtists, getSongs } from "@/api";
import { Metadata } from "next";
export { revalidate } from "@/config";

export default async function ProfilePage() {
  const songsPromises = getSongs();
  const artistsPromises = getArtists();
  const albumsPromises = getAlbums();
  const [songs, artists, albums] = await Promise.all([
    songsPromises,
    artistsPromises,
    albumsPromises,
  ]);
  return (
    <div>
      <Hero songs={songs.filter((song) => song.audio.rendered).slice(0, 4)} />
      <Albums albums={albums} />
      <Artists artists={artists} />
      <TrendingSongs songs={songs} />
      <HotSongs songs={songs} />
      <HotVideos songs={songs} />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Welcome to OstDoramas",
  description:
    "Discover the best doramas music on the internet. All about the music you love and more.",
};

export const dynamic = "force-dynamic";
