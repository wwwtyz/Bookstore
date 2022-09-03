import axios from "axios";
import { Book } from "../pages/Bookpage/BookPage";

export interface PostsResponse {
  total: string;
  error: string;
  page: string;
  books: Book[];
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  language: string;
  isbn13: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
}

export interface FetchBooksPayload {
  limit?: number;
  offset?: number;
}
export async function fetchBooks(
  apiPath: string,
  {
    signal,
  }: {
    signal?: AbortController["signal"];
  } & FetchBooksPayload = {}
): Promise<PostsResponse> {
  const { data } = await axios.get(apiPath, { params: signal });

  return data;
}
