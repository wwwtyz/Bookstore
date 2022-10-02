import styled from '@emotion/styled';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PagesContainer = styled.div`
  padding-top: var(--bs-spacing-5);
  display: flex;
  align-items: center;
`;

export const ButtonMini = styled.button`
  border: none;

  color: var(--bs-color-text-invert);
  background-color: var(--bs-color-text);
  padding: var(--bs-spacing-5);

  &:hover {
    background-color: var(--bs-color-invert);
  }
  &:disabled {
    background-color: var(--bs-color-text-disabled);
  }
`;
