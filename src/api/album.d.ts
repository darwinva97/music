export interface TWpAlbum {
  id:           number;
  date:         Date;
  date_gmt:     Date;
  guid:         GUID;
  modified:     Date;
  modified_gmt: Date;
  slug:         string;
  status:       string;
  type:         string;
  link:         string;
  title:        GUID;
  content:      Content;
  template:     string;
  genre:        any[];
  artists:      Artists;
  album_name:   AlbumName;
  band:         Band;
  photo:        Cover;
  cover:        Cover;
  featured:     AlbumName;
  _links:       Links;
}

interface Links {
  self:            About[];
  collection:      About[];
  about:           About[];
  "wp:attachment": About[];
  "wp:term":       WpTerm[];
  curies:          Cury[];
}

interface About {
  href: string;
}

interface Cury {
  name:      string;
  href:      string;
  templated: boolean;
}

interface WpTerm {
  taxonomy:   string;
  embeddable: boolean;
  href:       string;
}

interface AlbumName {
  value:    string;
  rendered: string;
}

interface Artists {
  value:    ValueElement[];
  rendered: string;
}

interface ValueElement {
  songs:                 number[];
  artist_name:           string;
  albums:                number[];
  photo:                 string;
  bands:                 boolean;
  cover:                 string;
  featured:              string;
  ID:                    number;
  post_title:            string;
  post_content:          string;
  post_excerpt:          string;
  post_author:           string;
  post_date:             Date;
  post_date_gmt:         Date;
  post_status:           string;
  comment_status:        string;
  ping_status:           string;
  post_password:         string;
  post_name:             string;
  to_ping:               string;
  pinged:                string;
  post_modified:         Date;
  post_modified_gmt:     Date;
  post_content_filtered: string;
  post_parent:           number;
  guid:                  string;
  menu_order:            number;
  post_type:             string;
  post_mime_type:        string;
  comment_count:         string;
  comments:              boolean;
  genre:                 boolean;
  id:                    number;
}

interface Band {
  value:    boolean;
  rendered: boolean;
}

interface Content {
  rendered:  string;
  protected: boolean;
}

interface Cover {
  value:    CoverValue;
  rendered: string;
}

interface CoverValue {
  ID:                    string;
  post_author:           string;
  post_date:             Date;
  post_date_gmt:         Date;
  post_content:          string;
  post_title:            string;
  post_excerpt:          string;
  post_status:           string;
  comment_status:        string;
  ping_status:           string;
  post_password:         string;
  post_name:             string;
  to_ping:               string;
  pinged:                string;
  post_modified:         Date;
  post_modified_gmt:     Date;
  post_content_filtered: string;
  post_parent:           string;
  guid:                  string;
  menu_order:            string;
  post_type:             string;
  post_mime_type:        string;
  comment_count:         string;
  pod_item_id:           string;
}

interface GUID {
  rendered: string;
}
