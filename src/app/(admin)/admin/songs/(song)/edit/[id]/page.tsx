import { db } from "@/db";
import { EditForm } from "./form";

async function EditSong({ params: { id } }: { params: { id: string } }) {
  try {
    const songPromise = db.song.findUnique({
      where: {
        id,
      },
      include: {
        artists: {
          include: {
            artist: true,
          },
        },
        band: true,
      },
    });
    const artistsPromise = db.artist.findMany({
      include: {
        songs: {
          include: {
            song: true,
          },
        },
      },
    });
    const bandsPromise = db.band.findMany({
      include: {
        songs: true,
      },
    });
    const [song, bands, artists] = await Promise.all([
      songPromise,
      bandsPromise,
      artistsPromise,
    ]);
    return (
      artists &&
      song && (
        <div>
          <EditForm song={song} artists={artists} bands={bands} />
        </div>
      )
    );
  } catch (error) {
    return null;
  }
}

export default EditSong;
