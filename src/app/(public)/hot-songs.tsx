"use client";

import { BtnArrows } from "@/components/BtnArrows";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import { responsive } from "./responsive";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Song } from "@prisma/client";
import { ContainerImage } from "@/components/ContainerImage";

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
          <ContainerImage
            image={src}
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

export const HotSongs = ({
  songs,
}: {
  songs: (Song & {
    band: { name: string } | null;
    artists: { artist: { name: string } }[];
  })[];
}) => {
  const [carousel, setCarousel] = useState<null | Carousel>(null);
  const songsToShow = songs.filter((song) => song.audioHot);

  const groupedSongs = songsToShow.reduce(
    (acc: (typeof songsToShow)[], el, i) => {
      // Si el índice es divisible por 3, agrega el elemento al grupo
      if (i % 3 === 0) {
        acc.push([el]);
      } else {
        // Agrega el elemento al último grupo
        acc[acc.length - 1].push(el);
      }

      return acc;
    },
    []
  );

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
          {groupedSongs.map((group, index) => (
            <Card
              cards={group.map((song) => ({
                src:
                  song.photo ||
                  "https://appsbuildin2.click/musica/go/images/dashboard/hot-songs/04.png",
                name: song.name,
                artist:
                  song.band?.name ||
                  song.artists.map(({ artist }) => artist.name).join(", "),
              }))}
              key={index}
            />
          ))}
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
