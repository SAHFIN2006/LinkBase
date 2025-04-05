export interface TechLink {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  stars: number;
  starred?: boolean;
  image?: string;
}

export type Category = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

export interface CategoryStats {
  [key: string]: number;
}

export interface AddLinkFormData {
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string;
  image?: string;
}

export interface MediaContent {
  id: string;
  title: string;
  type: 'youtube' | 'podcast' | 'blog';
  url: string;
  description: string;
  category: string;
  thumbnail: string;
}

export interface AddMediaFormData {
  title: string;
  type: 'youtube' | 'podcast' | 'blog';
  url: string;
  description: string;
  category: string;
  thumbnail?: string;
}