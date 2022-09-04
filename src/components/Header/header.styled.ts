import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
`;

export const HeaderContainer = styled.header`
  background-color: var(--bs-color-primary);
  border-bottom: 2px solid var(--bs-color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin: auto;
  max-width: 1120px;
  width: 100%;

  a * {
    margin: 0 1rem;
    fill: var(--bs-color-text-invert);
    stroke: var(--bs-color-primary);
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex: 1;
  position: relative;

  input {
    background-color: transparent;
    color: var(--bs-color-text);
    border: 1px solid #dadada;
    height: var(--bs-spacing-4);
    padding: 15px;
    margin: 5px var(--bs-spacing-4) 0;
    flex: 1;
  }

  input::placeholder {
    color: var(--bs-color-text);
    opacity: 0.8;
  }

  svg {
    fill: var(--bs-color-text-invert);
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-300%, 75%);
    width: var(--bs-spacing-7);
    height: auto;
  }
`;

export const ThemeSwitcherBox = styled.div`
  padding: 0 var(--bs-spacing-7);
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  * {
    fill: var(--bs-color-text-invert);
    stroke: var(--bs-color-primary);

    :hover {
      background: var(--bs-color-bg-medium);
    }

    :hover * {
      fill: #fc857f;
    }

    :active * {
      fill: #fc857f;
      stroke: #fc857f;
    }
  }
`;
