import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../enums/router';
import { Price } from '../../pages/Bookpage/bookPage.styled';
import { booksLoadingStateSelector } from '../../store/book.selectors';
import { requestDetailedBook } from '../../store/bookDetailed/bookDetailed.action';
import { bookDetailedSelector } from '../../store/bookDetailed/bookDetailed.selectors';

import { useAppDispatch } from '../../store/rootStore';
import { Book } from '../../types/book.types';
import Spinner from '../Spinner/Spinner';
import {
  BookCardContainer,
  ImageContainer,
  Title,
  PriceBox,
  About,
  AboutContainer,
  AboutBox
} from './bookCard.styled';
import StarsRating from './StarsRaiting/StarsRating';

export function BookCard({ book }: { book: Book }) {
  const apiPath = `${process.env.REACT_APP_API_PATH}/books/${book.isbn13}`;
  const bookData = useSelector(bookDetailedSelector);
  const dispatch = useAppDispatch();
  const loadingState = useSelector(booksLoadingStateSelector);

  React.useEffect(() => {
    dispatch(requestDetailedBook(apiPath));
  }, [dispatch]);

  return (
    <BookCardContainer>
      <Link to={`/${AppRoute.Books}/${book.isbn13}`}>
        <ImageContainer>
          {loadingState === 'pending' ? (
            <Spinner />
          ) : (
            <img
              src={book.image}
              alt=""
            />
          )}
        </ImageContainer>
      </Link>
      <AboutContainer>
        <AboutBox>
          <Title to={`/${AppRoute.Books}/${book.isbn13}`}>{book.title}</Title>
        </AboutBox>
        <AboutBox>
          <About>
            by {bookData.authors}, {bookData.publisher}, {bookData.year}
          </About>
        </AboutBox>

        <AboutBox>
          <PriceBox>
            <Price>{book.price}</Price>
            <StarsRating raiting={bookData.rating} />
          </PriceBox>
        </AboutBox>
      </AboutContainer>
    </BookCardContainer>
  );
}
