import axios from 'axios';
import { FetchBookResponse } from '../types/book.types';

export async function fetchSearchBooks({
  ...props
}): Promise<FetchBookResponse> {
  const { data } = await axios.get<FetchBookResponse>(
    ` https://api.itbook.store/1.0/search/${props.search}/${props.page}`
  );

  return data;
}
