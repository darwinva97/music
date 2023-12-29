import { TWpAlbum } from "./album";
import { TWpArtist } from "./artist";
import { TWpSong } from "./song";

export const WP_URL = "https://darwinv25.sg-host.com/wp-json/wp/v2";

// Songs
export const getSongs = (): Promise<TWpSong[]> =>
  fetch(`${WP_URL}/song?_embed`).then((res) => res.json());

export const getSongsBySearch = (search: string): Promise<TWpSong[]> =>
  fetch(`${WP_URL}/song?search=${search}&_embed`).then((res) => res.json());

export const getSongsBySlug = (slug: string): Promise<TWpSong[]> =>
  fetch(`${WP_URL}/song?slug=${slug}&_embed`).then((res) => res.json());

export const getSongsByIds = (ids: number[]): Promise<TWpSong[]> =>
  fetch(`${WP_URL}/song?include=${ids.join(",")}&_embed`).then((res) =>
    res.json()
  );

// Artists
export const getArtists = (): Promise<TWpArtist[]> =>
  fetch(`${WP_URL}/artist?_embed`).then((res) => res.json());

export const getArtistsBySearch = (search: string): Promise<TWpArtist[]> =>
  fetch(`${WP_URL}/artist?search=${search}&_embed`).then((res) => res.json());

export const getArtistsBySlug = (slug: string): Promise<TWpArtist[]> =>
  fetch(`${WP_URL}/artist?slug=${slug}&_embed`).then((res) => res.json());

// Album
export const getAlbums = (): Promise<TWpAlbum[]> =>
  fetch(`${WP_URL}/album?_embed`).then((res) => res.json());

export const getAlbumsBySearch = (search: string): Promise<TWpAlbum[]> =>
  fetch(`${WP_URL}/album?search=${search}&_embed`).then((res) => res.json());

export const getAlbumsBySlug = (slug: string): Promise<TWpAlbum[]> =>
  fetch(`${WP_URL}/album?slug=${slug}&_embed`).then((res) => res.json());
