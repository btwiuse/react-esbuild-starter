import React, { useContext, useReducer } from "react";
import { IAgent } from "./Agent";

const parsedQuery = new URLSearchParams(window.location.search);

const CONFIG = {
  HUB: "wss://hub.k0s.io"
};

const autoPrefix = (url: string) => {
  if (url.startsWith("ws://") || url.startsWith("wss://")) return url;
  var prefix = (window.location.protocol == "https:") ? "wss://" : "ws://";
  return prefix + url;
};
const connectedHub = autoPrefix(parsedQuery.get("hub") || CONFIG.HUB);
console.log(`Connected socket: ${connectedHub}`);

///
// Initial state for `useReducer`

interface Props {
  children: React.ReactNode;
}

interface AppState {
  hub: string;
  ws: WebSocket | null;
  wsError: any;
  wsState: any;
  agents: IAgent[];
}

const INIT_STATE: AppState = {
  hub: connectedHub,
  ws: null,
  wsError: null,
  wsState: null,
  agents: [],
};

///
// Reducer function for `useReducer`

const reducer = (state: AppState, action: any) => {
  switch (action.type) {
    case "INIT":
      return { ...state, wsState: "INIT" };

    case "OPEN":
      return { ...state, ws: action.payload, wsState: "OPEN" };

    case "MESSAGE": {
      let parsedAgents = JSON.parse(action.payload.data);
      console.log(parsedAgents);
      return { ...state, agents: parsedAgents };
    }

    case "CLOSE":
      return { ...state, wsState: "CLOSE" };

    case "ERROR":
      return { ...state, wsState: "ERROR", wsError: action.payload };

    default:
      throw new Error(`Unknown type: ${action.type}`);
  }
};

///
// Connecting to the Hub watch api

const connect = (state: AppState, dispatch: any) => {
  const { wsState, hub } = state;
  // We only want this function to be performed once
  if (wsState) return;

  dispatch({ type: "INIT" });

  const _ws = new WebSocket(`${hub}/api/agents/watch`);
  _ws.binaryType = "blob";

  _ws.addEventListener("open", function (event) {
    dispatch({ type: "OPEN", payload: _ws });
  });

  _ws.addEventListener("message", function (event) {
    dispatch({ type: "MESSAGE", payload: event });
  });

  _ws.addEventListener("close", function (event) {
    dispatch({ type: "CLOSE", payload: event });
  });

  _ws.addEventListener("error", function (event) {
    dispatch({ type: "ERROR", payload: event });
  });

  // Set listeners for disconnection and reconnection event.
  /*
ws.readyState = {
  ws.CONNECTING = 0
  ws.OPEN = 1
  ws.CLOSING = 2
  ws.CLOSED = 3
}
  */
};

const HubContext = React.createContext(INIT_STATE);

const HubContextProvider: React.FC<Props> = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  connect(state, dispatch);

  return (
    <HubContext.Provider value={state}>
      {props.children}
    </HubContext.Provider>
  );
};

const useHub = () => ({ ...useContext(HubContext) });

export { HubContextProvider, useHub };
