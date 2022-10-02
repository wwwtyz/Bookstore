import { SerializedError } from '@reduxjs/toolkit';
import { BookDetailed } from '../../types/book.types';
import { AppDispatch, rootStore } from '../rootStore';
import { favouriteActions } from './favourite.slice';

export const addToFavouriteAction =
  (payload: BookDetailed) => (dispatch: AppDispatch) => {
    try {
      dispatch(favouriteActions.addToFavourite(payload));
      localStorage.setItem(
        'favourite',
        JSON.stringify(rootStore.getState().favourite.favouriteList)
      );
    } catch {
      (error: SerializedError) => console.error(error);
    }
  };

export const removeFromFavouriteAction =
  (payload: BookDetailed) => (dispatch: AppDispatch) => {
    try {
      dispatch(favouriteActions.removeFromFavourite(payload));
      localStorage.setItem(
        'favourite',
        JSON.stringify(rootStore.getState().favourite.favouriteList)
      );
    } catch {
      (error: SerializedError) => console.error(error);
    }
  };
