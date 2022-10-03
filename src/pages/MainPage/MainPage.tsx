import React from 'react';

import { RevolvingDot } from 'react-loader-spinner';
import { fetchBooks } from '../../api/fetchBooks';
import { BookCard } from '../../components/BookCard/BookCard';
import { FetchBookResponse } from '../../types/book.types';

import { BookList, MainContainer } from './mainPage.styled';

export function MainPage() {
  const [booksData, setBooksData] = React.useState<FetchBookResponse>({
    total: '',
    books: []
  });

  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    fetchBooks()
      .then((response) => {
        setBooksData(response);
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
    <MainContainer>
      <h1>New Releases Books</h1>
      {isLoading ? (
        <RevolvingDot
          height="500"
          width="500"
          color="gray"
          secondaryColor="lightblue"
          ariaLabel="revolving-dot-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <BookList>
          {booksData.books.map((book) => (
            <BookCard
              book={book}
              key={book.isbn13}
            />
          ))}
        </BookList>
      )}
    </MainContainer>
  );
}
