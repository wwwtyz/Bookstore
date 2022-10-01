import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useStateList } from 'react-use';

import CartCard from '../../components/CartCard/CartCard';

import { cartSelector } from '../../store/cart/cart.selectors';
import { BookDetailed } from '../../types/book.types';

export default function CartPage() {
  const cartData: BookDetailed[] = useSelector(cartSelector);

  console.log(cartData);

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
    </div>
  );
}
