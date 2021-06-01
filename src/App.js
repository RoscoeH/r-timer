import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";

import theme from "../src/core/theme";
import Timer from "./pages/Timer";
import { SettingsProvider } from "./hooks/useSettings";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SettingsProvider>
        <DndProvider
          backend={TouchBackend}
          options={{ enableMouseEvents: true }}
        >
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
        </DndProvider>
      </SettingsProvider>
    </ThemeProvider>
  );
}

export default App;
