"use client";
import { useFormState } from "react-dom";
import { editBand } from "./edit-band";
import { BandForm } from "../../form";
import type { TBandFull, TSongFull } from "@/types";

type TEditFormProps = {
  band: TBandFull;
  songs: TSongFull[];
};
export const EditForm = ({ band, songs }: TEditFormProps) => {
  const [state, formAction] = useFormState(editBand, {
    message: null,
  });
  const action = async (formData: FormData) => {
    formData.set("id", band.id);
    formAction(formData);
  };
  return (
    <BandForm
      state={state}
      action={action}
      defaultValues={{
        ...band,
      }}
      btnLabel="Actualizar"
      songs={songs}
    />
  );
};
