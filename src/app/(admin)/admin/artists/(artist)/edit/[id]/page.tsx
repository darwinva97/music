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
            song: true,
          },
        },
      },
    });
    const songsPromise = db.song.findMany({
      include: {
        artists: true,
      },
    });
    const [artist, songs] = await Promise.all([artistPromise, songsPromise]);

    return (
      artist && (
        <div>
          <EditForm artist={artist} songs={songs} />
        </div>
      )
    );
  } catch (error) {
    return null;
  }
}

export default EditArtist;