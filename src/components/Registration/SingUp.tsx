import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/rootStore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { userActions } from '../../store/user/user.slice';
import { AppRoute } from '../../enums/router';
import { RegistrationForm } from './RegistrationForm';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string, name: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          userActions.setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
            name: name
          })
        );
        navigate(AppRoute.Main);
      })
      .catch(console.error);
  };

  return <RegistrationForm handleClick={handleRegister} />;
};

export { SignUp };
