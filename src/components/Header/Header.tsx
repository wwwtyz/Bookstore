import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/header/Bookstore.svg';
import { ReactComponent as Bugger } from '../../assets/header/burger.svg';

import { ReactComponent as Cross } from '../../assets/header/Icon-Cancel.svg';

import {
  BtnBox,
  HeaderContainer,
  HideContainer,
  LinkContainerRaw,
  LogoContainer,
  SearchHideContainer,
  SidePanelBtn
} from './header.styled';

import { AppRoute } from '../../enums/router';
import { Link } from 'react-router-dom';
import LinkContainer from './LinkContainer';
import { SearchBar } from './SearchBar/SearchBar';

export function Header({
  isSidePanelOpen,
  toggleSidePanel
}: {
  isSidePanelOpen: boolean;
  toggleSidePanel: () => void;
}) {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to={AppRoute.Main}>
          <Logo style={{ marginLeft: '0.5rem' }} />
        </Link>
      </LogoContainer>
      <SearchHideContainer>
        <SearchBar />
      </SearchHideContainer>
      <LinkContainerRaw>
        <BtnBox>
          <SidePanelBtn
            style={{ borderRadius: '40%' }}
            onClick={(e) => {
              toggleSidePanel();
              e.stopPropagation();
            }}
          >
            {isSidePanelOpen ? <Cross /> : <Bugger />}
          </SidePanelBtn>
        </BtnBox>
        <HideContainer>
          <LinkContainer />
        </HideContainer>
      </LinkContainerRaw>
    </HeaderContainer>
  );
}
