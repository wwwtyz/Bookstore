import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { BookDetailed } from '../../types/book.types';
import { requestDetailedBook } from './bookDetailed.action';

const bookDetailedSlice = createSlice({
  name: 'bookDetailed',
  initialState: {
    bookDetailed: {} as BookDetailed,
    error: null as SerializedError | null,
    loadingState: 'idle' as 'idle' | 'pending' | 'fulfilled' | 'rejected'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(requestDetailedBook.fulfilled, (state, action) => {
        state.bookDetailed = action.payload;
        state.loadingState = action.meta.requestStatus;
      })
      .addCase(requestDetailedBook.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
      })
      .addCase(requestDetailedBook.rejected, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.error = action.error;
      });
  }
});

export const { reducer: bookDetailedReducer, actions: bookDetailedActions } =
  bookDetailedSlice;
