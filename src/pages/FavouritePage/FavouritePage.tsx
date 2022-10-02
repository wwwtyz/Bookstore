import React from 'react';

import { useSelector } from 'react-redux';
import FavouriteCard from '../../components/FavouriteCard/FavouriteCard';
import { PageContainer } from '../../MainLayout/layout.styled';
import { favouriteSelector } from '../../store/favourite/favourite.selectors';
import { BookDetailed } from '../../types/book.types';

export default function CartPage() {
  const favouriteData: BookDetailed[] = useSelector(favouriteSelector);

  return (
    <PageContainer>
      <h1>FAVOURITES</h1>
      {favouriteData.length ? (
        <div>
          {favouriteData.map((book: BookDetailed) => (
            <FavouriteCard
              book={book}
              key={book.isbn13}
            />
          ))}
        </div>
      ) : (
        <h2>Is Empty</h2>
      )}
    </PageContainer>
  );
}
