import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Timer from "./pages/Timer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/timer">
            <Timer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
