import React from 'react';

import { ReactComponent as Heart } from '../../assets/header/heart.svg';
import { ReactComponent as Cart } from '../../assets/header/shopping-bag.svg';
import { ReactComponent as User } from '../../assets/header/user.svg';
import { ReactComponent as Exit } from '../../assets/header/exit.svg';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums/router';
import { useAuthSelector } from '../../store/user/user.selectors';
import { userActions } from '../../store/user/user.slice';

import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';
import { useAppDispatch } from '../../store/rootStore';
import { ThemeSwitcherBtn } from './header.styled';

function LinkContainer() {
  const { isAuth, name } = useAuthSelector();
  const dispatch = useAppDispatch();
  return (
    <>
      <ThemeSwitcher />
      <Link to={AppRoute.Favourite}>
        <Heart />
      </Link>
      <Link to={AppRoute.Cart}>
        <Cart />
      </Link>
      {isAuth ? (
        <ThemeSwitcherBtn
          style={{ borderRadius: '40%' }}
          onClick={() => dispatch(userActions.removeUser())}
        >
          <Exit /> <span>{name}</span>
        </ThemeSwitcherBtn>
      ) : (
        <Link to={AppRoute.Login}>
          <User />
        </Link>
      )}
    </>
  );
}

export default LinkContainer;
