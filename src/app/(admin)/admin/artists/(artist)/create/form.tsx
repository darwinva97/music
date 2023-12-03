"use client";

import { useFormState } from "react-dom";
import { createArtist } from "./create-artist";
import { ArtistForm } from "../form";
import { TArtistFull, TSongFull } from "@/types";

type TEditFormProps = {
  songs: TSongFull[];
};
export const CreateForm = ({ songs }: TEditFormProps) => {
  const [state, formAction] = useFormState(createArtist, {
    message: null,
  });
  return (
    <ArtistForm
      state={state}
      action={formAction}
      btnLabel="Crear"
      songs={songs}
    />
  );
};
