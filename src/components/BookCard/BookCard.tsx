import React from "react";
import { Link } from "react-router-dom";
import { fetchBook } from "../../api/fetchBook";
import { AppRoute } from "../../enums/router";
import { Price } from "../../pages/Bookpage/bookPage.styled";
import { Book, BookDetailed } from "../../types/book.types";
import {
  BookCardContainer,
  ImageContainer,
  Title,
  PriceBox,
  About,
  AboutContainer,
  AboutBox,
} from "./bookCard.styled";
import StarsRating from "./StarsRaiting/StarsRating";

export function BookCard({ book }: { book: Book }) {
  const apiPath = `https://api.itbook.store/1.0/books/${book.isbn13}`;
  const [bookData, setBookData] = React.useState<BookDetailed>({
    title: "",
    subtitle: "",
    authors: "",
    publisher: "",
    language: "",
    isbn13: "",
    year: "",
    rating: "",
    desc: "",
    price: "",
    image: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    fetchBook(apiPath)
      .then((response) => {
        setBookData(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <BookCardContainer>
      <Link to={`${AppRoute.Books}/${book.isbn13}`}>
        <ImageContainer>
          {isLoading ? <div>LOADING</div> : <img src={book.image} alt="" />}
        </ImageContainer>
      </Link>
      <AboutContainer>
        <AboutBox>
          <Title to={`${AppRoute.Books}/${book.isbn13}`}>{book.title}</Title>
        </AboutBox>
        {isLoading ? (
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
