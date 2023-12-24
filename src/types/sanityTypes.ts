export interface BlogPost {
  _id:         string;
  _type:       string;
  _createdAt:  Date;
  author:      Author;
  content:     Content[];
  mainImage:   SanityImage;
  publishedAt: Date;
  slug:        Slug;
  title:       string;
  excerpt:     string;
  _rev:        string;
  _updatedAt:  Date;
}

export interface PostPreview {
  _id:         string;
  author:      {name: string};
  excerpt:     string;
  mainImage:   SanityImage;
  publishedAt: Date;
  slug:        Slug;
  title:       string;
}

export interface Author {
  _ref:  string;
  _type: string;
}

export interface Content {
  _key:      string;
  _type:     ContentType;
  children?: Child[];
  markDefs?: MarkDef[];
  style?:    string;
  level?:    number;
  listItem?: string;
  alt?:      string;
  asset?:    Author;
  crop?:     Crop;
  hotspot?:  Hotspot;
}

export enum ContentType {
  Block = "block",
  Image = "image",
}

export interface Child {
  _key:  string;
  _type: ChildType;
  marks: string[];
  text:  string;
}

export enum ChildType {
  Span = "span",
}

export interface Crop {
  _type:  string;
  bottom: number;
  left:   number;
  right:  number;
  top:    number;
}

export interface Hotspot {
  _type:  string;
  height: number;
  width:  number;
  x:      number;
  y:      number;
}

export interface MarkDef {
  _key:  string;
  _type: string;
  blank: boolean;
  href:  string;
}

export interface SanityImage {
  _type: ContentType;
  asset: Author;
}

export interface Slug {
  _type:   string;
  current: string;
}
