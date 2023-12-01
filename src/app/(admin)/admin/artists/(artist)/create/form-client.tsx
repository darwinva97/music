"use client";
import { useFormState } from "react-dom";
import { BtnSubmit } from "@/components/BtnSubmit";
import { Input } from "@/components/ui/input";
import { createArtist } from "./create-artist";
import { useRef } from "react";
import Select from "react-select";
import { Song } from "@prisma/client";
import { PickImage } from "@/components/PickImage";
import { PickAudio } from "@/components/PickAudio";
import { PickVideo } from "@/components/PickVideo";

const initialState = {
  message: null,
};

type TProfileFormProps = {
  songs: (Song & {
    artists: {
      id: string;
      artistId: string;
      songId: string;
    }[];
  })[];
};
export function ProfileForm({ songs }: TProfileFormProps) {
  const [state, formAction] = useFormState(createArtist, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const songsOptions = songs.map((song) => ({
    value: song.id,
    label: song.name,
  }));
  return (
    <form
      ref={formRef}
      action={(formData) => {
        formAction(formData);
        formRef?.current?.reset();
      }}
    >
      <Input name="name" required />
      <Select
        isMulti
        name="songs"
        options={songsOptions}
        className="basic-multi-select"
        classNamePrefix="select"
      />
      <PickImage name="photo" />
      <PickImage name="coverPhoto" />
      {/* <PickAudio name="audioSrc" />
      <PickVideo name="videoSrc" /> */}
      <BtnSubmit>Crear</BtnSubmit>
      <span aria-live="polite" role="status">
        {state?.message}
      </span>
    </form>
  );
}
