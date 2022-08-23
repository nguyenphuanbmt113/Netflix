import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

import { CollectionContextProvider } from "./context/CollectionContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CollectionContextProvider>
        <App />
      </CollectionContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
