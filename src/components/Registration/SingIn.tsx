import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/rootStore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { userActions } from '../../store/user/user.slice';
import { AppRoute } from '../../enums/router';
import { RegistrationForm } from './RegistrationForm';
import { SignInForm } from './SignInForm';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          userActions.setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
            name: user.displayName
          })
        );
        navigate(AppRoute.Main);
      })
      .catch(console.error);
  };

  return <SignInForm handleClick={handleRegister} />;
};

export { SignIn };
