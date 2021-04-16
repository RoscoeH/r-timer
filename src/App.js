import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";

import theme from "../src/core/theme";
import Home from "./pages/Home";
import Timer from "./pages/Timer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        <Router>
          <Switch>
            <Route path="/timer">
              <Timer />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
