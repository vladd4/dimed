export type NumberCard = {
  heading: string;
  description: string;
  number: string;
};

export type BlogItem = {
  heading_1: string;
  heading_2?: string;
  heading_3?: string;
  heading_4?: string;
  heading_5?: string;
  paragraph_1: string;
  paragraph_2?: string;
  paragraph_3?: string;
  paragraph_4?: string;
  paragraph_5?: string;
  image_1: string;
  image_2?: string;
  author: string;
  date: string;
};

export type Disease = {
  image_1: string;
  paragraph_1: string;
  paragraph_2: string;
  image_2?: string;
};

export type DoctorCard = {
  name: string;
  position: string;
  image: string;
};

export type ServiceItem = {
  name: string;
  description: string;
  whatDo: string[];
  price: { name: string; price: string }[];
};

export type DetailsServiceItem = {
  image: string;
  images: string[];
  paragraph: string;
  video_id: string;
  pokazania: { name: string; description: string }[];
  anti_pokazania: { name: string; description: string }[];
  benefits: { name: string; description: string }[];
  effects: { name: string; description: string }[];
};
