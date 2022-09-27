import axios from "axios";

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

export async function fetchBook(apiPath: string): Promise<BookResponse> {
  const { data } = await axios.get(apiPath);

  return data;
}
