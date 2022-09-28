import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AppThemeProvider } from './contexts/AppThemeProvider/AppThemeProvider';
import { AppRoute } from './enums/router';

import { MainLayout } from './MainLayout/MainLayout';
import { BookPage } from './pages/Bookpage/BookPage';
import CartPage from './pages/CartPage/CartPage';
import { MainPage } from './pages/MainPage/MainPage';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
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
            path={`${AppRoute.Search}`}
            element={<SearchPage />}
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
