export interface Home {
  img: string;
  name: string;
  subname: string;
  titles: string[];
}

export interface About {
  homeData: Home;
  paragraph: string;
  age: number;
  phone: string;
  twitter?: string;
  linkedin: string;
  interests: string[];
}

export interface Contact {
  email: string;
  phone?: string;
  location?: string;
}
