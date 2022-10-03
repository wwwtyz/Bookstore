import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks } from '../api/fetchBooks';
import { fetchSearchBooks } from '../api/fetchSerachBooks';

export const requestBooks = createAsyncThunk<
  Awaited<ReturnType<typeof fetchSearchBooks>>,
  {
    search: string;
    total: string;
    page: string;
  }
>('book/requestBooks', (payload) =>
  fetchSearchBooks({
    search: payload.search,
    total: payload.total,
    page: payload.page
  })
);
export const requestNewBooks = createAsyncThunk<
  Awaited<ReturnType<typeof fetchBooks>>
>('book/requestNewBooks', () => fetchBooks());
