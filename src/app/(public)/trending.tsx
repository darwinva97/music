import { TSong } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { CardTrending } from "./card-trending";

export const TrendingSongs = ({ songs }: { songs: TSong[] }) => {
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
            <CardTrending key={song.id} {...song} />
          ))}
      </div>
    </section>
  );
};
