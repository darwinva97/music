"use client";
import { useFormState } from "react-dom";
import { editSong } from "./edit-song";
import { SongForm } from "../../form";
import { TArtistFull, TSong, TSongFull } from "@/types";
import { Band } from "@prisma/client";

type TEditFormProps = {
  artists: TArtistFull[];
  bands: Band[];
  song: TSong;
};
export const EditForm = ({ artists, song, bands }: TEditFormProps) => {
  const [state, formAction] = useFormState(editSong, {
    message: null,
  });
  const action = async (formData: FormData) => {
    formData.set("id", song.id);
    formAction(formData);
  };
  return (
    <SongForm
      state={state}
      action={action}
      defaultValues={{
        ...song,
      }}
      btnLabel="Actualizar"
      artists={artists}
      bands={bands}
    />
  );
};
