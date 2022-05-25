import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "./App";
import "./reset.css";
import "./style.css";
import { HubContextProvider } from "./HubContext";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <HubContextProvider>
      <App />
    </HubContextProvider>
  </React.StrictMode>
)
