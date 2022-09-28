import React from 'react';
import {
  RaitingActive,
  RaitingBox,
  RaitingContainer,
  RaitingStar,
  RaitingStars
} from './starsRaiting.styled';

function StarsRating({ raiting }: { raiting: string }) {
  const stars = Array(5).fill(0);
  return (
    <RaitingContainer>
      <RaitingBox>
        <RaitingActive style={{ width: `${+raiting * 20}%` }}></RaitingActive>
        <RaitingStars>
          {stars.map((_, i) => {
            return (
              <RaitingStar
                type="radio"
                value={i}
                name={'raiting'}
                key={i}
              />
            );
          })}
        </RaitingStars>
      </RaitingBox>
      <div style={{ paddingLeft: `10px` }}>{`${raiting}.0`}</div>
    </RaitingContainer>
  );
}

export default StarsRating;
