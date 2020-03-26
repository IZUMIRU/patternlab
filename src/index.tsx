import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Header from "components/organisms/Header";
import Login from "components/templates/Login";
// TODO: Survey Reset CSS
// https://create-react-app.dev/docs/adding-css-reset
import "ress";

// TODO: Routing
ReactDOM.render(
  <React.Fragment>
    <Header />
    <Login />
  </React.Fragment>,
  document.getElementById("root")
);

serviceWorker.unregister();
