import { TrendingSongs } from "../trending";
import { getSongs } from "@/api";

const Pages = async () => {
  const songs = await getSongs();
  return (
    <div>
      <h1 className="text-2xl text-center mt-4 mb-10">Últimas canciones</h1>
      <TrendingSongs songs={songs} hideHeader />
    </div>
  );
};

export default Pages;
