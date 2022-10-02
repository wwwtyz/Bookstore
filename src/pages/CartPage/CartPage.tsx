import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useStateList } from 'react-use';

import CartCard from '../../components/CartCard/CartCard';
import {
  SumBox,
  TotalBox,
  TotalContainer,
  TotalSpan
} from '../../components/CartCard/cartCartd.styled';

import {
  cartSelector,
  totalCostSelector
} from '../../store/cart/cart.selectors';
import { BookDetailed } from '../../types/book.types';

export default function CartPage() {
  const cartData: BookDetailed[] = useSelector(cartSelector);
  const totalCost: number = useSelector(totalCostSelector);
  console.log(totalCost.toFixed(2));

  return (
    <div>
      <h1>Your Cart</h1>
      <div>
        {cartData.map((book: BookDetailed) => (
          <CartCard
            book={book}
            key={book.isbn13}
          />
        ))}
      </div>
      <TotalContainer>
        <TotalBox>
          <SumBox>
            <span>Sum Total: </span>
            <span>{totalCost.toFixed(2)}$</span>
          </SumBox>
          <SumBox>
            <span>VAT: </span>
            <span>{(totalCost * 0.2).toFixed(2)}$</span>{' '}
          </SumBox>
          <SumBox>
            <TotalSpan>TOTAL COST:</TotalSpan>{' '}
            <TotalSpan>{(totalCost * 1.2).toFixed(2)}$</TotalSpan>
          </SumBox>
          <button
            onClick={() => alert('Knock-knock. your order has been delivered')}
          >
            CHECK OUT
          </button>
        </TotalBox>
      </TotalContainer>
    </div>
  );
}
