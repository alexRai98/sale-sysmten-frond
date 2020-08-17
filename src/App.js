import React from "react";
import DashBoard from "./features/layout/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sale from './features/sales/sale'

function App() {
  return (
    <Router>

      <DashBoard>
        <Switch>
          <Route exact path="/sale" component={Sale} />
        </Switch>
      </DashBoard>
    </Router>
  );
}

export default App;
