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
    totalCost: 0,
    cartList: initialState('cart') as BookDetailed[],
    error: null as SerializedError | null
  },
  reducers: {
    addToCart: (state, { payload }: { payload: BookDetailed }) => {
      console.log(state.cartList);

      state.cartList.push(payload);
      state.cartList.filter((e) =>
        e.isbn13 === payload.isbn13 ? (e.inCart = true) : null
      );
    },

    removeFromCart: (state, action) => {
      state.cartList = state.cartList.filter(
        ({ isbn13 }) => isbn13 !== action.payload.isbn13
      );
    },

    incremetnQt: (state, action) => {
      state.totalCost += action.payload;
    },
    decremetnQt: (state, action) => {
      state.totalCost -= action.payload;
    }
  }
});

export const { reducer: cartReducer, actions: cartActions } = cartSlice;
