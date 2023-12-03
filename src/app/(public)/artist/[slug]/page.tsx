import { db } from "@/db";
import { redirect } from "next/navigation";
import { TrendingSongs } from "../../trending";
import { ContainerImage } from "@/components/ContainerImage";

const Artist = async function ({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const artist = await db.artist.findUnique({
    where: {
      slug,
    },
    include: {
      songs: {
        include: {
          song: {
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
          },
        },
      },
      albums: {
        include: {
          album: true,
        },
      },
      bands: {
        include: {
          band: true,
        },
      },
    },
  });
  if (!artist) {
    redirect("/404");
  }
  return (
    <div>
      {artist.coverPhoto && artist.photo !== artist.coverPhoto ? (
        <header style={{ backgroundImage: `url(${artist.coverPhoto})` }}>
          <div className="flex flex-col items-center">
            {artist.photo && (
              <ContainerImage image={artist.photo} width={300} height={300} />
            )}
            <h1 className="text-3xl text-center mt-4 mb-10">{artist.name}</h1>
          </div>
        </header>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-center mt-4 mb-10">{artist.name}</h1>

          {artist.photo && (
            <ContainerImage image={artist.photo} width={300} height={300} />
          )}
        </div>
      )}
      <TrendingSongs
        songs={artist.songs.map((song) => song.song)}
        hideTrendingLink
      />
    </div>
  );
};

export default Artist;
