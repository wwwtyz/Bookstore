import React from "react";

import Heart from "../../assets/header/heart.svg";
import {
  AboutBox,
  BookAboutContainer,
  BookContainer,
  BookImageContainer,
  ImageBox,
  Price,
} from "./bookPage.styled";

export interface Book {
  error?: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  language: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf?: {
    "Chapter 2": string;
    "Chapter 5": string;
  };
  is_bookmarked: boolean;
}

export interface FetchBookResponse {
  total: string;
  error: string;
  page: string;
  books: Book[];
}

export function BookPage({
  title,
  image,
  price,
  authors,
  publisher,
  language,
  desc,
}: Book) {
  return (
    <>
      <div>
        <a href="#">Back to main</a>
        <h2>{title}</h2>
        <BookContainer>
          <BookImageContainer>
            <ImageBox>
              <img src={image} alt="" />
            </ImageBox>
            <button>
              <img src={Heart} alt="Heart" />
            </button>
          </BookImageContainer>

          <BookAboutContainer>
            <AboutBox>
              <Price>{price}</Price>
              <span>Rate</span>
            </AboutBox>
            <AboutBox>
              <span>Author</span>
              <span>{authors}</span>
            </AboutBox>
            <AboutBox>
              <span>Publisher</span>
              <span>{publisher}</span>
            </AboutBox>
            <AboutBox>
              <span>Language</span>
              <span>{language}</span>
            </AboutBox>
            <AboutBox>
              <span>Format</span>
              <span>Papper book/ ebook(pdf)</span>
            </AboutBox>
            <button>ADD TO CART</button>
          </BookAboutContainer>
        </BookContainer>
        <div>
          <h2>Desctiption</h2>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}
