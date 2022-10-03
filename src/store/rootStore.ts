import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bookReducer } from './book.slice';
import { bookDetailedReducer } from './bookDetailed/bookDetailed.slice';
import { cartReducer } from './cart/cart.slice';
import { favouriteReducer } from './favourite/favourite.slice';
import { userReducer } from './user/user.slice';

export const rootStore = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    bookDetailed: bookDetailedReducer,
    cart: cartReducer,
    favourite: favouriteReducer
  }
});

export type RootState = ReturnType<typeof rootStore.getState>;

export type AppDispatch = typeof rootStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
