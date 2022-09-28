import { PaginationContainer, PagesContainer } from './pagination.styled';
import { getSections } from './pagination.utils';

export function Pagination({
  total,
  currentPage,
  setCurrentPage
}: {
  setCurrentPage: (page: string) => void;
  currentPage: string;
  total: string;
}) {
  const sections = getSections(currentPage, total);
  return (
    <PaginationContainer>
      <button
        disabled={Number(currentPage) <= 1}
        onClick={() => setCurrentPage(String(Number(currentPage) - 1))}
      >
        {' '}
        {'<--'} Prev
      </button>
      <PagesContainer>
        {sections.start.map((page) => (
          <button
            key={page}
            disabled={page == currentPage}
            onClick={() => setCurrentPage('' + page)}
          >
            {page}
          </button>
        ))}
        {sections.hasDelimiter && <button>...</button>}
        {sections.end &&
          sections.end.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          ))}
      </PagesContainer>
      <button
        disabled={Number(currentPage) >= Number(total)}
        onClick={() => setCurrentPage(String(Number(currentPage) + 1))}
      >
        Next {'-->'}
      </button>
    </PaginationContainer>
  );
}
