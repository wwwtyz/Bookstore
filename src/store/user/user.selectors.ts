import { useAppSelector } from '../rootStore';

export function useAuthSelector() {
  const { email, token, id, name } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
    name
  };
}
