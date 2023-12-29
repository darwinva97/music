"use client";
import { TWpAlbum } from "@/api/album";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const rounder = "rounded-tr-xl rounded-bl-xl";
type TAlbumCardProps = {
  artist_name: string;
  photo: string;
};
const AlbumCard = ({
  artist,
  album,
  photo,
}: {
  artist: string;
  album: string;
  photo?: string;
}) => {
  return (
    <div className={cn("border inline-flex flex-col w-[200px]", rounder)}>
      <Image
        src={
          photo ||
          "https://appsbuildin2.click/musica/go/images/dashboard/feature-album/04.png"
        }
        alt={artist}
        width={250}
        height={250}
        className={cn(rounder, "w-full contains")}
      />
      <div className="flex flex-col items-center p-4">
        <strong>{album}</strong>
        <span>{artist}</span>
      </div>
    </div>
  );
};

const ButtonGroup = ({ carousel }: { carousel: Carousel }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className="rounded-full p-2 bg-[#FF4545]"
        onClick={() => carousel.previous(1)}
      >
        <ArrowLeft className="text-white" size="1.2rem" />
      </button>
      <button
        className="rounded-full p-2 bg-[#FF4545]"
        onClick={() => carousel.next(1)}
      >
        <ArrowRight className="text-white" size="1.2rem" />
      </button>
    </div>
  );
};

export const Albums = ({ albums }: { albums: TWpAlbum[] }) => {
  const [carousel, setCarousel] = useState<null | Carousel>(null);
  return (
    <section className="m-4 rounded-xl shadow-xl overflow-hidden">
      <header className="p-4 text-2xl flex justify-between">
        <h3>Albums Destacados</h3>
        {carousel && <ButtonGroup carousel={carousel} />}
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
          {albums.map((album) => {
            return (
              <AlbumCard
                key={album.id}
                artist={
                  typeof album.band?.rendered === "string"
                    ? album.band?.rendered
                    : Array.isArray(album.artists?.value)
                    ? album.artists?.value.map((a) => a.artist_name).join(", ")
                    : ""
                }
                album={album.album_name.rendered}
                photo={album.photo?.rendered}
              />
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};
