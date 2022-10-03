import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBook } from '../../api/fetchBook';

export const requestDetailedBook = createAsyncThunk(
  'bookDetailed/requestDetailedBook',
  (payload: string) => fetchBook(payload)
);
