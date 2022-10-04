import * as React from 'react';

import LinkContainer from '../Header/LinkContainer';
import { SearchBar } from '../Header/SearchBar/SearchBar';
import { SidePanelContainer, SidePanelMainContent } from './sidePanel.styled';

export function SidePanel({
  isSidePanelOpen,
  onClickOutside
}: {
  isSidePanelOpen: boolean;
  onClickOutside?: () => void;
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
        <SearchBar />
        <LinkContainer />
      </SidePanelMainContent>
    </SidePanelContainer>
  );
}
