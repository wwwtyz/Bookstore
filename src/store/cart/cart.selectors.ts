import { RootState } from '../rootStore';

export const cartSelector = (state: RootState): RootState['cart']['cartList'] =>
  state.cart.cartList;

export const totalCostSelector = (
  state: RootState
): RootState['cart']['totalCost'] => state.cart.totalCost;
