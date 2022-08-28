import axios from "axios";
import { Book } from "../pages/Bookpage/BookPage";

const apiPath = "https://api.itbook.store/1.0/new";

export interface PostsResponse {
  total: string;
  error: string;
  page: string;
  books: Book[];
}

export interface FetchBooksPayload {
  limit?: number;
  offset?: number;
}
export async function fetchBooks({
  signal,
  ...params
}: {
  signal?: AbortController["signal"];
} & FetchBooksPayload = {}): Promise<PostsResponse> {
  const queryParams = (Object.keys(params) as (keyof typeof params)[]).reduce(
    (acc, key) => {
      const value = params[key];
      if (typeof value !== "undefined") {
        acc.append(key, `${value}`);
      }
      return acc;
    },
    new URLSearchParams()
  );
  const { data } = await axios.get(apiPath, { params: queryParams, signal });

  return data;
}
