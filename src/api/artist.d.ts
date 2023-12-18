export interface TWpArtist {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: GUID;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  template: string;
  genre: any[];
  songs: Songs;
  artist_name: ArtistName;
  albums: Albums;
  photo: Cover;
  bands: Albums;
  cover: Cover;
  featured: ArtistName;
  _links: Links;
}

interface Links {
  self: About[];
  collection: About[];
  about: About[];
  "wp:attachment": About[];
  "wp:term": WpTerm[];
  curies: Cury[];
}

interface About {
  href: string;
}

interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

interface Albums {
  value: boolean;
  rendered: boolean;
}

interface ArtistName {
  value: string;
  rendered: string;
}

interface Content {
  rendered: string;
  protected: boolean;
}

interface Cover {
  value: CoverValue;
  rendered: string;
}

interface CoverValue {
  ID: string;
  post_author: string;
  post_date: Date;
  post_date_gmt: Date;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
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

interface GUID {
  rendered: string;
}

interface Songs {
  value: ValueElement[] | boolean;
  rendered: boolean | string;
}

interface ValueElement {
  band: boolean;
  song_name: string;
  artists: number[];
  photo: string;
  cover: boolean;
  featured: string;
  audio: string;
  video: boolean;
  audio_hot: string;
  video_hot: string;
  trending: string;
  plays: any[];
  stars: any[];
  ID: number;
  post_title: string;
  post_content: string;
  post_excerpt: string;
  post_author: string;
  post_date: Date;
  post_date_gmt: Date;
  post_status: string;
  comment_status: string;
  ping_status: string;
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
  song_tag: boolean;
  id: number;
}
