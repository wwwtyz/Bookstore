import React from 'react';

import { useSelector } from 'react-redux';

import { ReactComponent as Heart } from '../../assets/header/heart.svg';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums/router';

import { useAppDispatch } from '../../store/rootStore';
import { BookDetailed } from '../../types/book.types';
import {
  CartContainer,
  CartImageBox,
  CartAboutContainer,
  CartAboutBox,
  CartButton,
  VertContainer,
  FavouriteAboutBox
} from '../CartCard/cartCartd.styled';
import StarsRating from '../BookCard/StarsRaiting/StarsRating';
import { removeFromFavouriteAction } from '../../store/favourite/favourite.actions';

export default function FavouriteCard({ book }: { book: BookDetailed }) {
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
          <FavouriteAboutBox>
            <span>{book.price}</span>
            <StarsRating raiting={book.rating} />
          </FavouriteAboutBox>
        </CartAboutBox>
        <VertContainer>
          <CartButton
            onClick={() => {
              dispatch(removeFromFavouriteAction(book));
            }}
          >
            <Heart />
          </CartButton>
        </VertContainer>
      </CartAboutContainer>
    </CartContainer>
  );
}
