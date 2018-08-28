import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import rootReducer from "./reducers/index";
import { createStore  } from "redux";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import promise from "redux-promise";
import createLogger from "redux-logger";


const logger = createLogger();
const store = createStore(
  rootReducer, devToolsEnhancer());

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
