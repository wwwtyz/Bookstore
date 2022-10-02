import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { faCross as Delete } from '@fortawesome/free-solid-svg-icons/faCross';

import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums/router';
import { removeFromCartAction } from '../../store/cart/cart.actions';
import {
  cartSelector,
  totalCostSelector
} from '../../store/cart/cart.selectors';

import { cartActions } from '../../store/cart/cart.slice';
import { useAppDispatch } from '../../store/rootStore';
import { BookDetailed } from '../../types/book.types';
import {
  CartContainer,
  CartImageBox,
  CartAboutBox,
  CartButton,
  VertContainer,
  CounterBox,
  CartAboutContainer
} from './cartCartd.styled';

export default function CartCard({ book }: { book: BookDetailed }) {
  const cartData: BookDetailed[] = useSelector(cartSelector);

  const [count, setCount] = useState(1);
  const price = Number(book.price.slice(1));

  const dispatch = useAppDispatch();

  return (
    <CartContainer>
      <div>
        <Link to={`/${AppRoute.Books}/${book.isbn13}`}>
          <CartImageBox>
            <img
              src={book.image}
              alt={book.isbn10}
            />
          </CartImageBox>
        </Link>
      </div>
      <CartAboutContainer>
        <CartAboutBox>
          <h3>{book.title}</h3>
          <p>
            {book.authors}
            {book.publisher} {book.year}
          </p>
          <CounterBox>
            <CartButton
              disabled={count <= 1}
              onClick={() => {
                setCount(count - 1);
                dispatch(cartActions.decremetnQt(price));
              }}
            >
              -
            </CartButton>
            <span>{count}</span>
            <CartButton
              onClick={() => {
                setCount(count + 1);
                dispatch(cartActions.incremetnQt(price));
              }}
            >
              +
            </CartButton>
          </CounterBox>
        </CartAboutBox>
        <VertContainer>
          {book.price.slice(0, 1)}
          {(price * count).toFixed(2)}
        </VertContainer>
        <VertContainer>
          <CartButton
            onClick={() => {
              dispatch(removeFromCartAction(book));
              dispatch(
                cartActions.decremetnQt(Number((price * count).toFixed(2)))
              );
            }}
          >
            x
          </CartButton>
        </VertContainer>
      </CartAboutContainer>
    </CartContainer>
  );
}
