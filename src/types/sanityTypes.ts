export interface BlogPost {
  _createdAt: Date;
  _id:        string;
  _rev:       string;
  _type:      string;
  _updatedAt: Date;
  author:     Author;
  content:    Content[];
  mainImage:  MainImage;
  slug:       Slug;
  title:      string;
}

export interface Author {
  _ref:  string;
  _type: string;
}

export interface Content {
  _key:      string;
  _type:     string;
  children?: Child[];
  markDefs?: any[];
  style?:    string;
  asset?:    Author;
  crop?:     Crop;
  hotspot?:  Hotspot;
}

export interface Child {
  _key:  string;
  _type: string;
  marks: string[];
  text:  string;
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

export interface MainImage {
  _type: string;
  asset: Author;
}

export interface Slug {
  _type:   string;
  current: string;
}
