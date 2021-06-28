import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import { HelmetProvider, Helmet } from "react-helmet-async";

import theme from "../src/core/theme";
import Timer from "./pages/Timer";
import { SettingsProvider } from "./hooks/useSettings";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Helmet>
          <title>rTimer | Simple Visual Timer</title>
        </Helmet>
        <SettingsProvider>
          <Router>
            <Switch>
              <Route exact path="/timer/:id">
                <Timer />
              </Route>
              <Route exact path="/timer">
                <Timer />
              </Route>
              <Route exact path="/">
                <Redirect to="/timer" />
              </Route>
            </Switch>
          </Router>
        </SettingsProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
