import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BookCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 340px;
  flex: 1;
  padding: var(--bs-spacing-7);
  border: 1px solid var(--bs-color-border);
`;
export const ContainerRaw = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 650px) {
    display: none;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  background: var(--bs-color-primary-2);
`;
export const Title = styled(Link)`
  color: var(--bs-color-text);
  font-size: var(--bs-headline-3-font-size);
  line-height: var(--bs-headline-3-font-size);
  word-wrap: break-word;
  margin: 0;
`;
export const About = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--bs-color-text-disabled);
  line-height: var(--bs-spacing-7);
`;

export const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;
  font-size: var(--bs-headline-3-font-size);
  color: var(--bs-color-text);
  margin-top: auto;
`;
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const AboutBox = styled.div`
  margin: var(--bs-spacing-8) 0;
`;
