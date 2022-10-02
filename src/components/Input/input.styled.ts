import styled from '@emotion/styled';

export const InputContainer = styled.div`
  display: grid;
  padding: 0 var(--bs-spacing-2);
`;

export const InputLabel = styled.label`
  font-size: var(--bs-subline-font-size);
`;

export const StyledInput = styled.input`
  border: none;
  font-size: 16px;
  line-height: 20px;
  padding: var(--bs-spacing-7) var(--bs-spacing-5);
  margin: var(--bs-spacing-7);
  &::placeholder {
    color: var(--bs-color-text-disabled);
  }
`;

export const InputError = styled.div`
  height: 20px;
  font-size: 16px;
  line-height: 20px;
  color: var(--bs-color-error);
`;
