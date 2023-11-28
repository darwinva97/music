"use client";

import { BtnArrows } from "@/components/BtnArrows";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import { responsive } from "./responsive";
import { cn } from "@/lib/utils";
import Image from "next/image";

type TCardProps = {
  cards: {
    src: string;
    name: string;
    artist: string;
  }[];
};
const Card = ({ cards }: TCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      {cards.map(({ src, name, artist }, index) => (
        <div key={index} className="flex gap-2">
          <Image
            src={src}
            alt={name}
            width={60}
            height={60}
            className="rounded-tr-full rounded-br-full rounded-bl-full"
          />
          <div className="flex flex-col">
            <span>{name}</span>
            <span>{artist}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export const HotSongs = () => {
  const [carousel, setCarousel] = useState<null | Carousel>(null);

  return (
    <section className="m-4 rounded-xl shadow-xl overflow-hidden">
      <header className="p-4 text-2xl flex justify-between">
        <h3>Hot Songs</h3>
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
          <Card
            cards={[
              {
                src: "https://appsbuildin2.click/musica/go/images/dashboard/hot-songs/04.png",
                name: "More Than My Love",
                artist: "Kali Uchis",
              },
              {
                src: "https://appsbuildin2.click/musica/go/images/dashboard/hot-songs/04.png",
                name: "More Than My Love",
                artist: "Kali Uchis",
              },
              {
                src: "https://appsbuildin2.click/musica/go/images/dashboard/hot-songs/04.png",
                name: "More Than My Love",
                artist: "Kali Uchis",
              },
            ]}
          />
          <Card
            cards={[
              {
                src: "https://appsbuildin2.click/musica/go/images/dashboard/hot-songs/04.png",
                name: "More Than My Love",
                artist: "Kali Uchis",
              },
              {
                src: "https://appsbuildin2.click/musica/go/images/dashboard/hot-songs/04.png",
                name: "More Than My Love",
                artist: "Kali Uchis",
              },
              {
                src: "https://appsbuildin2.click/musica/go/images/dashboard/hot-songs/04.png",
                name: "More Than My Love",
                artist: "Kali Uchis",
              },
            ]}
          />
          <Card
            cards={[
              {
                src: "https://appsbuildin2.click/musica/go/images/dashboard/hot-songs/04.png",
                name: "More Than My Love",
                artist: "Kali Uchis",
              },
              {
                src: "https://appsbuildin2.click/musica/go/images/dashboard/hot-songs/04.png",
                name: "More Than My Love",
                artist: "Kali Uchis",
              },
              {
                src: "https://appsbuildin2.click/musica/go/images/dashboard/hot-songs/04.png",
                name: "More Than My Love",
                artist: "Kali Uchis",
              },
            ]}
          />
          <Card
            cards={[
              {
                src: "https://appsbuildin2.click/musica/go/images/dashboard/hot-songs/04.png",
                name: "More Than My Love",
                artist: "Kali Uchis",
              },
              {
                src: "https://appsbuildin2.click/musica/go/images/dashboard/hot-songs/04.png",
                name: "More Than My Love",
                artist: "Kali Uchis",
              },
              {
                src: "https://appsbuildin2.click/musica/go/images/dashboard/hot-songs/04.png",
                name: "More Than My Love",
                artist: "Kali Uchis",
              },
            ]}
          />
          <Card
            cards={[
              {
                src: "https://appsbuildin2.click/musica/go/images/dashboard/hot-songs/04.png",
                name: "More Than My Love",
                artist: "Kali Uchis",
              },
              {
                src: "https://appsbuildin2.click/musica/go/images/dashboard/hot-songs/04.png",
                name: "More Than My Love",
                artist: "Kali Uchis",
              },
              {
                src: "https://appsbuildin2.click/musica/go/images/dashboard/hot-songs/04.png",
                name: "More Than My Love",
                artist: "Kali Uchis",
              },
            ]}
          />
        </Carousel>
      </div>
    </section>
  );
};
