import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BookCard } from '../../components/BookCard/BookCard';
import Spinner from '../../components/Spinner/Spinner';
import {
  bookSelector,
  booksLoadingStateSelector
} from '../../store/book.selectors';
import { requestNewBooks } from '../../store/bookSearch.actions';
import { useAppDispatch } from '../../store/rootStore';

import { BookList, MainContainer } from './mainPage.styled';

export function MainPage() {
  const booksData = useSelector(bookSelector);
  const loadingState = useSelector(booksLoadingStateSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    {
      dispatch(requestNewBooks());
    }
  }, [dispatch]);

  return (
    <MainContainer>
      {loadingState === 'pending' ? (
        <Spinner />
      ) : (
        <>
          <h1>New Releases Books</h1>
          <BookList>
            {booksData.map((book) => (
              <BookCard
                book={book}
                key={book.isbn13}
              />
            ))}
          </BookList>
        </>
      )}
    </MainContainer>
  );
}
