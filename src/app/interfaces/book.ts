import { Page } from "./page";

export interface Book {
  id: number;
  title: string;
  resume: string;
  image: string;
  pages: Page[];
  author: string;
  categories: string[];
  createdAt: string;
  updatedAt: string;
}
