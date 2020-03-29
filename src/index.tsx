import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Header from "components/organisms/Header";
import Login from "components/templates/Login";
// TODO: Survey Reset CSS
// https://create-react-app.dev/docs/adding-css-reset
import "ress";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "configureStore";

// TODO: Routing
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.Fragment>
        <Header />
        <Login />
      </React.Fragment>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
