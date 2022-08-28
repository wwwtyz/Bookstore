import styled from "@emotion/styled";

export const BookContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const BookImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  flex: 1;
  position: relative;
  background: #f4eefd;

  button {
    position: absolute;
    background: var(--bs-color-bg-medium);
    border: none;
    top: 0;
    right: 0;
  }
`;
export const ImageBox = styled.div`
  display: flex;
`;
export const BookAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
  margin: 2rem;
  color: var(--bs-color-text-disabled);
`;
export const AboutBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Price = styled.span`
  font-size: var(--bs-headline-2-font-size);
  color: var(--bs-color-text);
`;
