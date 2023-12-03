import { db } from "@/db";
import { CreateForm } from "./form";

const CreateSong = async () => {
  try {
    const songs = await db.song.findMany({
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

    return (
      <div>
        <CreateForm songs={songs} />
      </div>
    );
  } catch (error) {
    return null;
  }
};

export default CreateSong;
