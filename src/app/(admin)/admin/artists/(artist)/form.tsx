"use client";
import { useRef } from "react";
import Select from "react-select";
import { BtnSubmit } from "@/components/BtnSubmit";
import { Input } from "@/components/ui/input";
import { PickImage } from "@/components/PickImage";
import type { TArtistFull, TProfileFormProps } from "@/types";

export const ArtistForm = ({
  songs,
  action,
  state,
  defaultValues,
  btnLabel,
}: TProfileFormProps<TArtistFull>) => {
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
      className="flex flex-col gap-4 max-w-3xl m-auto"
    >
      <Input name="name" required defaultValue={defaultValues?.name || ""} />

      <div className="flex flex-col">
        <span>Songs</span>
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
                  label: song.song.name,
                }))
              : []
          }
        />
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col flex-1">
          <span>Foto</span>
          <PickImage name="photo" image={defaultValues?.photo || ""} />
        </div>
        <div className="flex flex-col flex-1">
          <span>Foto de Portada</span>
          <PickImage name="coverPhoto" image={defaultValues?.photo || ""} />
        </div>
      </div>
      <BtnSubmit>{btnLabel}</BtnSubmit>
      <span aria-live="polite" role="status">
        {state?.message}
      </span>
    </form>
  );
};
