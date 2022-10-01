import { SerializedError } from '@reduxjs/toolkit';
import { BookDetailed } from '../../types/book.types';
import { AppDispatch, rootStore } from '../rootStore';
import { cartActions } from './cart.slice';

export const addToCartAction =
  (payload: BookDetailed) => (dispatch: AppDispatch) => {
    try {
      dispatch(cartActions.addToCart(payload));
      localStorage.setItem(
        'cart',
        JSON.stringify(rootStore.getState().cart.cartList)
      );
    } catch {
      (error: SerializedError) => console.error(error);
    }
  };

export const removeFromCartAction =
  (payload: BookDetailed) => (dispatch: AppDispatch) => {
    try {
      dispatch(cartActions.removeFromCart(payload));
      localStorage.setItem(
        'cart',
        JSON.stringify(rootStore.getState().cart.cartList)
      );
    } catch {
      (error: SerializedError) => console.error(error);
    }
  };
