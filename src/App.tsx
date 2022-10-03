import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner';

import { AppThemeProvider } from './contexts/AppThemeProvider/AppThemeProvider';
import { AppRoute } from './enums/router';

import { MainLayout } from './MainLayout/MainLayout';
import { LoginPage } from './pages/Authorization/LoginPage';
import { RegistrationPage } from './pages/Authorization/RegistrationPage';
import { BookPage } from './pages/Bookpage/BookPage';
import CartPage from './pages/CartPage/CartPage';
import FavouritePage from './pages/FavouritePage/FavouritePage';
import { MainPage } from './pages/MainPage/MainPage';
import SearchPage from './pages/SearchPage/SearchPage';
import { booksLoadingStateSelector } from './store/book.selectors';
import { bookDetailedLoadingStateSelector } from './store/bookDetailed/bookDetailed.selectors';

function App() {
  const loadingState = useSelector(booksLoadingStateSelector);
  const loadingStateDetailed = useSelector(bookDetailedLoadingStateSelector);

  if (loadingState === 'pending' || loadingStateDetailed === 'pending') {
    return <Spinner />;
  }
  return (
    <AppThemeProvider>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainLayout />}
        >
          <Route
            index
            element={<MainPage />}
          />
          <Route
            path={`${AppRoute.Books}/:isbn13`}
            element={<BookPage />}
          />
          <Route
            path={`${AppRoute.Cart}`}
            element={<CartPage />}
          />
          <Route
            path={`${AppRoute.Favourite}`}
            element={<FavouritePage />}
          />
          <Route
            path={`${AppRoute.Search}`}
            element={<SearchPage />}
          />
          <Route
            path={`${AppRoute.Login}`}
            element={<LoginPage />}
          />
          <Route
            path={`${AppRoute.Register}`}
            element={<RegistrationPage />}
          />
        </Route>
        <Route
          path={AppRoute.NotFound}
          element={<div>Not found</div>}
        />
        <Route
          path="*"
          element={
            <Navigate
              to={AppRoute.NotFound}
              replace
            />
          }
        />
      </Routes>
    </AppThemeProvider>
  );
}

export default App;
