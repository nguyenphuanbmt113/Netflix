import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

import { CollectionContextProvider } from "./context/CollectionContext";

ReactDOM.render(
  <BrowserRouter>
    <CollectionContextProvider>
      <App />
    </CollectionContextProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
