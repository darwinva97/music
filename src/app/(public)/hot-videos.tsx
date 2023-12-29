"use client";
import { BtnArrows } from "@/components/BtnArrows";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import { responsive } from "./responsive";
import { cn } from "@/lib/utils";
import { TWpSong } from "@/api/song";

type TCardProps = {
  src: string;
  title: string;
  plays: number;
};
const Card = ({ src, title, plays }: TCardProps) => {
  return (
    <div
      className={cn(
        "border rounded-bl-xl rounded-br-xl",
        "inline-flex flex-col w-[240px] my-1"
      )}
    >
      <video
        src={src}
        controls
        height={240}
        width={240}
        className="w-[240px] h-[180px]"
      ></video>
      <div className="flex flex-col items-center p-4">
        <strong>{title}</strong>
        <span>{plays} Views</span>
      </div>
    </div>
  );
};

export const HotVideos = ({ songs }: { songs: TWpSong[] }) => {
  const [carousel, setCarousel] = useState<null | Carousel>(null);
  const songsToShow = songs.filter((song) => song.video_hot.rendered);
  return (
    <section className="m-4 rounded-xl shadow-xl overflow-hidden">
      <header className="p-4 text-2xl flex justify-between">
        <h3>Hot Video Songs</h3>
        {carousel && <BtnArrows carousel={carousel} />}
      </header>
      <hr />
      <div className="p-4">
        <Carousel
          autoPlay={true}
          infinite={true}
          ref={(el) => setCarousel(el)}
          arrows={false}
          responsive={responsive}
        >
          {songsToShow
            .filter((song) => song.video.rendered)
            .map((song) => (
              <Card
                key={song.id}
                src={song.video.rendered}
                title={song.song_name.rendered}
                plays={Number(song.plays.rendered)}
              />
            ))}
        </Carousel>
      </div>
    </section>
  );
};
