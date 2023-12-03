"use client";
import { upload } from "@/utils/upload";
import { type ChangeEvent, useState } from "react";
import { Button } from "../ui/button";

const PickVideoComponent = ({
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
    setLoading(true);
    const video = e.target.files![0]!;
    const secure_url = await upload(video, "video");
    setVideo(secure_url);
    setLoading(false);
  };

  return (
    <div className="flex items-center gap-1">
      {video ? <video controls src={video}></video> : "No seleccionado"}

      <Button
        type="button"
        disabled={loading}
        onClick={(e) => e.stopPropagation()}
      >
        <label className="btn btn-primary btn-sm cursor-pointer">
          <span>{loading ? "Loading..." : "Upload Video"}</span>
          <input
            type="file"
            disabled={loading}
            className="file-input file-input-sm hidden w-full max-w-xs cursor-pointer"
            onChange={(e) => void onChangeFile(e)}
          />
        </label>
      </Button>

      {name && <input className="hidden" value={video} readOnly name={name} />}
    </div>
  );
};

type TName = {
  name?: string;
};
type TPickVideoProps = (
  | {
      video: string;
      setVideo: (video: string) => void;
    }
  | { video?: string }
) &
  TName;

export const PickVideo = ({ name, ...props }: TPickVideoProps) => {
  const [videoLocal, setVideoLocal] = useState(props.video || "");
  if ("setVideo" in props) {
    return (
      <PickVideoComponent
        setVideo={props.setVideo}
        video={props.video}
        name={name}
      />
    );
  }
  return (
    <PickVideoComponent
      video={videoLocal}
      setVideo={setVideoLocal}
      name={name}
    />
  );
};
