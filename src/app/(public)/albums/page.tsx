import { Albums } from "../albums";
import { getAlbums } from "@/api";
export { revalidate } from "@/config"

const AlbumsPage = async () => {
  const albums = await getAlbums();
  return (
    <div>
      <h1 className="text-2xl text-center mt-4 mb-10">Últimos Álbumes</h1>
      <Albums albums={albums} />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default AlbumsPage;
