"use client";
import { useRef } from "react";
import Select from "react-select";
import { BtnSubmit } from "@/components/BtnSubmit";
import { Input } from "@/components/ui/input";
import { PickImage } from "@/components/PickImage";
import { PickAudio } from "@/components/PickAudio";
import { PickVideo } from "@/components/PickVideo";
import type { TBandFull, TProfileFormProps } from "@/types";

export const BandForm = ({
  songs,
  action,
  state,
  defaultValues,
  btnLabel,
}: TProfileFormProps<TBandFull>) => {
  const formRef = useRef<HTMLFormElement>(null);
  const songsOptions = songs.map((song) => ({
    value: song.id,
    label: song.name,
  }));
  return (
    <form
      ref={formRef}
      action={(formData) => {
        action(formData);
        formRef?.current?.reset();
      }}
    >
      <Input name="name" required defaultValue={defaultValues?.name || ""} />
      <Select
        isMulti
        name="songs"
        options={songsOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        defaultValue={
          Array.isArray(defaultValues?.songs)
            ? defaultValues?.songs.map((song) => ({
                value: song.id,
                label: song.name,
              }))
            : []
        }
      />
      <PickImage name="photo" image={defaultValues?.photo || ""} />
      <PickImage name="coverPhoto" image={defaultValues?.photo || ""} />
      {/* <PickAudio name="audioSrc" />
      <PickVideo name="videoSrc" /> */}
      <BtnSubmit>{btnLabel}</BtnSubmit>
      <span aria-live="polite" role="status">
        {state?.message}
      </span>
    </form>
  );
};
