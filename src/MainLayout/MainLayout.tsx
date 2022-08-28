import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import {
  PageContainer,
  ContentContainer,
  AppContainerBox,
} from "./layout.styled";

export function MainLayout(
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
) {
  return (
    <PageContainer>
      <Header />
      <AppContainerBox>
        <ContentContainer>{children}</ContentContainer>
      </AppContainerBox>
      <Footer />
    </PageContainer>
  );
}
