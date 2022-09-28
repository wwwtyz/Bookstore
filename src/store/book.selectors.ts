import { RootState } from './rootStore';

export const bookSelector = (state: RootState): RootState['book']['books'] =>
  state.book.books;

export const currentPageSelector = (
  state: RootState
): RootState['book']['page'] => state.book.page;

export const totalPostPageSelector = (state: RootState): string =>
  String(Math.ceil(Number(state.book.total) / 10));

export const searchStringSelector = (
  state: RootState
): RootState['book']['search'] => state.book.search;

export const booksLoadingStateSelector = (
  state: RootState
): RootState['book']['loadingState'] => state.book.loadingState;
