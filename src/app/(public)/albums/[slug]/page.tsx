import { getAlbumsBySlug } from "@/api";
import { Play } from "lucide-react";
import Image from "next/image";
import { PlayAlbum } from "./play-album";

type TPageProps = {
  params: {
    slug: string;
  };
};

const Album = async ({ params: { slug } }: TPageProps) => {
  const albums = await getAlbumsBySlug(slug);
  const album = albums[0];
  return (
    <div className="px-4 lg:px-0 py-4 mb-[11rem]">
      <header className="flex items-center md:items-stretch flex-col md:flex-row gap-4">
        <Image
          src={album.photo.rendered}
          alt={album.album_name.rendered}
          width={300}
          height={300}
        />
        <div className="flex flex-col justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{album.album_name.rendered}</h1>
            <hr className="my-4" />
            {Array.isArray(album.artists?.value) ? (
              <>
                <strong className="text-xl">Artistas:</strong>
                <h2 className="text-xl">
                  {album.artists.value.map((a) => a.artist_name).join(", ")}
                </h2>
              </>
            ) : (
              <>
                <strong className="text-xl">Banda:</strong>
                <h2 className="text-xl">{album.band?.rendered}</h2>
              </>
            )}
          </div>
          {Array.isArray(album.songs?.value) && (
            <PlayAlbum songs={album.songs.value} />
          )}
        </div>
      </header>
      {Array.isArray(album.songs?.value) && (
        <section className="text-lg mt-6">
          <strong className="text-xl">Canciones:</strong>
          <ul>
            {album.songs.value.reverse().map((song) => {
              return <li key={song.id}>{song.song_name}</li>;
            })}
          </ul>
        </section>
      )}
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Album;
