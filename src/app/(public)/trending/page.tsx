import { TrendingSongs } from "../trending";
import { getSongs } from "@/api";
export { revalidate } from "@/config";

const Pages = async () => {
  const songs = await getSongs();
  return (
    <div>
      <h1 className="text-2xl text-center mt-4 mb-10">Trending</h1>
      <TrendingSongs songs={songs} hideHeader />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Pages;
