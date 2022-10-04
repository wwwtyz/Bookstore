import styled from '@emotion/styled';

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
`;
export const LogoContainer = styled.div`
  display: flex;
`;

export const HeaderContainer = styled.header`
  background-color: var(--bs-color-primary);
  border-bottom: 2px solid var(--bs-color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin: 0 auto;
  max-width: 1120px;
  width: 100%;

  a * {
    fill: var(--bs-color-text);
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
    border: 1px solid var(--bs-color-border);
    height: var(--bs-spacing-4);
    padding: 15px;
    margin: 0 var(--bs-spacing-4);
    flex: 1;
  }

  input::placeholder {
    color: var(--bs-color-text);
    opacity: 0.8;
  }

  svg {
    fill: var(--bs-color-text);
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-300%, 0);
    width: var(--bs-spacing-7);
    height: auto;
    @media (min-width: 650px) {
      transform: translate(-300%, 50%);
    }
  }
`;

export const ThemeSwitcherBtn = styled.button`
  color: var(--bs-color-text);
  border: none;
  background: transparent;
  padding: 3px;

  svg {
    width: 18px;
    height: 18px;
  }
`;
export const SidePanelBtn = styled.button`
  color: var(--bs-color-text);
  border: none;
  background: transparent;
  padding: 3px;

  svg {
    width: 18px;
    height: 18px;
  }
  @media (min-width: 650px) {
    display: none;
  }
`;
export const HideContainer = styled.div`
  flex: 1;
  a,
  button {
    padding: var(--bs-spacing-8);
    margin: var(--bs-spacing-8);
    border-radius: 40%;
    fill: var(--bs-color-text);
    stroke: var(--bs-color-primary);
  }
  a,
  button {
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

  @media (max-width: 650px) {
    display: none;
  }
`;
export const SearchHideContainer = styled.div`
  flex: 1;

  @media (max-width: 650px) {
    display: none;
  }
`;
export const BtnBox = styled.div`
  display: flex;
  flex: 1;

  * {
    margin: var(--bs-spacing-8);
    border-radius: 40%;
    fill: var(--bs-color-text);
    stroke: var(--bs-color-primary);
  }

  a,
  button {
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
  @media (min-width: 650px) {
    display: none;
  }
`;

export const LinkContainerRaw = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
