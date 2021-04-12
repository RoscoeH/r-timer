import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Timer from "./pages/Timer";

function App() {
  return (
    <div
      className="App"
      // sx={{ isolation: "isolate", zIndex: 9999999, position: "relative" }}
    >
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
    </div>
  );
}

export default App;
