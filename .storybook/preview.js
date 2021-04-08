import { ThemeProvider } from "@theme-ui/theme-provider";

import theme from "../src/core/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators: [
    (Story) => <ThemeProvider theme={theme}>{Story()}</ThemeProvider>,
  ],
};
