import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { Book } from '../types/book.types';
import { requestBooks, requestNewBooks } from './bookSearch.actions';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [] as Book[],
    search: '',
    page: '1',
    total: '0',
    error: null as SerializedError | null,
    loadingState: 'idle' as 'idle' | 'pending' | 'fulfilled' | 'rejected'
  },
  reducers: {
    updatePage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
    updateSearch: (state, action: PayloadAction<string>) => {
      if (state.search !== action.payload) {
        state.page = '1';
      }
      state.search = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestBooks.fulfilled, (state, action) => {
        state.books = action.payload.books;
        state.total = action.payload.total;
        state.loadingState = action.meta.requestStatus;
      })
      .addCase(requestBooks.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
      })
      .addCase(requestBooks.rejected, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.error = action.error;
      })
      .addCase(requestNewBooks.fulfilled, (state, action) => {
        state.books = action.payload.books;
        state.loadingState = action.meta.requestStatus;
      })
      .addCase(requestNewBooks.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
      })
      .addCase(requestNewBooks.rejected, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.error = action.error;
      });
  }
});

export const { reducer: bookReducer, actions: bookActions } = bookSlice;
