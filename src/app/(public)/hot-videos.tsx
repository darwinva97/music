"use client";

import { BtnArrows } from "@/components/BtnArrows";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import { responsive } from "./responsive";
import { cn } from "@/lib/utils";

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
      <video src={src} controls width={240}></video>
      <div className="flex flex-col items-center p-4">
        <strong>{title}</strong>
        <span>{plays} Views</span>
      </div>
    </div>
  );
};

export const HotVideos = () => {
  const [carousel, setCarousel] = useState<null | Carousel>(null);

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
          itemClass="mr-3 inline-flex"
        >
          <Card
            src="https://appsbuildin2.click/musica/go/images/dashboard/song-video/video-1.mp4"
            title="Patricia Kaas"
            plays={123}
          />
          <Card
            src="https://appsbuildin2.click/musica/go/images/dashboard/song-video/video-1.mp4"
            title="Lewis Capaldi"
            plays={123}
          />
          <Card
            src="https://appsbuildin2.click/musica/go/images/dashboard/song-video/video-1.mp4"
            title="Lewis Capaldi"
            plays={123}
          />
          <Card
            src="https://appsbuildin2.click/musica/go/images/dashboard/song-video/video-1.mp4"
            title="Patricia Kaas"
            plays={123}
          />
          <Card
            src="https://appsbuildin2.click/musica/go/images/dashboard/song-video/video-1.mp4"
            title="Lewis Capaldi"
            plays={123}
          />
        </Carousel>
      </div>
    </section>
  );
};
