// src/types/idea.ts

export interface ImageItem {
  id: number;
  mime: string;
  file_name: string;
  url: string;
}

export interface Idea {
  id: number;
  slug: string;
  title: string;
  content: string;
  published_at: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  small_image: ImageItem[];
  medium_image: ImageItem[];
}
