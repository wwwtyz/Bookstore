import axios from 'axios';
import { FetchBookResponse } from '../types/book.types';

export async function fetchSearchBooks({
  ...props
}): Promise<FetchBookResponse> {
  const { data } = await axios.get<FetchBookResponse>(
    `${process.env.REACT_APP_API_PATH}/search/${props.search}/${props.page}`
  );

  return data;
}
