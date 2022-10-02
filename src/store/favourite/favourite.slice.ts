import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { BookDetailed } from '../../types/book.types';
export const initialState = (name: string) => {
  return localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name) as string)
    : [];
};

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    favouriteList: initialState('favourite') as BookDetailed[],
    error: null as SerializedError | null
  },
  reducers: {
    addToFavourite: (state, { payload }: { payload: BookDetailed }) => {
      state.favouriteList.push(payload);
      state.favouriteList.filter((e) =>
        e.isbn13 === payload.isbn13 ? (e.inFavourite = true) : null
      );
    },

    removeFromFavourite: (state, action) => {
      state.favouriteList = state.favouriteList.filter(
        ({ isbn13 }) => isbn13 !== action.payload.isbn13
      );
    }
  }
});

export const { reducer: favouriteReducer, actions: favouriteActions } =
  favouriteSlice;
