import styled from "@emotion/styled";

export const BookCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 340px;
  margin: 1rem;
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 1rem;
  flex: 1;
  background: #f4eefd;
`;
export const Title = styled.p`
  font-size: var(--bs-headline-3-font-size);
  line-height: var(--bs-headline-3-font-size);
  word-wrap: break-word;
  margin: 0;
`;
export const About = styled.div`
  display: flex;
  justify-content: space-between;
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
