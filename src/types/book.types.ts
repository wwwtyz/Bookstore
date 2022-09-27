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
}
