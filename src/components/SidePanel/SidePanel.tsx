import * as React from 'react';
import { SidePanelBtn } from '../Header/header.styled';

import { ReactComponent as Bugger } from '../../assets/header/burger.svg';

import { ReactComponent as Cross } from '../../assets/header/Icon-Cancel.svg';

import LinkContainer from '../Header/LinkContainer';
import { SearchBar } from '../Header/SearchBar/SearchBar';
import { SidePanelContainer, SidePanelMainContent } from './sidePanel.styled';

export function SidePanel({
  toggleSidePanel,
  isSidePanelOpen,
  onClickOutside
}: {
  isSidePanelOpen: boolean;
  onClickOutside?: () => void;
  toggleSidePanel: () => void;
}) {
  const sidePanelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        onClickOutside &&
        isSidePanelOpen &&
        sidePanelRef.current &&
        !sidePanelRef.current.contains(event.target as Node)
      ) {
        onClickOutside();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClickOutside, isSidePanelOpen]);

  return (
    <SidePanelContainer
      isSidePanelOpen={isSidePanelOpen}
      ref={sidePanelRef}
    >
      <SidePanelMainContent>
        <SidePanelBtn
          style={{ borderRadius: '40%' }}
          onClick={(e) => {
            toggleSidePanel();
            e.stopPropagation();
          }}
        >
          {isSidePanelOpen ? <Cross /> : <Bugger />}
        </SidePanelBtn>
        <SearchBar />
        <LinkContainer />
      </SidePanelMainContent>
    </SidePanelContainer>
  );
}
