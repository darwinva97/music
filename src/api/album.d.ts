export interface TWpAlbum {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: GUID;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: StatusEnum;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  template: string;
  genre: any[];
  artists: ArtistsClass;
  album_name: AlbumName;
  band: Band;
  photo: CoverClass;
  songs: Songs;
  cover: CoverClass;
  featured: AlbumName;
  youtube: AlbumName;
  _links: Links;
}

export interface Links {
  self: About[];
  collection: About[];
  about: About[];
  "wp:attachment": About[];
  "wp:term": WpTerm[];
  curies: Cury[];
}

export interface About {
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface AlbumName {
  value: string;
  rendered: string;
}

export interface ArtistsClass {
  value: ArtistsValue[];
  rendered: string;
}

export interface ArtistsValue {
  songs: number[];
  artist_name: string;
  albums: number[];
  photo: string;
  bands: boolean;
  cover: boolean | string;
  featured: string;
  ID: number;
  post_title: string;
  post_content: string;
  post_excerpt: string;
  post_author: string;
  post_date: Date;
  post_date_gmt: Date;
  post_status: StatusEnum;
  comment_status: Status;
  ping_status: Status;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: Date;
  post_modified_gmt: Date;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: PurplePostType;
  post_mime_type: string;
  comment_count: string;
  comments: boolean;
  genre: boolean;
  id: number;
}

export enum Status {
  Closed = "closed",
}

export enum StatusEnum {
  Publish = "publish",
}

export enum PurplePostType {
  Artist = "artist",
}

export interface Band {
  value: boolean;
  rendered: boolean;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface CoverClass {
  value: CoverValue;
  rendered: string;
}

export interface CoverValue {
  ID: string;
  post_author: string;
  post_date: Date;
  post_date_gmt: Date;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: Status;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: Date;
  post_modified_gmt: Date;
  post_content_filtered: string;
  post_parent: string;
  guid: string;
  menu_order: string;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  pod_item_id: string;
}

export interface GUID {
  rendered: string;
}

export interface Songs {
  value: SongsValue[];
  rendered: string;
}

export interface SongsValue {
  band: boolean;
  song_name: string;
  artists: number[] | boolean;
  photo: boolean | string;
  album: number;
  cover: boolean | string;
  featured: any[] | string;
  audio: boolean | string;
  video: boolean;
  youtube: string;
  audio_hot: any[] | string;
  video_hot: any[] | string;
  trending: any[] | string;
  plays: any[] | string;
  stars: any[] | string;
  ID: number;
  post_title: string;
  post_content: string;
  post_excerpt: string;
  post_author: string;
  post_date: Date;
  post_date_gmt: Date;
  post_status: StatusEnum;
  comment_status: Status;
  ping_status: Status;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: Date;
  post_modified_gmt: Date;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: FluffyPostType;
  post_mime_type: string;
  comment_count: string;
  comments: boolean;
  genre: boolean;
  song_tag: boolean;
  id: number;
}

export enum FluffyPostType {
  Song = "song",
}
