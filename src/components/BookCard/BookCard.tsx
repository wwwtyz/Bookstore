import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBook } from '../../api/fetchBook';
import { AppRoute } from '../../enums/router';
import { Price } from '../../pages/Bookpage/bookPage.styled';
import { booksLoadingStateSelector } from '../../store/book.selectors';
import { Book, BookDetailed } from '../../types/book.types';
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
      <Link to={`/${AppRoute.Books}/${book.isbn13}`}>
        <ImageContainer>
          {loadingState === 'pending' ? (
            <div>LOADING</div>
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
        {loading ? (
          <div>LOADING</div>
        ) : (
          <AboutBox>
            <About>
              by {bookData.authors}, {bookData.publisher}, {bookData.year}
            </About>
          </AboutBox>
        )}
        <AboutBox>
          <PriceBox>
            <Price>{book.price}</Price>
            <StarsRating raiting={bookData.rating}></StarsRating>
          </PriceBox>
        </AboutBox>
      </AboutContainer>
    </BookCardContainer>
  );
}
