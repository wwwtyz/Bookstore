import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { SidePanel } from '../components/SidePanel/SidePanel';
import {
  PageContainer,
  ContentContainer,
  AppContainerBox
} from './layout.styled';

export function MainLayout() {
  const [isSidePanelOpen, setisSidePanelOpen] = React.useState(false);

  const toggleSidePanel = React.useCallback(
    () => setisSidePanelOpen((prev) => !prev),
    []
  );
  return (
    <PageContainer>
      <Header
        isSidePanelOpen={isSidePanelOpen}
        toggleSidePanel={toggleSidePanel}
      />
      <SidePanel
        isSidePanelOpen={isSidePanelOpen}
        onClickOutside={toggleSidePanel}
        toggleSidePanel={toggleSidePanel}
      />
      <AppContainerBox>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </AppContainerBox>
      <Footer />
    </PageContainer>
  );
}
