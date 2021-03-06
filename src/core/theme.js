import "typeface-open-sans";

const baseAccents = [
  { color: "red", rgb: [255, 98, 98] },
  { color: "orange", rgb: [250, 150, 33] },
  { color: "yellow", rgb: [233, 250, 33] },
  { color: "green", rgb: [33, 250, 144] },
  { color: "blue", rgb: [33, 250, 224] },
  { color: "darkBlue", rgb: [33, 159, 250] },
  { color: "purple", rgb: [128, 33, 250] },
  { color: "pink", rgb: [250, 33, 228] },
  { color: "black", rgb: [150, 150, 150] },
];

const accents = baseAccents.reduce(
  (prev, { color, rgb }) => ({
    ...prev,
    [color]: `rgba(${rgb.join(",")},0.33)`,
  }),
  {}
);

const hoverAccents = baseAccents.reduce(
  (prev, { color, rgb }) => ({
    ...prev,
    [color]: `rgb(${rgb.join(",")})`,
  }),
  {}
);

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
  space: [0, 4, 8, 16, 32, 64, 128, 256, 320, 480, 640, 720, 960, 1024],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 320, 480, 640, 720, 960, 1024],
  radii: [0, 2, 4, 8, 16, 24, 32, 99999],
  breakpoints: ["42em"],

  colors: {
    text: "#000",
    background: "#fff",
    dark: "#000",
    light: "#fff",
    primary: "#21fa90",
    secondary: "blue",
    backdrop: "rgba(0,0,0,0.1)",
    hover: "rgba(0,0,0,0.05)",
    accent: {
      ...accents,
      hover: {
        ...hoverAccents,
      },
    },
    modes: {
      dark: {
        text: "#fff",
        background: "#333",
        hover: "rgba(255,255,255,0.05)",
      },
    },
  },
  borders: {
    default: "1px solid",
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: 300,
    },
    h1: {
      fontSize: 1,
      m: 0,
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
      color: "text",
      bg: "accent.green",
      "&:hover": {
        bg: "accent.hover.green",
      },
      "&:active": {
        borderColor: "text",
      },
    },
    secondary: {
      ...commonButtonStyles,
      borderColor: "accent.green",
      color: "text",
      bg: "transparent",
      "&:hover": {
        borderColor: "accent.hover.green",
      },
      "&:active": {
        borderColor: "text",
      },
    },
    icon: {
      outline: "none",
      color: "text",
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
        borderColor: "text",
      },
    },
    color: {
      outline: "none",
      bg: "accent.green",
      border: "default",
      borderColor: "transparent",
      width: 4,
      height: 4,
      p: 0,

      "&:active": {
        borderColor: "text",
      },
    },
  },
  forms: {
    input: {
      outline: "none",
      textAlign: "center",
      height: 4,
      border: "none",
      borderBottom: "default",
      borderRadius: 0,
      borderColor: "accent.green",
      "&:hover": {
        borderColor: "accent.hover.green",
      },
      "&:focus": {
        borderColor: "text",
      },
    },
  },
};
