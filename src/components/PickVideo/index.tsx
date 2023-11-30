"use client";
import { upload } from "@/utils/upload";
import { type ChangeEvent, useState } from "react";

export const PickVideo = ({
  video,
  setVideo,
  name,
}: {
  video: string;
  setVideo: (video: string) => void;
  name?: string;
}) => {
  const [loading, setLoading] = useState(false);

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("Changing file");
    setLoading(true);
    const video = e.target.files![0]!;
    const secure_url = await upload(video, "video");
    setVideo(secure_url);
    console.log(secure_url);
    setLoading(false);
  };

  return (
    <div className="flex gap-1">
      {video && <video controls src={video}></video>}
      <label className="btn btn-primary btn-sm">
        <span>{loading ? "Loading..." : "Upload Video"}</span>
        <input
          type="file"
          // disabled={loading}
          className="file-input file-input-sm hidden w-full max-w-xs"
          onChange={(e) => void onChangeFile(e)}
        />
      </label>
      {name && <input className="hidden" value={video} readOnly name={name} />}
    </div>
  );
};
