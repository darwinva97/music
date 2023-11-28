"use client";
import { upload } from "@/utils/upload";
import { type ChangeEvent, useState } from "react";

export const PickAudio = ({
  audio,
  setAudio,
}: {
  audio: string;
  setAudio: (audio: string) => void;
}) => {
  const [loading, setLoading] = useState(false);

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("Changing file");
    setLoading(true);
    const audio = e.target.files![0]!;
    const secure_url = await upload(audio, "auto");
    setAudio(secure_url);
    console.log(secure_url);
    setLoading(false);
  };

  return (
    <div className="flex gap-1">
      {audio && <audio controls src={audio}></audio>}
      <label className="btn btn-primary btn-sm">
        <span>{loading ? "Loading..." : "Upload Audio"}</span>
        <input
          type="file"
          // disabled={loading}
          className="file-input file-input-sm hidden w-full max-w-xs"
          onChange={(e) => void onChangeFile(e)}
        />
      </label>
    </div>
  );
};
