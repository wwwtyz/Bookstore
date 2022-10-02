export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export interface BookDetailed {
  error?: string;
  title: string;
  subtitle: string;
  authors: string;
  desc: string;
  image: string;
  isbn10?: string;
  isbn13: string;
  language: string;
  pages?: string;
  price: string;
  publisher: string;
  rating: string;
  url?: string;
  year: string;
  inCart?: boolean;
  numInCart?: number;
  inFavourite?: boolean;
}

export interface FetchBookResponse {
  total: string;
  page?: string | null;
  books: Book[];
}
export interface BookResponse {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  language: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: Object;
}

export interface BooksResponse {
  total: string;
  books: Book[];
}
