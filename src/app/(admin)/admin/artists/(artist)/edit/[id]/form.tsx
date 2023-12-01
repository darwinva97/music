"use client";
import { useFormState } from "react-dom";
import { editArtist } from "./edit-artist";
import { ArtistForm } from "../../form";
import { TArtistFull, TSongFull } from "@/types";

type TEditFormProps = {
  artist: TArtistFull;
  songs: TSongFull[];
};
export const EditForm = ({ artist, songs }: TEditFormProps) => {
  const [state, formAction] = useFormState(editArtist, {
    message: null,
  });
  const action = async (formData: FormData) => {
    formData.set("id", artist.id);
    formAction(formData);
  };
  return (
    <ArtistForm
      state={state}
      action={action}
      defaultValues={{
        ...artist,
      }}
      btnLabel="Actualizar"
      songs={songs}
    />
  );
};
