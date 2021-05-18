import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import store from "./redux/store";

const EmployeesContainer = React.lazy(() =>
  import("./components/Employees/EmployeesContainer")
);

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/employees" render={() => <EmployeesContainer />} />
          <Route render={() => <Redirect to='/employees'/>} />
        </Switch>
      </Suspense>
    </div>
  );
};

const ConnectedApp = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default ConnectedApp;
