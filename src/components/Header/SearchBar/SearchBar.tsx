import * as React from 'react';

import { ReactComponent as Search } from '../../../assets/header/Icon-Search.svg';

import debounce from 'lodash/debounce';

import { useSelector } from 'react-redux';

import { useUpdateEffect } from 'react-use';
import { searchStringSelector } from '../../../store/book.selectors';
import { useAppDispatch } from '../../../store/rootStore';
import { SearchBarContainer } from '../header.styled';
import { bookActions } from '../../../store/book.slice';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../enums/router';

function SearchBox() {
  const search = useSelector(searchStringSelector);
  const [rawSearch, setRawSearch] = React.useState(search);
  const formattedSearch = rawSearch.trim();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const updateSearch = React.useCallback(
    debounce(
      (searchStr: string) => dispatch(bookActions.updateSearch(searchStr)),
      700
    ),
    []
  );

  useUpdateEffect(() => {
    updateSearch(formattedSearch);
  }, [formattedSearch]);

  return (
    <input
      type="search"
      placeholder="Search..."
      value={rawSearch}
      onChange={({ target: { value } }) => {
        setRawSearch(value);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          navigate(AppRoute.Search);
        }
      }}
    />
  );
}

export function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchBox />
      <Link to={AppRoute.Search}>
        <Search />
      </Link>
    </SearchBarContainer>
  );
}
