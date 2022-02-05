import React, { createElement as h } from "react";

/*
changes:

<div className="doc" id="story" style="display: block;"> remove style

<hr> -> <hr/>

<img> -> <img/>

*/

export default function App() {
  return (
    <div className="doc" id="story">
      <h1>k0s - aggregate your personal infrastructure</h1>

      <hr />

      <h2>What the ...?</h2>
      <p>
        k0s is to k8s what JavaScript is to Java. I'm sorry to disappoint you
        but it is NOT "Yet Another Kubernetes Distro".
      </p>
      <div>
        <img alt="cover" src="cover.png" id="cover" />
      </div>
      <p>
        It is a tool codenamed "conntroll", initially developed to control my
        ThinkPads at home from work, which helped a lot until recently the
        company I worked for, among many others, went out of business during the
        trade war. Consequently I was made out of work, which in turn made this
        tool less useful to me than to other people. Meanwhile I had several
        spare domain names at my disposal. <a href="#">k0s.io</a>{" "}
        was one of them. I registered it around the time Rancher announced their
        lightweight k8s distribution -{" "}
        <a target="_blank" href="https://k3s.io">k3s</a>, a very cool product.
        I've always been wanting to build something similar. That's the brief
        background why I decide to rebrand and publish it.
      </p>

      <hr />

      <h2>What does it do?</h2>
      <p>Common use cases include:</p>
      <ul>
        <li>control home computer from work</li>
        <li>access terminal and files behind NAT</li>
        <li>stream container logs to browser in real time</li>
      </ul>
      I plan to expand the feature set a little bit more and here are my goals:
      <ul>
        <li>
          collect node metrics (DONE, for details click{" "}
          <a target="_blank" href="./grafana/">#Metrics</a>)
        </li>
        <li>
          convert this web page into a chrome extension (WIP, download preview
          {" "}
          <a target="_blank" href="./chrome-bundle.zip">here</a>)
        </li>
        <li>
          implement bazel's{" "}
          <a
            target="_blank"
            href="https://github.com/bazelbuild/remote-apis/blob/master/build/bazel/remote/execution/v2/remote_execution.proto"
          >
            Remote Cache / Remote Execution API
          </a>
        </li>
        <li>node-to-node communication</li>
      </ul>
      <p>
        Please note that the development of k0s is still in an early stage, some
        of the features may be incomplete or totally disfunctional.
        Misconfiguration of the tool may lead to your personal data being leaked
        or your system being compromised. Use it at your own risk.
      </p>

      <hr />

      <h2>How do I use it?</h2>
      <p>
        See the <a id="a-story-examples" href="#">#Examples</a> section
      </p>
    </div>
  );
}
