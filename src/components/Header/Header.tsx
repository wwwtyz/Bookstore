import React from "react";
import { Input } from "../Input/Input";
import { ReactComponent as Logo } from "../../assets/header/Bookstore.svg";
import { ReactComponent as Search } from "../../assets/header/Icon-Search.svg";
import { ReactComponent as Heart } from "../../assets/header/heart.svg";
import { ReactComponent as Cart } from "../../assets/header/shopping-bag.svg";
import { ReactComponent as User } from "../../assets/header/user.svg";
import {
  HeaderContainer,
  LinkContainer,
  SearchBarContainer,
} from "./header.styled";
import { Link } from "react-router-dom";
import { AppRoute } from "../../enums/router";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <Link to={AppRoute.Main}>
          <Logo />
        </Link>
        <SearchBarContainer>
          <input placeholder="Search"></input>
          <Search />
        </SearchBarContainer>
        <LinkContainer>
          <ThemeSwitcher />
          <Link to={AppRoute.Main}>
            <Heart />
          </Link>
          <Link to={AppRoute.Main}>
            <Cart />
          </Link>
          <Link to={AppRoute.Main}>
            <User />
          </Link>
        </LinkContainer>
      </HeaderContainer>
    </div>
  );
}
