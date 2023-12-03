"use client";
import { useId, useRef } from "react";
import Select from "react-select";
import { BtnSubmit } from "@/components/BtnSubmit";
import { Input } from "@/components/ui/input";
import { PickImage } from "@/components/PickImage";
import type { TSongFull, TSongFormProps, TSong } from "@/types";
import { PickAudio } from "@/components/PickAudio";
import { PickVideo } from "@/components/PickVideo";

export const SongForm = ({
  artists,
  action,
  state,
  defaultValues,
  btnLabel,
  bands,
}: TSongFormProps<TSong>) => {
  const artistsSelect = useId();
  const bandsSelect = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const artistsOptions = artists.map((artist) => ({
    value: artist.id,
    label: artist.name,
  }));
  const bandsOptions = bands.map((band) => ({
    value: band.id,
    label: band.name,
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
        <span>Artistas</span>
        <Select
          id={artistsSelect}
          instanceId={artistsSelect}
          isMulti
          name="artists"
          options={artistsOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          defaultValue={
            Array.isArray(defaultValues?.artists)
              ? defaultValues?.artists.map((artist) => ({
                  value: artist.id,
                  label: artist.artist.name,
                }))
              : []
          }
        />
      </div>
      <div className="flex flex-col">
        <span>Banda</span>
        <Select
          id={bandsSelect}
          instanceId={bandsSelect}
          name="band"
          options={bandsOptions}
          isClearable
          isSearchable
          className="basic-multi-select"
          classNamePrefix="select"
          defaultValue={
            defaultValues?.band && typeof defaultValues?.band === "object"
              ? { value: defaultValues.band.id, label: defaultValues.band.name }
              : null
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

      <PickAudio name="audioSrc" audio={defaultValues?.audioSrc || ""} />
      <PickVideo name="videoSrc" video={defaultValues?.videoSrc || ""} />
      <BtnSubmit>{btnLabel}</BtnSubmit>
      <span aria-live="polite" role="status">
        {state?.message}
      </span>
    </form>
  );
};
