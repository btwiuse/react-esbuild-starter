import React, { createElement as h } from "react";

export default function App() {
  return (
    <div className="doc" id="examples">
      <h1>Examples</h1>
      <br />
      <p>
        Running the agent directly on your host environment is considered
        insecure, unless you know what you are doing. Here I will only provide
        examples of running agent in official docker container.
      </p>

      <h2>Hello world</h2>
      <pre>
        $ docker run btwiuse/k0s:alpine -tags hello-world
      </pre>
      <p>
        Wait a second and your container will appear at the top of the agent
        list below. Click connect to enter your container's shell.
      </p>

      <h2>Read-only mode</h2>
      <p>
        If you want to block input and make the terminal read-only, add the -ro
        flag:
      </p>
      <pre>
        $ docker run btwiuse/k0s:arch -ro -cmd htop -tags i-am-read-only
      </pre>

      <h2>Running custom command</h2>
      <p>
        You may have guessed the -cmd flag can be used to specify the command to
        execute when you enter the terminal. For example, we can start a new
        agent from the parent agent:
      </p>
      <pre>
        $ docker run btwiuse/k0s:arch -tags read-only,parent -ro -cmd 'agent
        -tags read-write,child -cmd bash'
      </pre>
      <p>
        This way, a child is created each time you connect to the parent
        terminal. When you kill the parent, all children will disconnect too.
      </p>

      <h2>Expose working directory</h2>
      <p>
        By default, agent exposes the current working directory. To change this,
        simply start agent in a different directory:
      </p>
      <pre>
        $ docker run -w /my/working/directory btwiuse/k0s:arch -tags
        custom-working-directory
      </pre>
      <p>
        Current implementation always allows access to files outside the working
        directory. This behavior may change in the future.
      </p>
    </div>
  );
}
