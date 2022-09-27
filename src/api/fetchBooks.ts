import axios from "axios";
import { Book } from "../types/book.types";

const apiPath = "https://api.itbook.store/1.0/new";

export interface BooksResponse {
  total: string;
  books: Book[];
}

export async function fetchBooks(): Promise<BooksResponse> {
  const { data } = await axios.get(apiPath);

  return data;
}
