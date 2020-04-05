import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Header from "components/organisms/Header";
import Login from "components/templates/Login";
import "ress";
import { Provider } from "react-redux";
import store from "configureStore";
import AddTodo from "containers/pages/AddTodo";

// TODO: Routing
ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <Header />
      <Login />
      <AddTodo />
    </React.Fragment>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
