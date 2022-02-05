import React, { createElement as h } from "react";

export default function App() {
  return (
    <div className="doc" id="meaning-of-colors">
      <h1>Meanings of colors</h1>
      <fieldset>
        <legend>Legend</legend>
        <div className="foobar">
          <div className="foo secret"></div>
          <label className="bar" htmlFor="mothman">#5EC2E7 Basic Auth</label>
        </div>
        <div className="foobar">
          <div className="foo badass"></div>
          <label className="bar" htmlFor="sasquatch">#BADA55 No Auth</label>
        </div>
      </fieldset>
    </div>
  );
}
