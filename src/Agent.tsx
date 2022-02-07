import React, { createElement as h } from "react";
import { BrowserRouter, HashRouter, Link, Route } from "react-router-dom";

interface IAgent {
  id: string;
  name: string;
  distro?: string;
  ip: string;
  os: string;
  pwd: string;
  arch: string;
  auth: boolean;
  tags: string[];
  username: string;
  hostname: string;
  connected: number;
  version: string;
  git_summary: string;
}

/*
  {
    "id": "269964b3-1c26-4edb-9169-bf561b19864a",
    "name": "mebox-10.0.0.142",
    "tags": [],
    "auth": false,
    "connected": 1644055713,
    "ip": "59.110.168.101",
    "os": "linux",
    "pwd": "/root",
    "arch": "amd64",
    "distro": "centos",
    "username": "root",
    "hostname": "mebox-10.0.0.142",
    "version": "v0.0.6",
    "git_summary": "v0.0.6"
  },
*/

function ago(s: number): string {
  let min = Math.round((Date.now() / 1000 - s) / 60);
  if (min < 60) {
    return min.toString() + " min";
  }
  if (60 <= min && min < 60 * 24) {
    return Math.round(min / 60).toString() + " hour";
  }
  return Math.round(min / 60 / 24).toString() + " day";
}

const App: React.FC<IAgent> = ({
  id,
  name,
  distro,
  ip,
  os,
  pwd,
  arch,
  auth,
  tags,
  username,
  hostname,
  connected,
  version,
  git_summary,
}) => {
  const home = `/home/${username}`;
  return (
    <div className="agent" id={id}>
      <div className={`agent-left ${auth ? "" : "no"}auth`}>
        Li
      </div>
      <div className="agent-right">
        <div className="agent-topbar">
          <span>
            <a>
              {`${username}@${hostname}`}
            </a>
          </span>
          <span>
          </span>
        </div>
        <div className="agent-midbar">
          <span>
            <a
              target="_blank"
              href={`https://k0s.op.milvzn.com/api/agent/${id}/rootfs${pwd}`}
            >
              {pwd}
            </a>
          </span>
          <span>
            <a
              target="_blank"
              href={`https://k0s.op.milvzn.com/api/agent/${id}/rootfs${home}`}
            >
              ~
            </a>
          </span>
        </div>
        <div className="agent-subbar">
          connected {ago(connected)} ago | {name} | {git_summary} |
          <a
            target="_blank"
            href={`https://www.wolframalpha.com/input/?i=${ip} ip geolocation`}
          >
            {ip}
          </a>
          <a>
            |
          </a>
          <a
            target="_blank"
            href={`https://k0s.op.milvzn.com/api/agent/${id}/`}
          >
            connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
export { IAgent };
