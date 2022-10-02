import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums/router';
import { User } from '../../types/user.types';

import { SignUp } from '../../components/Registration/SingUp';

export function RegistrationPage() {
  return (
    <div>
      <h1>Register</h1>
      <SignUp />
    </div>
  );
}
