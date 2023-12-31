"use client";
import { BtnArrows } from "@/components/BtnArrows";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import { responsive } from "./responsive";
import { ContainerImage } from "@/components/ContainerImage";
import { useStore } from "@/store";
import { TSong } from "@/types";

const Card = ({ cards }: { cards: TSong[] }) => {
  const { playSong } = useStore();
  return (
    <div className="flex flex-col gap-4">
      {cards.map((song, index) => {
        const { photo, artists, band } = song;
        return (
          <div
            key={index}
            className="flex gap-2"
            onClick={() => {
              song && playSong(song);
            }}
          >
            <ContainerImage
              image={photo?.rendered}
              width={60}
              height={60}
              className="rounded-tr-full rounded-br-full rounded-bl-full"
            />
            <div className="flex flex-col">
              <span>{song.song_name.rendered}</span>
              <span>
                {band?.rendered ||
                  artists.value.map((artist) => artist.artist_name).join(",")}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

type THotSongsProps = {
  songs: TSong[];
};

export const HotSongs = ({ songs }: THotSongsProps) => {
  const [carousel, setCarousel] = useState<null | Carousel>(null);
  const songsToShow = songs.filter((song) => song.audio_hot.rendered);

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
            <Card cards={group} key={index} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};
