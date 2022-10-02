import * as React from 'react';
import { Input } from '../Input/Input';
import { AppRoute } from '../../enums/router';
import {
  FormContainer,
  ConfirmSection,
  PrimaryLink,
  ButtonBig
} from './authorization.styled';
import { FormProps } from './SignInForm';

const RegistrationForm: React.FC<FormProps> = ({ handleClick }) => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [name, setName] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');

  return (
    <FormContainer>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Name"
        placeholder="Name"
        autoComplete="username"
      />
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        placeholder="Email"
        type="email"
        autoComplete="email"
      />
      <Input
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        label="Password"
        type="password"
        placeholder="Password"
        autoComplete="new-password"
      />
      <Input
        value={confirmPass}
        autoComplete="new-password"
        onChange={(e) => setConfirmPass(e.target.value)}
        label="Confirm password"
        placeholder="Confirm password"
        type="password"
      />
      <ConfirmSection>
        <ButtonBig
          disabled={
            !name || !email || !pass || !confirmPass || pass !== confirmPass
          }
          onClick={() => handleClick(email, pass)}
        >
          Sign Up
        </ButtonBig>

        <div>
          Already have an account?{'    '}
          <PrimaryLink to={`/${AppRoute.Login}`}> Sign In</PrimaryLink>
        </div>
      </ConfirmSection>
    </FormContainer>
  );
};
export { RegistrationForm };
