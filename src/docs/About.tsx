import React, { createElement as h } from "react";

export default function App() {
  return (
    <div className="doc" id="about">
      <h1>About</h1>
      <p>This site is 100% handcrafted.</p>
      <p>This page has 0 npm package dependency.</p>

      <h2>Source codes</h2>
      <p>Frontend (aka Web Client):</p>
      <p className="indent">
        Repo:{" "}
        <a target="_blank" href="https://gitlab.com/k0s/k0s.io">
          https://gitlab.com/k0s/k0s.io
        </a>
      </p>
      <p className="indent">
        Commit: <a id="client-commit" target="_blank" href="#">nil</a>
      </p>
      <p className="indent">
        Build Date: <a id="client-build-date" target="_blank">nil</a>
      </p>
      <p>Backend (aka Hub):</p>
      <p className="indent">
        Repo:{" "}
        <a target="_blank" href="https://github.com/btwiuse/k0s">
          https://github.com/btwiuse/conntroll
        </a>
      </p>
      <p className="indent">
        Commit: <a id="hub-commit" target="_blank" href="#">nil</a>
      </p>

      <h2>Inspired by</h2>
      <ul>
        <li>
          <a target="_blank" href="https://portainer.io">portainer</a>
        </li>
        <li>
          <a target="_blank" href="https://buildkite.com">buildkite</a>
        </li>
      </ul>

      <h2>Contact</h2>
      <p>Email: navigaid@gmail.com</p>
      <p>Wechat: navigaid</p>
    </div>
  );
}
