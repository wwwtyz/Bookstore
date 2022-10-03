import React from 'react';
import { ContentContainer } from '../Registration/authorization.styled';
import { ThreeCircles, Vortex } from 'react-loader-spinner';

function Spinner() {
  return (
    <ContentContainer>
      <ThreeCircles
        height="100"
        width="100"
        color="var(--bs-color-text)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </ContentContainer>
  );
}

export default Spinner;
