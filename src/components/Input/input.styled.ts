import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
`;

export const StyledInput = styled.input`
  border: 1px solid var(--bs-color-border);
  font-size: var(--bs-subline-font-size);
  line-height: var(--bs-subline-line-height);
  padding: var(--bs-spacing-7) var(--bs-spacing-6);
  margin: var(--bs-spacing-8) 0 var(--bs-spacing-7);

  &:disabled {
    background-color: var(--bs-color-bg-disabled);
    color: var(--bs-color-text-disabled);
  }

  &:focus {
    outline-color: var(--bs-color-border);
  }
`;

export const InputError = styled.div`
  height: 20px;
  font-size: var(--bs-subline-font-size);
  line-height: var(--bs-subline-line-height);
  color: var(--bs-color-error);
`;
