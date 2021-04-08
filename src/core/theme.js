import "typeface-open-sans";

const commonButtonStyles = {
  outline: "none",
  border: "default",
  borderRadius: 7,
  fontFamily: "body",
  fontSize: 0,
  lineHeight: "16px",
  textTransform: "uppercase",
  px: 3,
  py: 2,
};

export default {
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: '"Open Sans", sans-serif',
    monospace: "Menlo, monospace",
  },
  fontSizes: [16, 24, 32, 48, 64, 96],
  space: [0, 4, 8, 16, 32, 64, 128, 246, 512],
  sizes: [0, 4, 8, 16, 32, 64, 128, 246, 512],

  colors: {
    text: "#000",
    background: "#fff",
    primary: "#21fa90",
    secondary: "blue",
    dark: "#000",
    light: "#fff",
    accent: {
      green: "rgba(33, 250, 144, 0.3333)",
      hover: {
        green: "rgb(33, 250, 144)",
      },
    },
  },
  borders: {
    default: "1px solid",
  },
  radii: [0, 2, 4, 8, 16, 32, 64, 99999],
  styles: {
    root: {
      fontFamily: "body",
    },
    h1: {
      fontSize: 3,
    },
    h2: {
      fontSize: 2,
      m: 0,
    },
  },
  buttons: {
    primary: {
      ...commonButtonStyles,
      borderColor: "transparent",
      color: "dark",
      bg: "accent.green",
      "&:hover": {
        bg: "accent.hover.green",
      },
      "&:active": {
        borderColor: "dark",
      },
    },
    secondary: {
      ...commonButtonStyles,
      borderColor: "accent.green",
      color: "dark",
      bg: "transparent",
      px: 3,
      py: 2,
      "&:hover": {
        borderColor: "accent.hover.green",
      },
      "&:active": {
        borderColor: "dark",
      },
    },
    icon: {
      outline: "none",
      bg: "light",
      color: "dark",
      border: "default",
      borderColor: "accent.green",
      borderRadius: 7,
      width: 4,
      height: 4,
      p: 0,
      lineHeight: "32px",

      "&:hover": {
        borderColor: "accent.hover.green",
      },

      "&:active": {
        borderColor: "dark",
      },
    },
  },
};
