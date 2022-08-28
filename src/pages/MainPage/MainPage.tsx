import React from "react";
import { fetchBooks } from "../../api/fetchBooks";
import { BookCard } from "../../components/BookCard/BookCard";
import { Book } from "../Bookpage/BookPage";
import { BookList, MainContainer } from "./mainPage.styled";

export interface FetchBookResponse {
  total: string;
  error: string;
  page: string;
  books: Book[];
}

export function MainPage() {
  const [booksData, setBooksData] = React.useState<FetchBookResponse>({
    total: "",
    error: "",
    page: "",
    books: [],
  });

  React.useEffect(() => {
    const abortController = new AbortController();
    fetchBooks()
      .then((response) => {
        setBooksData(response);
      })
      .catch((err) => {
        console.error(err);
      });
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <MainContainer>
      <h1>New Releases Books</h1>
      <BookList>
        {booksData.books.map((book) => (
          <BookCard book={book} key={book.isbn13} />
        ))}
      </BookList>
    </MainContainer>
  );
}
