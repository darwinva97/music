import { getAlbumsBySlug } from "@/api";
import { Play } from "lucide-react";
import Image from "next/image";

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
            <strong className="text-xl">Artistas:</strong>
            <h2 className="text-xl">
              {album.band?.rendered ||
                album.artists?.value.map((a) => a.artist_name).join(", ")}
            </h2>
          </div>
          <div className="inline-flex items-center gap-3 border-black border-[2px] rounded-full px-2 py-1 w-[200px] cursor-pointer m-auto md:m-0">
            <Play fill="black" />
            <span>Reproducir Álbum</span>
          </div>
        </div>
      </header>
      <section className="text-lg mt-6">
        <strong className="text-xl">Canciones:</strong>
        <ul>
          {album.songs.value.map((song) => {
            return <li key={song.id}>{song.song_name}</li>;
          })}
        </ul>
      </section>
    </div>
  );
};

export default Album;
