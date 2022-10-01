import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { BookDetailed } from '../../types/book.types';
export const initialState = (name: string) => {
  return localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name) as string)
    : [];
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartList: initialState('cart') as BookDetailed[],
    error: null as SerializedError | null
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartList.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartList = state.cartList.filter(
        (e) => e.isbn13 !== action.payload.isbn13
      );
    }
  }
});

export const { reducer: cartReducer, actions: cartActions } = cartSlice;
