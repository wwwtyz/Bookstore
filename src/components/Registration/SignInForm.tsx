import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums/router';
import { Input } from '../Input/Input';
import { PrimaryLink } from './authorization.styled';

export interface FormProps {
  handleClick: (email: string, pass: string, username?: string) => void;
}

const SignInForm: FC<FormProps> = ({ handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <>
      <div>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          label={'Email'}
        />
        <Input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Your password"
          label={"'Password"}
        />
        <button onClick={() => handleClick(email, pass)}>SignIn</button>
      </div>
      <div>
        Don’t have an account?
        <PrimaryLink to={AppRoute.Register}>Sign Up</PrimaryLink>
      </div>
    </>
  );
};

export { SignInForm };
