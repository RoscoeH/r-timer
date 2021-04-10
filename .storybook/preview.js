import { ThemeProvider } from "@theme-ui/theme-provider";

import theme from "../src/core/theme";
import { TimerProvider } from "../src/hooks/useTimer";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => <ThemeProvider theme={theme}>{Story()}</ThemeProvider>,
  (Story) => <TimerProvider>{Story()}</TimerProvider>,
];
