import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchBook } from '../../api/fetchBook';

import Heart from '../../assets/header/heart.svg';
import StarsRating from '../../components/BookCard/StarsRaiting/StarsRating';
import {
  ButtonBig,
  PrimaryLink
} from '../../components/Registration/authorization.styled';
import { AppRoute } from '../../enums/router';
import { addToCartAction } from '../../store/cart/cart.actions';
import { cartSelector } from '../../store/cart/cart.selectors';
import { cartActions } from '../../store/cart/cart.slice';
import { addToFavouriteAction } from '../../store/favourite/favourite.actions';
import { favouriteSelector } from '../../store/favourite/favourite.selectors';
import { useAppDispatch } from '../../store/rootStore';
import { BookDetailed } from '../../types/book.types';

import {
  AboutBox,
  BookAboutContainer,
  BookContainer,
  BookImageContainer,
  ImageBox,
  Price
} from './bookPage.styled';

export function BookPage() {
  const { isbn13 } = useParams<{ isbn13: string }>();
  const apiPath = `https://api.itbook.store/1.0/books/${isbn13}`;
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
  const cartData: BookDetailed[] = useSelector(cartSelector);
  const FavouriteData: BookDetailed[] = useSelector(favouriteSelector);
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  const dataC = cartData.filter((e) => e.isbn13 === bookData.isbn13);
  const dataF = FavouriteData.filter((e) => e.isbn13 === bookData.isbn13);

  React.useEffect(() => {
    setIsLoading(true);
    fetchBook(apiPath)
      .then((response) => {
        setBookData(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div>
        <PrimaryLink to={`${AppRoute.Main}`}>Back to main</PrimaryLink>
        <h2>{bookData.title}</h2>
        {isLoading ? (
          <div>LOADING</div>
        ) : (
          <BookContainer>
            <BookImageContainer>
              <ImageBox>
                <img
                  src={bookData.image}
                  alt=""
                />
              </ImageBox>
              <div>
                <img
                  src={Heart}
                  alt="Heart"
                />
              </div>
            </BookImageContainer>

            <BookAboutContainer>
              <AboutBox>
                <Price>{bookData.price}</Price>
                <span>
                  <StarsRating raiting={bookData.rating} />
                </span>
              </AboutBox>
              <AboutBox>
                <span>Author</span>
                <span style={{ maxWidth: '50%' }}>{bookData.authors}</span>
              </AboutBox>
              <AboutBox>
                <span>Publisher</span>
                <span>{bookData.publisher}</span>
              </AboutBox>
              <AboutBox>
                <span>Language</span>
                <span>{bookData.language}</span>
              </AboutBox>
              <AboutBox>
                <span>Format</span>
                <span>Papper book/ ebook(pdf)</span>
              </AboutBox>
              <ButtonBig
                disabled={dataC[0]?.inCart}
                onClick={() => {
                  dispatch(addToCartAction(bookData));

                  dispatch(
                    cartActions.incremetnQt(Number(bookData.price.slice(1)))
                  );
                }}
              >
                {dataC[0]?.inCart ? (
                  <span> IN CART</span>
                ) : (
                  <span> ADD TO CART</span>
                )}
              </ButtonBig>
              <ButtonBig
                disabled={dataF[0]?.inFavourite}
                onClick={() => {
                  dispatch(addToFavouriteAction(bookData));
                }}
              >
                {dataF[0]?.inFavourite ? (
                  <span> IN Favourite</span>
                ) : (
                  <span> ADD TO Favourite</span>
                )}
              </ButtonBig>
            </BookAboutContainer>
          </BookContainer>
        )}
        <div>
          <h2>Desctiption</h2>
          <p>{bookData.desc}</p>
        </div>
      </div>
    </>
  );
}
