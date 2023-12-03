import { db } from "@/db";
import { EditForm } from "./form";

async function EditBand({ params: { id } }: { params: { id: string } }) {
  try {
    const bandPromise = db.band.findUnique({
      where: {
        id,
      },
      include: {
        songs: true,
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
    const [band, songs] = await Promise.all([bandPromise, songsPromise]);

    return (
      band && (
        <div>
          <EditForm band={band} songs={songs} />
        </div>
      )
    );
  } catch (error) {
    return null;
  }
}

export default EditBand;
