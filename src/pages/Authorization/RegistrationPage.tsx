import * as React from 'react';

import { AppRoute } from '../../enums/router';
import { SignUp } from '../../components/Registration/SingUp';
import { ContentContainer } from '../../MainLayout/layout.styled';
import { PrimaryLink } from '../../components/Registration/authorization.styled';

export function RegistrationPage() {
  return (
    <ContentContainer>
      <PrimaryLink to={AppRoute.Main}>Back to home</PrimaryLink>
      <h1>Register</h1>
      <SignUp />
    </ContentContainer>
  );
}
