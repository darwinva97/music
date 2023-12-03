import { db } from "@/db";
import { TrendingSongs } from "../../trending";

const SearchPage = async function ({
  params: { search },
}: {
  params: { search: string };
}) {
  const songs = await db.song.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
    take: 100,
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
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl text-center mt-4 mb-10">
          {songs.length === 0
            ? `No se encontraron resultados para: ${search}`
            : `Resultados para: ${search}`}
        </h1>
      </div>
      {songs.length > 0 && <TrendingSongs songs={songs} />}
    </div>
  );
};

export default SearchPage;
