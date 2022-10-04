import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const SidePanelContainer = styled.div<{ isSidePanelOpen: boolean }>`
  position: fixed;
  transition: transform 300ms ease-in-out;
  top: 0;
  left: 150%;
  z-index: 10;
  bottom: 0;
  width: 50%;
  border: 1px solid var(--bs-color-border);
  background-color: var(--bs-color-primary);
  transform: translateX(
    ${({ isSidePanelOpen }) => (isSidePanelOpen ? '-200%' : 0)}
  );
  display: flex;
  flex-direction: column;
`;

export const SidePanelMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    margin: var(--bs-spacing-8);
    border-radius: 40%;
    fill: var(--bs-color-text);
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
