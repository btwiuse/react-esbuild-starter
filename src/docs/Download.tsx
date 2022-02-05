import React, { createElement as h } from "react";

/*changes:

uncomment        <!--<p>find below a container named download@conntroll</p>-->
*/

export default function App() {
  return (
    <div className="doc" id="download">
      <h1>Download / Build and Install</h1>
      <p>find below a container named download@conntroll</p>
      <h2>Binary Releases</h2>
      <p>
        Manually download latest binary from the{" "}
        <a href="https://github.com/btwiuse/k0s/releases/tag/latest">
          GitHub release page
        </a>, place it in your PATH, or pipe the install script to your shell.
      </p>
      <p>With bash:</p>
      <pre>$ curl -sL https://get.k0s.io/install.sh | sh</pre>
      <p>With PowerShell:</p>
      <pre>$ iwr -useb https://get.k0s.io/install.ps1 | iex</pre>

      <h2>Install from source code</h2>
      <pre>
        $ git clone https://github.com/btwiuse/k0s && cd k0s $ make $ sudo make
        install
      </pre>
      <p>or install through go-get:</p>
      <pre>$ go get -u k0s.io/k0s</pre>

      <h2>Docker</h2>
      <p>Alternatively you can pull the latest docker image via:</p>
      <pre>$ docker run btwiuse/k0s</pre>
      <p>There's a list of distro flavors for you to choose from:</p>
      <pre>
        $ docker run btwiuse/k0s:arch $ docker run btwiuse/k0s:ubuntu $ docker
        run btwiuse/k0s:alpine $ docker run btwiuse/k0s:gentoo $ docker run
        btwiuse/k0s:fedora $ docker run btwiuse/k0s:debian
      </pre>
      <p>Personally I prefer arch - I use arch btw.</p>
    </div>
  );
}
