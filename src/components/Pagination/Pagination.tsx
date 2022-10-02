import {
  PaginationContainer,
  PagesContainer,
  ButtonMini
} from './pagination.styled';
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
      <ButtonMini
        disabled={Number(currentPage) <= 1}
        onClick={() => setCurrentPage(String(Number(currentPage) - 1))}
      >
        {' '}
        {'<--'} Prev
      </ButtonMini>
      <PagesContainer>
        {sections.start.map((page) => (
          <ButtonMini
            key={page}
            disabled={page == currentPage}
            onClick={() => setCurrentPage('' + page)}
          >
            {page}
          </ButtonMini>
        ))}
        {sections.hasDelimiter && <ButtonMini>...</ButtonMini>}
        {sections.end &&
          sections.end.map((page) => (
            <ButtonMini
              key={page}
              onClick={() => setCurrentPage(page)}
              disabled={page === currentPage}
            >
              {page}
            </ButtonMini>
          ))}
      </PagesContainer>
      <ButtonMini
        disabled={Number(currentPage) >= Number(total)}
        onClick={() => setCurrentPage(String(Number(currentPage) + 1))}
      >
        Next {'-->'}
      </ButtonMini>
    </PaginationContainer>
  );
}
