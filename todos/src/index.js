import { createStore  } from "redux";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";


const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);