import { ThemeProvider } from "theme-ui";

import theme from "../src/core/theme";
import { TimerProvider } from "../src/hooks/useTimer";
import { SettingsProvider } from "../src/hooks/useSettings";

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
  (Story) => <TimerProvider>{Story()}</TimerProvider>,
  (Story) => <SettingsProvider>{Story()}</SettingsProvider>,
  (Story) => <ThemeProvider theme={theme}>{Story()}</ThemeProvider>,
];
