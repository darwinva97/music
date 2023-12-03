"use client";
import { upload } from "@/utils/upload";
import { type ChangeEvent, useState } from "react";
import { Button } from "../ui/button";

const PickAudioComponent = ({
  audio,
  setAudio,
  name,
}: {
  audio: string;
  setAudio: (audio: string) => void;
  name?: string;
}) => {
  const [loading, setLoading] = useState(false);

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoading(true);
    const audio = e.target.files![0]!;
    const secure_url = await upload(audio, "auto");
    setAudio(secure_url);
    setLoading(false);
  };

  return (
    <div className="flex items-center gap-1">
      {audio && <audio controls src={audio}></audio>}
      <Button
        type="button"
        disabled={loading}
        onClick={(e) => e.stopPropagation()}
      >
        <label className="btn btn-primary btn-sm cursor-pointer">
          <span>{loading ? "Loading..." : "Upload Audio"}</span>
          <input
            type="file"
            disabled={loading}
            className="file-input file-input-sm hidden w-full max-w-xs cursor-pointer"
            onChange={(e) => void onChangeFile(e)}
          />
        </label>
      </Button>

      {name && <input className="hidden" value={audio} readOnly name={name} />}
    </div>
  );
};

type TName = {
  name?: string;
};
type TPickAudioProps = (
  | {
      audio: string;
      setAudio: (audio: string) => void;
    }
  | { audio?: string }
) &
  TName;

export const PickAudio = ({ name, ...props }: TPickAudioProps) => {
  const [audioLocal, setAudioLocal] = useState(props.audio || "");
  if ("setAudio" in props) {
    return (
      <PickAudioComponent
        setAudio={props.setAudio}
        audio={props.audio}
        name={name}
      />
    );
  }
  return (
    <PickAudioComponent
      audio={audioLocal}
      setAudio={setAudioLocal}
      name={name}
    />
  );
};
