import { db } from "@/db";
import { EditForm } from "./form";

async function EditArtist({ params: { id } }: { params: { id: string } }) {
  try {
    const artistPromise = db.artist.findUnique({
      where: {
        id,
      },
      include: {
        songs: {
          include: {
            song: {
              include: {
                artists: true,
              },
            },
          },
        },
        bands: true,
      },
    });
    const songsPromise = db.song.findMany({
      include: {
        artists: {
          include: {
            artist: {
              include: {
                songs: {
                  include: {
                    song: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    const [artist, songs] = await Promise.all([artistPromise, songsPromise]);

    return (
      artist && (
        <div>
          <h1 className="text-3xl text-center mt-4 mb-10">
            Edicion del {artist.name}
          </h1>
          <EditForm artist={artist} songs={songs} />
        </div>
      )
    );
  } catch (error) {
    return null;
  }
}

export default EditArtist;
