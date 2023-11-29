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
    <div className="flex flex-col w-[full] flex-1">
      <Image src={photo} width={300} height={260} alt={name} />
      <div className="flex flex-col gap-2 p-4 items-center">
        <strong>{name}</strong>
        <span>{artist}</span>
      </div>
    </div>
  );
};

export const TrendingSongs = () => {
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
      <div className="p-4 flex flex-wrap gap-4">
        <Card
          photo="https://appsbuildin2.click/musica/go/images/dashboard/tranding-song/01.png"
          name="Life Is Good"
          artist="Billie Eilish"
        />

        <Card
          photo="https://appsbuildin2.click/musica/go/images/dashboard/tranding-song/02.png"
          name="Death Bed"
          artist="Normani"
        />
      </div>
    </section>
  );
};
