import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./reset.css";
import "./style.css";
import { HubContextProvider } from "./HubContext";

ReactDOM.render(
  <React.StrictMode>
    <HubContextProvider>
      <App />
    </HubContextProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
