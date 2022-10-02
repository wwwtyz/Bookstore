import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const PrimaryLink = styled(Link)`
  color: var(--bs-color-text);
  font-size: var(--bs-body-2-font-size);

  :hover {
    color: var(--bs-color-text-invert);
  }
`;

export const SecondaryLink = styled(PrimaryLink)`
  color: var(--bs-color-text);

  :hover {
    color: var(--bs-color-text-invert);
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-row-gap: var(--bs-spacing-5);
`;

export const FormContainer = styled.div`
  padding: var(--bs-spacing-4);
  margin: auto;
  width: 100%;
  border: 1px solid var(--bs-color-border);
  max-width: 620px;
`;

export const ConfirmSection = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--bs-spacing-8);
  width: 100%;
  max-width: 620px;
`;
