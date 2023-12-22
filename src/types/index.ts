import { TWpSong } from "@/api/song";

export * from "./form";

// export type TSong = Omit<TSongFull, "artists"> & {
//   band: Band | null;
//   artists: (SongsOnArtist & {
//     artist: Artist;
//   })[];
// };

export type TSong = Omit<
  TWpSong,
  "date" | "date_gmt" | "modified" | "modified_gmt"
> & {
  date?: TWpSong["date"];
  date_gmt?: TWpSong["date_gmt"];
  modified?: TWpSong["modified"];
  modified_gmt?: TWpSong["modified_gmt"];
};
