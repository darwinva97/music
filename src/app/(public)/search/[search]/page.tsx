import { TrendingSongs } from "../../trending";
import { getSongs } from "@/api";
export { revalidate } from "@/config"

const SearchPage = async function ({
  params: { search },
}: {
  params: { search: string };
}) {
  const songs = await getSongs();
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

export const dynamic = "force-dynamic";

export default SearchPage;
