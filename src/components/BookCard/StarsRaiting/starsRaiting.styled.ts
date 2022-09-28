import styled from "@emotion/styled";

export const RaitingContainer = styled.div`
  display: flex;
`;

export const RaitingBox = styled.div`
  position: relative;

  &:before {
    content: "★★★★★";
    display: block;
    color: gray;
  }
`;

export const RaitingActive = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;

  &:before {
    content: "★★★★★";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    color: var(--bs-color-text);
  }
`;

export const RaitingStars = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 25%;
  left: 0;
`;

export const RaitingStar = styled.input`
  margin: 0;

  flex: 0 0 20%;
  height: 50%;
  opacity: 0;
  cursor: pointer;
`;
