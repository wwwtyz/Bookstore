import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Heart from '../../assets/header/heart.svg';
import StarsRating from '../../components/BookCard/StarsRaiting/StarsRating';
import {
  ButtonBig,
  PrimaryLink
} from '../../components/Registration/authorization.styled';
import Spinner from '../../components/Spinner/Spinner';
import { AppRoute } from '../../enums/router';
import { requestDetailedBook } from '../../store/bookDetailed/bookDetailed.action';
import {
  bookDetailedLoadingStateSelector,
  bookDetailedSelector
} from '../../store/bookDetailed/bookDetailed.selectors';
import {
  addToCartAction,
  incTotalCostAction
} from '../../store/cart/cart.actions';
import { cartSelector } from '../../store/cart/cart.selectors';
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
  const bookData = useSelector(bookDetailedSelector);
  const cartData: BookDetailed[] = useSelector(cartSelector);
  const FavouriteData: BookDetailed[] = useSelector(favouriteSelector);
  const dispatch = useAppDispatch();
  const loadingState = useSelector(bookDetailedLoadingStateSelector);
  const dataC = cartData.filter((e) => e.isbn13 === bookData.isbn13);
  const dataF = FavouriteData.filter((e) => e.isbn13 === bookData.isbn13);

  React.useEffect(() => {
    dispatch(requestDetailedBook(apiPath));
  }, [dispatch]);

  return (
    <>
      {loadingState === 'pending' ? (
        <Spinner />
      ) : (
        <div>
          <PrimaryLink to={`${AppRoute.Main}`}>Back to main</PrimaryLink>
          <h2>{bookData.title}</h2>

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

                  dispatch(incTotalCostAction(Number(bookData.price.slice(1))));
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
          <div>
            <h2>Desctiption</h2>
            <p>{bookData.desc}</p>
          </div>
        </div>
      )}
    </>
  );
}
