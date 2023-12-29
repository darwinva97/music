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
  artists: Artists;
  album_name: AlbumName;
  band: BandClass;
  photo: CoverClass;
  songs: SongsClass;
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

export interface Artists {
  value: ArtistValue[] | boolean;
  rendered: boolean | string;
}

export interface ArtistValue {
  songs: number[] | boolean;
  artist_name: string;
  albums: number[];
  photo: boolean | string;
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
  post_type: ArtistPostType;
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

export enum ArtistPostType {
  Artist = "artist",
}

export interface BandClass {
  value: BandValue[] | boolean;
  rendered: boolean | string;
}

export interface BandValue {
  albums: boolean;
  band_name: string;
  artists: boolean;
  photo: boolean;
  songs: number[];
  cover: boolean;
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
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  comments: boolean;
  genre: boolean;
  id: number;
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
  post_status: PostStatus;
  comment_status: CommentStatus;
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
  post_type: FluffyPostType;
  post_mime_type: PostMIMEType;
  comment_count: string;
  pod_item_id: string;
}

export enum CommentStatus {
  Open = "open",
}

export enum PostMIMEType {
  ImageJPEG = "image/jpeg",
  ImagePNG = "image/png",
  ImageWebp = "image/webp",
}

export enum PostStatus {
  Inherit = "inherit",
}

export enum FluffyPostType {
  Attachment = "attachment",
}

export interface GUID {
  rendered: string;
}

export interface SongsClass {
  value: SongValueAlbum[] | boolean;
  rendered: boolean | string;
}

export interface SongValueAlbum {
  band: boolean | number;
  song_name: string;
  artists: number[];
  photo: string;
  album: number;
  cover: boolean | string;
  featured: string;
  audio: boolean | string;
  video: boolean | string;
  youtube: string;
  audio_hot: string;
  video_hot: string;
  trending: string;
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
  post_type: TentacledPostType;
  post_mime_type: string;
  comment_count: string;
  comments: boolean;
  genre: boolean;
  song_tag: boolean;
  id: number;
}

export enum TentacledPostType {
  Song = "song",
}
