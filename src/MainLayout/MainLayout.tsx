import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import {
  PageContainer,
  ContentContainer,
  AppContainerBox,
} from "./layout.styled";

export function MainLayout() {
  return (
    <PageContainer>
      <Header />
      <AppContainerBox>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </AppContainerBox>
      <Footer />
    </PageContainer>
  );
}
