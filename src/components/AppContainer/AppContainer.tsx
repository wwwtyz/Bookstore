import React, { ReactNode } from "react";
import { AppContainerBox } from "./appContainer.styled";

export function AppContainer(children: ReactNode) {
  return <AppContainerBox>{children}</AppContainerBox>;
}
