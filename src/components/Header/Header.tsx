import React, { useState } from 'react';

import { ReactComponent as Logo } from '../../assets/header/Bookstore.svg';
import { ReactComponent as Search } from '../../assets/header/Icon-Search.svg';
import { ReactComponent as Heart } from '../../assets/header/heart.svg';
import { ReactComponent as Cart } from '../../assets/header/shopping-bag.svg';
import { ReactComponent as User } from '../../assets/header/user.svg';
import {
  HeaderContainer,
  LinkContainer,
  SearchBarContainer
} from './header.styled';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../enums/router';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';

import { BookList } from '../../pages/MainPage/mainPage.styled';
import { BookCard } from '../BookCard/BookCard';
import { Book, FetchBookResponse } from '../../types/book.types';
import { SearchBar } from './SearchBar/SearchBar';

export function Header() {
  return (
    <HeaderContainer>
      <Link to={AppRoute.Main}>
        <Logo style={{ marginLeft: '0.5rem' }} />
      </Link>
      <SearchBar />
      <LinkContainer>
        <ThemeSwitcher />
        <Link to={AppRoute.Main}>
          <Heart />
        </Link>
        <Link to={AppRoute.Cart}>
          <Cart />
        </Link>
        <Link to={AppRoute.Main}>
          <User />
        </Link>
      </LinkContainer>
    </HeaderContainer>
  );
}
