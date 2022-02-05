import React, { createElement as h } from "react";

/* changes:

<br> -> <br/>
*/

export default function App() {
  return (
    <div className="doc" id="how-it-works">
      <h1>How it works</h1>
      <br />
      <p>
        In a typical remote terminal session, there are three parties involved:
        agent, hub and client.
      </p>
      <br />
      <p>
        There are supposed to be two implementations for client: Browser Client
        and Cmdline Client. However, at the time of writing only Browser Client
        is implemented.
      </p>
      <h2>Simplified Architecture</h2>
      <pre>
        TTY Session ----- Node Agent ---\ /--- Browser Client / \ / FTP Session
        ---/ Node Agent ----- [Hub] ----- Browser Client / \ TTY Session -----
        Node Agent ---/ \--- Cmdline Client
      </pre>
      <p>
        On start, agent connects to hub and adds itself to the hub's agent list,
        at the same time it spawns a gRPC server in a separate goroutine and
        starts listening on 'connect' requests from hub. When user initiates the
        'connect' request through client, a new websocket connection will be
        established between client and hub, then hub forwards the request to
        agent, creating a gRPC streaming tunnel between hub and agent. From this
        point on, hub starts forwarding data back and forth over the tunnel
        from/to client to/from agent.
      </p>
      <h2>Sequence Diagram</h2>
      <div>
        <img alt="sequence diagram" src="./sequence-diagram.svg" />
      </div>
    </div>
  );
}
