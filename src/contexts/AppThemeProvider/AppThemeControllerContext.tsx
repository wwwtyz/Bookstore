import React from "react";
import { ThemeVariant } from "./theme";

export interface AppThemeController {
  themeVariant: ThemeVariant;
  setThemeVariant: (variant: ThemeVariant) => void;
}

export const AppThemeControllerContext =
  React.createContext<AppThemeController | null>(null);

export function useAppThemeController(): AppThemeController {
  const contextValue = React.useContext(AppThemeControllerContext);
  if (!contextValue) {
    throw new Error("AppThemeController is used outside Provider!");
  }

  return contextValue;
}
