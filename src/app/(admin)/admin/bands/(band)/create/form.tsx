"use client";

import { useFormState } from "react-dom";
import { createBand } from "./create-band";
import { BandForm } from "../form";
import type { TSongFull } from "@/types";

type TEditFormProps = {
  songs: TSongFull[];
};
export const CreateBandForm = ({ songs }: TEditFormProps) => {
  const [state, formAction] = useFormState(createBand, {
    message: null,
  });
  return (
    <BandForm
      state={state}
      action={formAction}
      btnLabel="Crear"
      songs={songs}
    />
  );
};
