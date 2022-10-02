import * as React from 'react';

import { AppRoute } from '../../enums/router';
import {
  ContentContainer,
  FormContainer,
  PrimaryLink
} from '../../components/Registration/authorization.styled';

import { SignIn } from '../../components/Registration/SingIn';

export function LoginPage() {
  return (
    <ContentContainer>
      <PrimaryLink to={AppRoute.Main}>Back to home</PrimaryLink>
      <h1>Sign In</h1>
      <FormContainer>
        <SignIn />
      </FormContainer>
    </ContentContainer>
  );
}
