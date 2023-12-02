"use client";
import { useRef } from "react";
import Select from "react-select";
import { BtnSubmit } from "@/components/BtnSubmit";
import { Input } from "@/components/ui/input";
import { PickImage } from "@/components/PickImage";
import type { TSongFull, TSongFormProps, TSong } from "@/types";

export const SongForm = ({
  artists,
  action,
  state,
  defaultValues,
  btnLabel,
  bands,
}: TSongFormProps<TSong>) => {
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
    >
      <Input name="name" required defaultValue={defaultValues?.name || ""} />
      <Select
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
      <Select
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
