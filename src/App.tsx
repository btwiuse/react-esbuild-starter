import React from "react";
import Docs from "./Docs";
import AgentList from "./AgentList";

export default function App() {
  return (
    <div id="main">
      <div id="controller">
        <input id="api" defaultValue="https://libredot.com" />
        <button id="list">List</button>
        <button id="watch">Watch</button>
      </div>
      <div id="view">
        <Docs />
        <AgentList />
        {/*<div id="agents"></div>*/}
      </div>
    </div>
  );
}

export { App };

/*
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-137403717-1');
  </script>
*/
