import React from "react";
import { Book } from "../../pages/Bookpage/BookPage";
import { Price } from "../../pages/Bookpage/bookPage.styled";
import {
  BookCardContainer,
  ImageContainer,
  Title,
  PriceBox,
} from "./bookCard.styled";

export function BookCard({ book }: { book: Book }) {
  return (
    <BookCardContainer>
      <ImageContainer>
        <img src={book.image} alt="" />
      </ImageContainer>
      <Title>{book.title}</Title>
      {/* <About>
        by {book.authors}, {book.publisher} {book.year}
      </About> */}
      <PriceBox>
        <Price>{book.price}</Price>
        <span>Rate: {book.rating}</span>
      </PriceBox>
    </BookCardContainer>
  );
}
