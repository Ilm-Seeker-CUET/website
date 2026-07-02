export interface Segment {
  id: string;
  title: string;
  date: string;
  description: string;
  details: string[];
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
  isUpcoming: boolean;
  segments: Segment[];
}

export interface PastEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  facebook: string;
  messenger: string;
}
