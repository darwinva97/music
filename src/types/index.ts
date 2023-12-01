import { Artist, Song, SongsOnArtist } from "@prisma/client";

export type TArtistFull = Artist & {
  songs: (SongsOnArtist & {
    song: Song;
  })[];
};

export type TSongFull = Song & {
  artists: SongsOnArtist[];
};

export * from "./form";
