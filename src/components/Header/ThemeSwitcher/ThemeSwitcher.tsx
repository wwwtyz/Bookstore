import * as React from "react";

import { faMoon as DarkThemeIcon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun as LightThemeIcon } from "@fortawesome/free-solid-svg-icons/faSun";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppThemeController } from "../../../contexts/AppThemeProvider/AppThemeControllerContext";
import { ThemeVariant } from "../../../contexts/AppThemeProvider/theme";
import { ThemeSwitcherBox } from "../header.styled";

export function ThemeSwitcher() {
  const { themeVariant, setThemeVariant } = useAppThemeController();
  function toggleTheme(themeVariant: ThemeVariant) {
    if (themeVariant === ThemeVariant.Light) {
      setThemeVariant(ThemeVariant.Dark);
    } else {
      setThemeVariant(ThemeVariant.Light);
    }
  }

  return (
    <ThemeSwitcherBox onClick={() => toggleTheme(themeVariant)}>
      {themeVariant === ThemeVariant.Light ? (
        <FontAwesomeIcon icon={LightThemeIcon} />
      ) : (
        <FontAwesomeIcon icon={DarkThemeIcon} />
      )}
    </ThemeSwitcherBox>
  );
}
