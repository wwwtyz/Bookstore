import React from "react";
import { Link, useParams } from "react-router-dom";
import { fetchBooks } from "../../api/fetchBooks";

import Heart from "../../assets/header/heart.svg";
import { AppRoute } from "../../enums/router";
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
  subtitle?: string;
  authors?: string;
  publisher?: string;
  language?: string;
  isbn10?: string;
  isbn13: string;
  pages?: string;
  year?: string;
  rating?: string;
  desc?: string;
  price: string;
  image: string;
  url?: string;
  pdf?: Object;
  is_bookmarked?: boolean;
}

export function BookPage() {
  const { isbn13 } = useParams<{ isbn13: string }>();
  const apiPath = `https://api.itbook.store/1.0/books/${isbn13}`;
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
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    fetchBooks(apiPath)
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
    <>
      <div>
        <Link to={`${AppRoute.Main}`}>Back to main</Link>
        <h2>{bookData.title}</h2>
        {isLoading ? (
          <div>LOADING</div>
        ) : (
          <BookContainer>
            <BookImageContainer>
              <ImageBox>
                <img src={bookData.image} alt="" />
              </ImageBox>
              <div>
                <img src={Heart} alt="Heart" />
              </div>
            </BookImageContainer>

            <BookAboutContainer>
              <AboutBox>
                <Price>{bookData.price}</Price>
                <span>Rate: {bookData.rating} </span>
              </AboutBox>
              <AboutBox>
                <span>Author</span>
                <span style={{ maxWidth: "50%" }}>{bookData.authors}</span>
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
              <button>ADD TO CART</button>
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
