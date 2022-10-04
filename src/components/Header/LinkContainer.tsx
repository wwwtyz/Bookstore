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
import { LinkIndicator, ThemeSwitcherBtn } from './header.styled';
import { useSelector } from 'react-redux';
import { cartSelector } from '../../store/cart/cart.selectors';
import { BookDetailed } from '../../types/book.types';
import { favouriteSelector } from '../../store/favourite/favourite.selectors';

function LinkContainer() {
  const { isAuth, name } = useAuthSelector();
  const dispatch = useAppDispatch();
  const cartData: BookDetailed[] = useSelector(cartSelector);
  const favouriteData: BookDetailed[] = useSelector(favouriteSelector);
  return (
    <>
      <ThemeSwitcher />
      <Link
        style={{ position: 'relative' }}
        to={AppRoute.Favourite}
      >
        <Heart />
        {favouriteData.length > 0 ? <LinkIndicator /> : null}
      </Link>
      <Link
        style={{ position: 'relative' }}
        to={AppRoute.Cart}
      >
        <Cart />
        {cartData.length > 0 ? <LinkIndicator /> : null}
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
