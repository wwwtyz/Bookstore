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
export const addNumAction =
  (payload: BookDetailed) => (dispatch: AppDispatch) => {
    try {
      dispatch(cartActions.setAddNum(payload));
      localStorage.setItem(
        'cart',
        JSON.stringify(rootStore.getState().cart.cartList)
      );
    } catch {
      (error: SerializedError) => console.error(error);
    }
  };
export const minusNumAction =
  (payload: BookDetailed) => (dispatch: AppDispatch) => {
    try {
      dispatch(cartActions.setMinusNum(payload));
      localStorage.setItem(
        'cart',
        JSON.stringify(rootStore.getState().cart.cartList)
      );
    } catch {
      (error: SerializedError) => console.error(error);
    }
  };
export const incTotalCostAction =
  (payload: number) => (dispatch: AppDispatch) => {
    try {
      dispatch(cartActions.incremetnQt(payload));
      localStorage.setItem(
        'totalCost',
        JSON.stringify(rootStore.getState().cart.totalCost)
      );
    } catch {
      (error: SerializedError) => console.error(error);
    }
  };
export const decTotalCostAction =
  (payload: number) => (dispatch: AppDispatch) => {
    try {
      dispatch(cartActions.decremetnQt(payload));
      localStorage.setItem(
        'totalCost',
        JSON.stringify(rootStore.getState().cart.totalCost)
      );
    } catch {
      (error: SerializedError) => console.error(error);
    }
  };
