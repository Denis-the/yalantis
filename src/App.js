import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import store from "./redux/store";

const EmployeesContainer = React.lazy(() =>
  import("./components/Employees/EmployeesContainer")
);

const App = () => (
  <div className="App">
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path="/employees" render={() => <EmployeesContainer />} />
        <Route render={() => <Redirect to="/employees" />} />
      </Switch>
    </Suspense>
  </div>
);

const ConnectedApp = () => (
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);

export default ConnectedApp;
