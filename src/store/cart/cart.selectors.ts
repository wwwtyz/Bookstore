import { RootState } from '../rootStore';

export const cartSelector = (state: RootState): RootState['cart']['cartList'] =>
  state.cart.cartList;


