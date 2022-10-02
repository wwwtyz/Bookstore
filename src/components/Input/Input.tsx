import * as React from 'react';
import {
  InputContainer,
  InputLabel,
  StyledInput,
  InputError
} from './input.styled';
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, ...passThroughProps }, ref) => (
    <InputContainer ref={ref}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <StyledInput
        id={id}
        {...passThroughProps}
      />
      <InputError>{error}</InputError>
    </InputContainer>
  )
);
