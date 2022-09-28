import { divide } from 'lodash';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { BookCard } from '../../components/BookCard/BookCard';
import { Pagination } from '../../components/Pagination/Pagination';
import {
  bookSelector,
  currentPageSelector,
  searchStringSelector,
  totalPostPageSelector
} from '../../store/book.selectors';
import { bookActions } from '../../store/book.slice';
import { requestBooks } from '../../store/bookSearch.actions';
import { useAppDispatch } from '../../store/rootStore';
import { BookList, MainContainer } from '../MainPage/mainPage.styled';

function PaginationController() {
  const currentPage = useSelector(currentPageSelector);
  const totalPages = useSelector(totalPostPageSelector);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParamsPage = searchParams.get('page') || '1';
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(bookActions.updatePage(queryParamsPage));
  }, [queryParamsPage, dispatch]);

  useEffect(() => {
    setSearchParams({ page: `${currentPage}` });
  }, [currentPage, setSearchParams]);

  return (
    <Pagination
      currentPage={currentPage}
      total={totalPages}
      setCurrentPage={(page) => {
        setSearchParams({ page: `${page}` });
      }}
    />
  );
}

export function SearchPage() {
  const currentsearch = useSelector(searchStringSelector);
  const currentPage = useSelector(currentPageSelector);
  const total = useSelector(totalPostPageSelector);
  const book = useSelector(bookSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    if (currentsearch) {
      void dispatch(
        requestBooks({
          page: currentPage,
          search: currentsearch,
          total: total
        })
      );
    }
  }, [dispatch, currentPage, currentsearch]);

  return (
    <MainContainer>
      <h1 style={{ textTransform: 'uppercase' }}>
        {book.length ? `'${currentsearch}' Serach results` : 'No results'}
      </h1>
      {book.length ? (
        <>
          <BookList>
            {book.map((book) => (
              <BookCard
                book={book}
                key={book.isbn13}
              />
            ))}
          </BookList>
          <PaginationController />
        </>
      ) : (
        <div>Совсем ничего похожего(</div>
      )}
    </MainContainer>
  );
}

export default SearchPage;
