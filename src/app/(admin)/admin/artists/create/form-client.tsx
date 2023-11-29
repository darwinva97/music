"use client";
import { useFormState } from "react-dom";
import { BtnSubmit } from "@/components/BtnSubmit";
import { Input } from "@/components/ui/input";
import { createArtist } from "./create-artist";
import { useRef } from "react";

const initialState = {
  message: null,
};

export function ProfileForm() {
  const [state, formAction] = useFormState(createArtist, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={(formData) => {
        formAction(formData);
        formRef?.current?.reset();
      }}
    >
      <Input name="name" defaultValue={""} />
      <BtnSubmit>Crear</BtnSubmit>
      <span aria-live="polite" role="status">
        {state?.message}
      </span>
    </form>
  );
}
