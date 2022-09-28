import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBook } from '../api/fetchBook';
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