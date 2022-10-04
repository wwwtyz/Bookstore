import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBook } from '../../api/fetchBook';

import { AppRoute } from '../../enums/router';
import { Price } from '../../pages/Bookpage/bookPage.styled';
import { booksLoadingStateSelector } from '../../store/book.selectors';
import { requestDetailedBook } from '../../store/bookDetailed/bookDetailed.action';
import {
  bookDetailedLoadingStateSelector,
  bookDetailedSelector
} from '../../store/bookDetailed/bookDetailed.selectors';

import { useAppDispatch } from '../../store/rootStore';
import { Book, BookDetailed } from '../../types/book.types';
import Spinner from '../Spinner/Spinner';
import {
  BookCardContainer,
  ImageContainer,
  Title,
  PriceBox,
  About,
  AboutContainer,
  AboutBox,
  ContainerRaw
} from './bookCard.styled';
import StarsRating from './StarsRaiting/StarsRating';

export function BookCard({ book }: { book: Book }) {
  const apiPath = `${process.env.REACT_APP_API_PATH}/books/${book.isbn13}`;
  const [loading, setLoading] = useState(false);
  const [bookData, setBookData] = React.useState<BookDetailed>({
    title: '',
    subtitle: '',
    authors: '',
    publisher: '',
    language: '',
    isbn13: '',
    year: '',
    rating: '',
    desc: '',
    price: '',
    image: ''
  });
  const loadingState = useSelector(booksLoadingStateSelector);

  React.useEffect(() => {
    setLoading(true);
    fetchBook(apiPath)
      .then((response) => {
        setBookData(response);
      })
      .catch((err) => {
        console.error(err);
      });
    setLoading(false);
  }, []);

  return (
    <BookCardContainer>
      {loading || loadingState === 'pending' ? (
        <>
          <ImageContainer>
            <Spinner />
          </ImageContainer>
          <AboutContainer></AboutContainer>
        </>
      ) : (
        <>
          <Link to={`/${AppRoute.Books}/${book.isbn13}`}>
            <ImageContainer>
              <img
                src={book.image}
                alt=""
              />
            </ImageContainer>
          </Link>
          {loading ? (
            <Spinner />
          ) : (
            <AboutContainer>
              <AboutBox>
                <Title to={`/${AppRoute.Books}/${book.isbn13}`}>
                  {book.title}
                </Title>
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
          )}
        </>
      )}
    </BookCardContainer>
  );
}
