import { db } from "@/db";
import React from "react";
import { TrendingSongs } from "../trending";

const Pages = async () => {
  const songs = await db.song.findMany({
    orderBy: {
      createdAt: "asc", // 'asc' para orden ascendente, 'desc' para orden descendente
    },
    take: 100,
    include: {
      artists: {
        include: {
          artist: true,
        },
      },
      band: true,
      playlists: {
        include: {
          playlist: true,
        },
      },
    },
  });
  return (
    <div>
      <h1 className="text-2xl text-center mt-4 mb-10">Últimas canciones</h1>
      <TrendingSongs songs={songs} hideHeader />
    </div>
  );
};

export default Pages;
