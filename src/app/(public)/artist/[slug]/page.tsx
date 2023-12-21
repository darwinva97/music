import { redirect } from "next/navigation";
import { TrendingSongs } from "../../trending";
import { ContainerImage } from "@/components/ContainerImage";
import { getArtistsBySlug, getSongs } from "@/api";
export { revalidate } from "@/config"

const Artist = async function ({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const artist = (await getArtistsBySlug(slug))[0];
  const allSongs = await getSongs();
  const songs = allSongs.filter(
    (song) =>
      Array.isArray(artist.songs.value) &&
      artist.songs.value.find((s) => s.id === song.id)
  );
  if (!artist) {
    redirect("/404");
  }
  console.log(artist.songs);
  return (
    <div>
      {artist.cover.rendered &&
      artist.photo.rendered !== artist.cover.rendered ? (
        <header style={{ backgroundImage: `url(${artist.cover.rendered})` }}>
          <div className="flex flex-col items-center">
            {artist.photo && (
              <ContainerImage
                image={artist.photo.rendered}
                width={300}
                height={300}
              />
            )}
            <h1 className="text-3xl text-center mt-4 mb-10">
              {artist.artist_name.rendered}
            </h1>
          </div>
        </header>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-center mt-4 mb-10">
            {artist.artist_name.rendered}
          </h1>

          {artist.photo && (
            <ContainerImage
              image={artist.photo.rendered}
              width={300}
              height={300}
            />
          )}
        </div>
      )}
      <TrendingSongs songs={songs} hideTrendingLink />
    </div>
  );
};

export default Artist;
