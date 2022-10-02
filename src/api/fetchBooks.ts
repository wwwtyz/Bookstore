import axios from 'axios';
import { BooksResponse } from '../types/book.types';

const apiPath = `${process.env.REACT_APP_API_PATH}/new`;

export async function fetchBooks(): Promise<BooksResponse> {
  const { data } = await axios.get(apiPath);

  return data;
}
