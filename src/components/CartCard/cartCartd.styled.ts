import styled from '@emotion/styled';

export const CartContainer = styled.div`
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid var(--bs-color-primary-2);
`;
export const CartImageBox = styled.div`
  background-color: var(--bs-color-primary-2); ;
`;
export const CartAboutContainer = styled.div`
  display: flex;
  justify-content: space-between;

  flex: 4;
`;
export const CartAboutBox = styled.div`
  padding: 1rem;
  flex: 4;
`;
export const FavouriteAboutBox = styled.div`
  display: flex;
  justify-content: space-between;
  * {
    font-size: var(--bs-headline-3-font-size);
  }
`;
export const CounterBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: var(--bs-headline-3-font-size);
  span {
    padding: 0 2rem;
  }
`;

export const VertContainer = styled.div`
  display: flex;

  align-items: center;
  margin: 1rem;
  font-size: var(--bs-headline-2-font-size);
`;
export const TotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
`;
export const TotalBox = styled.div`
  width: 30%;
`;
export const SumBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TotalSpan = styled.span`
  font-size: var(--bs-headline-3-font-size);
`;
export const CartButton = styled.button`
  color: var(--bs-color-text);
  border: none;
  background: transparent;
  padding: 0.5rem;
  font-size: var(--bs-headline-2-font-size);

  &:hover {
    color: var(--bs-color-text-invert);
    background: var(--bs-color-bg-medium);
  }
  &:disabled {
    color: var(--bs-color-text-disabled);
  }

  * {
    margin: var(--bs-spacing-8);
    border-radius: 40%;
    fill: #fc857f;
    stroke: #fc857f;

    :hover {
      background: var(--bs-color-bg-medium);
    }

    :hover * {
      fill: var(--bs-color-text);
      stroke: var(--bs-color-primary);
    }

    :active * {
      fill: var(--bs-color-text);
      stroke: #fc857f;
    }
  }
`;
