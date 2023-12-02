import { ContainerImage } from "@/components/ContainerImage";
import { Song } from "@prisma/client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TCardProps = {
  photo: string;
  name: string;
  artist: string;
};
const Card = ({ photo, name, artist }: TCardProps) => {
  return (
    <div className="inline-flex flex-col flex-start h-full">
      <ContainerImage image={photo} width={300} height={260} />
      <div className="inline-flex flex-col gap-2 p-4 text-center max-w-[300px]">
        <strong>{name}</strong>
        <span>{artist}</span>
      </div>
    </div>
  );
};

export const TrendingSongs = ({
  songs,
}: {
  songs: (Song & {
    band: { name: string } | null;
    artists: { artist: { name: string } }[];
  })[];
}) => {
  return (
    <section className="m-4 rounded-xl shadow-xl overflow-hidden">
      <header className="p-4 text-2xl flex justify-between">
        <h3>Trending Songs</h3>
        <Link href="/trending" className="flex items-center">
          <strong className="text-[#FF4545] text-[1rem]">View More</strong>
          <ChevronRight color="#FF4545" />
        </Link>
      </header>
      <hr />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-rows-max gap-4">
        {songs
          .filter((song) => song.trending)
          .map((song) => (
            <Card
              key={song.id}
              photo={
                song.photo ||
                "https://appsbuildin2.click/musica/go/images/dashboard/tranding-song/01.png"
              }
              name={song.name}
              artist={
                song.band?.name ||
                song.artists.map((artist) => artist.artist.name).join(", ")
              }
            />
          ))}
      </div>
    </section>
  );
};
