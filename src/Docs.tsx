import React, { createElement as h } from "react";
import {
  BrowserRouter,
  HashRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import About from "./docs/About";
import Download from "./docs/Download";
import Examples from "./docs/Examples";
import HowItWorks from "./docs/HowItWorks";
import MeaningsOfColors from "./docs/MeaningsOfColors";
import Stats from "./docs/Stats";
import Story from "./docs/Story";
//import Topbar from "./docs/Topbar";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div id="docs">
      <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" />
            <Route path="/stats" element={<Stats />} />
            <Route path="/meanings-of-colors" element={<MeaningsOfColors />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

/*
      <Story />
      <Examples />
      <Download />
      <Examples />
      <HowItWorks />
      <MeaningsOfColors />
      <Stats />
      <About />
          <Route path="/story" component={Story} />
          <Route path="/examples" component={Examples} />
          <Route path="/download" component={Download} />
          <Route path="/examples" component={Examples} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/about" component={About} />
*/
