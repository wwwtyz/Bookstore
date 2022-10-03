import React from 'react';

import { ReactComponent as Logo } from '../../assets/header/Bookstore.svg';

import { ReactComponent as Heart } from '../../assets/header/heart.svg';
import { ReactComponent as Cart } from '../../assets/header/shopping-bag.svg';
import { ReactComponent as User } from '../../assets/header/user.svg';
import { ReactComponent as Exit } from '../../assets/header/exit.svg';
import {
  HeaderContainer,
  LinkContainer,
  ThemeSwitcherBox
} from './header.styled';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums/router';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';

import { SearchBar } from './SearchBar/SearchBar';
import { useAppDispatch } from '../../store/rootStore';
import { useAuthSelector } from '../../store/user/user.selectors';
import { userActions } from '../../store/user/user.slice';

export function Header() {
  const dispatch = useAppDispatch();
  const { isAuth, name } = useAuthSelector();
  return (
    <HeaderContainer>
      <Link to={AppRoute.Main}>
        <Logo style={{ marginLeft: '0.5rem' }} />
      </Link>
      <SearchBar />
      <LinkContainer>
        <ThemeSwitcher />
        <Link to={AppRoute.Favourite}>
          <Heart />
        </Link>
        <Link to={AppRoute.Cart}>
          <Cart />
        </Link>
        {isAuth ? (
          <ThemeSwitcherBox
            style={{ borderRadius: '40%' }}
            onClick={() => dispatch(userActions.removeUser())}
          >
            <Exit /> <span>{name}</span>
          </ThemeSwitcherBox>
        ) : (
          <Link to={AppRoute.Login}>
            <User />
          </Link>
        )}
      </LinkContainer>
    </HeaderContainer>
  );
}
