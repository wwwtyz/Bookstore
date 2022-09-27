import axios from "axios";
import { Book } from "../types/book.types";

const apiPath = "https://api.itbook.store/1.0/search/";

export interface FetchSearchBooksPayload {
  search?: string;
}

export interface FetchSearchBooksResponse {
  total: number;
  page: string | null;
  results: Book[];
}

export async function fetchSearchBooks({
  ...params
}: {} = {}): Promise<FetchSearchBooksResponse> {
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

  const { data } = await axios.get<FetchSearchBooksResponse>(apiPath, {
    params: queryParams,
  });

  return data;
}
