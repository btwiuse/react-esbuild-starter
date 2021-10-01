import React from "react";
import term from './term.svg';

export function App() {
  return (
    <div>
      <header>
        <img src={term} alt="term" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          href="https://github.com/btwiuse/react-esbuild-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          btwiuse/react-esbuild-starter
        </a>
      </header>
    </div>
  );
}
