import React, { FC } from "react";
import {
  InputContainer,
  InputError,
  InputLabel,
  StyledInput,
} from "./input.styled";
import { InputProps } from "./input.types";

export function Input({ label, error, id, ...props }: InputProps) {
  return (
    <InputContainer>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <StyledInput id={id} {...props} />
      <InputError>{error}</InputError>
    </InputContainer>
  );
}
