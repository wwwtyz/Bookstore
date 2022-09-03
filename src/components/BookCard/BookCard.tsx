import React from "react";
import { fetchBooks } from "../../api/fetchBooks";
import { AppRoute } from "../../enums/router";
import { Book } from "../../pages/Bookpage/BookPage";
import { Price } from "../../pages/Bookpage/bookPage.styled";
import {
  BookCardContainer,
  ImageContainer,
  Title,
  PriceBox,
  About,
  AboutContainer,
  AboutBox,
} from "./bookCard.styled";

export function BookCard({ book }: { book: Book }) {
  const apiPath = `https://api.itbook.store/1.0/books/${book.isbn13}`;
  const [bookData, setBookData] = React.useState<Book>({
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
    is_bookmarked: false,
  });

  React.useEffect(() => {
    const abortController = new AbortController();
    fetchBooks(apiPath)
      .then((response) => {
        setBookData(response);
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
      <ImageContainer>
        <img src={book.image} alt="" />
      </ImageContainer>
      <AboutContainer>
        <AboutBox>
          <Title to={`${AppRoute.Books}/${book.isbn13}`}>{book.title}</Title>
        </AboutBox>
        <AboutBox>
          <About>
            by {bookData.authors}, {bookData.publisher}, {bookData.year}
          </About>
        </AboutBox>
        <AboutBox>
          <PriceBox>
            <Price>{book.price}</Price>
            <span>Rate: {bookData.rating}</span>
          </PriceBox>
        </AboutBox>
      </AboutContainer>
    </BookCardContainer>
  );
}
