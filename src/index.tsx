import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Header from "components/organisms/Header";
import Login from "components/templates/Login";
import "ress";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "configureStore";
import AddTodo from "containers/pages/AddTodo";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// TODO: top page
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Header />
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/todo">
              <AddTodo />
            </Route>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
