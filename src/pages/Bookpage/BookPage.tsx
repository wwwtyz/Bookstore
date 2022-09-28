import React from "react";
import { Link, useParams } from "react-router-dom";
import { fetchBook } from "../../api/fetchBook";

import Heart from "../../assets/header/heart.svg";
import { AppRoute } from "../../enums/router";
import { BookDetailed } from "../../types/book.types";
import {
  AboutBox,
  BookAboutContainer,
  BookContainer,
  BookImageContainer,
  ImageBox,
  Price,
} from "./bookPage.styled";

export function BookPage() {
  const { isbn13 } = useParams<{ isbn13: string }>();
  const apiPath = `https://api.itbook.store/1.0/books/${isbn13}`;
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
