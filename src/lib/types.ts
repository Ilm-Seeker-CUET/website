export interface Segment {
  id: string;
  slug: string;
  title: string;
  date: string;
  description: string;
  details: string[];
  image?: string;
  registrationUrl?: string;
}

export interface CIISSEvent {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  date: string;
  location: string;
  description: string;
  image?: string;
  bgImage?: string;
  isUpcoming: boolean;
  isFeatured?: boolean;
  segments: Segment[];
}

export interface PastEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  facebook: string;
  messenger: string;
}
