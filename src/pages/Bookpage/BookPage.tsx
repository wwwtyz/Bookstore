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
  subtitle: string;
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
  url: string;
  pdf?: Object;
  is_bookmarked: boolean;
}

const resp = {
  error: "0",
  title: "Robotics, AI, and Humanity",
  subtitle: "Science, Ethics, and Policy",
  authors:
    "Joachim von Braun, Margaret S. Archer, Gregory M. Reichberg, Marcelo Sanchez Sorondo",
  publisher: "Springer",
  language: "English",
  isbn10: "303054172X",
  isbn13: "9783030541729",
  pages: "261",
  year: "2021",
  rating: "0",
  desc: "This open book examines recent advances in how artificial intelligence (AI) and robotics have elicited widespread debate over their benefits and drawbacks for humanity. The emergent technologies have for instance implications within medicine and health care, employment, transport, manufacturing, agr...",
  price: "$59.99",
  image: "https://itbook.store/img/books/9783030541729.png",
  url: "https://itbook.store/books/9783030541729",
  pdf: {
    "Free eBook":
      "https://www.dbooks.org/d/3030541738-1658757107-091222c335b662db/",
  },
};

export interface BookResponse {
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  language: string;
  isbn13: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  is_bookmarked: boolean;
}

export function BookPage() {
  const { isbn13 } = useParams<{ isbn13: string }>();
  const apiPath = `https://api.itbook.store/1.0/books/${isbn13}`;
  const [bookData, setBookData] = React.useState<BookResponse>({
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
    <>
      <div>
        <Link to={`${AppRoute.Main}`}>Back to main</Link>
        <h2>{bookData.title}</h2>
        <BookContainer>
          <BookImageContainer>
            <ImageBox>
              <img src={bookData.image} alt="" />
            </ImageBox>
            <button>
              <img src={Heart} alt="Heart" />
            </button>
          </BookImageContainer>

          <BookAboutContainer>
            <AboutBox>
              <Price>{bookData.price}</Price>
              <span>Rate</span>
            </AboutBox>
            <AboutBox>
              <span>Author</span>
              <span>{bookData.authors}</span>
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
        <div>
          <h2>Desctiption</h2>
          <p>{bookData.desc}</p>
        </div>
      </div>
    </>
  );
}
