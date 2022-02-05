import React, { createElement as h } from "react";
import { BrowserRouter, HashRouter, Link, Route } from "react-router-dom";

export default function App() {
  return (
    <nav className="doc" id="topbar">
      <Link to="/">Home</Link> |
      <Link to="/meanings-of-colors">Meanings of colors</Link> |
      <Link to="/stats">Stats</Link>
    </nav>
  );
}
