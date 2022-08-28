export enum FontWeight {
  Bold = 700,
  Bolder = 600,
  Regular = 400,
}

export enum Breakpoints {
  Mobile = "480px",
  Tablet = "768px",
  Desktop = "1920px",
}

export const TYPOGRAPHY = {
  desktop: {
    headline1: {
      fontSize: "56px",
      fontWeight: FontWeight.Bold,
      lineHeight: "64px",
    },
    headline2: {
      fontSize: "40px",
      fontWeight: FontWeight.Bold,
      lineHeight: "60px",
    },
    headline3: {
      fontSize: "24px",
      fontWeight: FontWeight.Bold,
      lineHeight: "32px",
    },
    body: {
      fontSize: "16px",
      fontWeight: FontWeight.Bolder,
      lineHeight: "32px",
    },
    body2: {
      fontSize: "16px",
      fontWeight: FontWeight.Bolder,
      lineHeight: "24px",
    },
    subline: {
      fontSize: "18px",
      fontWeight: FontWeight.Regular,
      lineHeight: "24px",
    },
  },
  tablet: {
    headline1: {
      fontSize: "56px",
      fontWeight: FontWeight.Bold,
      lineHeight: "64px",
    },
    headline2: {
      fontSize: "40px",
      fontWeight: FontWeight.Bold,
      lineHeight: "60px",
    },
    headline3: {
      fontSize: "24px",
      fontWeight: FontWeight.Bold,
      lineHeight: "32px",
    },
    body: {
      fontSize: "16px",
      fontWeight: FontWeight.Bolder,
      lineHeight: "32px",
    },
    body2: {
      fontSize: "16px",
      fontWeight: FontWeight.Bolder,
      lineHeight: "24px",
    },
    subline: {
      fontSize: "18px",
      fontWeight: FontWeight.Regular,
      lineHeight: "24px",
    },
  },
  mobile: {
    headline1: {
      fontSize: "32px",
      fontWeight: FontWeight.Bold,
      lineHeight: "44px",
    },
    headline2: {
      fontSize: "28px",
      fontWeight: FontWeight.Bold,
      lineHeight: "40px",
    },
    headline3: {
      fontSize: "24px",
      fontWeight: FontWeight.Bold,
      lineHeight: "32px",
    },
    body: {
      fontSize: "16px",
      fontWeight: FontWeight.Bolder,
      lineHeight: "32px",
    },
    body2: {
      fontSize: "16px",
      fontWeight: FontWeight.Bolder,
      lineHeight: "24px",
    },
    subline: {
      fontSize: "18px",
      fontWeight: FontWeight.Regular,
      lineHeight: "24px",
    },
  },
};

export const SPACING = {
  mobile: {
    L1: "56px",
    L2: "36px",
    L3: "32px",
    L4: "24px",
    L5: "24px",
    L6: "20px",
    L7: "16px",
    L8: "8px",
  },
  tablet: {
    L1: "72px",
    L2: "48px",
    L3: "40px",
    L4: "32px",
    L5: "24px",
    L6: "20px",
    L7: "16px",
    L8: "8px",
  },
  desktop: {
    L1: "72px",
    L2: "48px",
    L3: "40px",
    L4: "32px",
    L5: "24px",
    L6: "20px",
    L7: "16px",
    L8: "8px",
  },
} as const;

export enum ThemeVariant {
  Dark = "dark",
  Light = "light",
}

const darkTheme = {
  colors: {
    background: "#313037",
    backgroundLight: "#F4EEFD",
    backgroundMedium: "#DADADA",
    backgroundDisabled: "#E8E8E8",
    border: "#DADADA",
    error: "#FD3419",
    primary2: "#AC9F32",
    primary: "#DDCE55",
    text: "#F1F1F1",
    textDisabled: "#b2b2b2",
    textInvert: "#313037",
  },
};

const lightTheme = {
  colors: {
    background: "#FFFFFF",
    backgroundLight: "##F4EEFD",
    backgroundMedium: "#A8A8A8",
    backgroundDisabled: "#E8E8E8",
    border: "#DADADA",
    error: "#FC857F",
    primary: "#FFFFFF",
    primary2: "#5B5A62",
    text: "#323537",
    textDisabled: "#8D8E97",
    textInvert: "#FFF",
  },
};

export const appTheme = {
  [ThemeVariant.Dark]: darkTheme,
  [ThemeVariant.Light]: lightTheme,
};
