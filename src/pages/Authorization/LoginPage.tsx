import * as React from 'react';

import { AppRoute } from '../../enums/router';
import {
  ContentContainer,
  SecondaryLink,
  FormContainer
} from '../../components/Registration/authorization.styled';

import { SignIn } from '../../components/Registration/SingIn';

export function LoginPage() {
  return (
    <ContentContainer>
      <SecondaryLink to={AppRoute.Main}>Back to home</SecondaryLink>
      <h1>Sign In</h1>
      <FormContainer>
        <SignIn />
      </FormContainer>
    </ContentContainer>
  );
}
