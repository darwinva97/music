import { Artist, Band, Song, SongsOnArtist } from "@prisma/client";

export type TBandFull = Band & {
  songs: Song[];
};

export type TArtistFull = Artist & {
  songs: (SongsOnArtist & {
    song: Song;
  })[];
};

export type TSongFull = Song & {
  artists: (SongsOnArtist & { artist: TArtistFull })[];
};

export * from "./form";

export type TSong = Omit<TSongFull, "artists"> & {
  band: Band | null;
  artists: (SongsOnArtist & {
    artist: Artist;
  })[];
};
