import axios from 'axios';
import { BookResponse } from '../types/book.types';

export async function fetchBook(apiPath: string): Promise<BookResponse> {
  const { data } = await axios.get(apiPath);
  data.inCart = false;
  data.inFavourite = false;
  data.numInCart = 0;
  return data;
}
