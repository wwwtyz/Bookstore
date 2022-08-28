import React from "react";
import { Input } from "../Input/Input";
import Logo from "../../assets/header/Bookstore.svg";
import Search from "../../assets/header/Icon-Search.svg";
import Heart from "../../assets/header/heart.svg";
import Cart from "../../assets/header/shopping-bag.svg";
import User from "../../assets/header/user.svg";
import {
  HeaderContainer,
  LinkContainer,
  SearchBarContainer,
} from "./header.styled";

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
        <SearchBarContainer>
          <input placeholder="Search"></input>
          <img src={Search} alt="search" />
        </SearchBarContainer>
        <LinkContainer>
          <a href="">
            <img src={Heart} alt="Favorites" />
          </a>
          <a href="">
            <img src={Cart} alt="Cart" />
          </a>
          <a href="">
            <img src={User} alt="User" />
          </a>
        </LinkContainer>
      </HeaderContainer>
    </div>
  );
}
