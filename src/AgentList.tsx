import React, { createElement as h } from "react";
import { BrowserRouter, HashRouter, Link, Route } from "react-router-dom";
import { useHub } from "./HubContext";
import Agent, { IAgent } from "./Agent";

export default function App() {
  const { agents } = useHub();
  return (
    <div id="agents">
      {agents.map((x: IAgent) => <Agent {...x} key={x.id} />)}
    </div>
  );
}

/*
    <div id="agents">
      <div className="agent" id="b228174d-2832-4976-94e7-4b67d8306a53">
        <div className="agent-left noauth">
          Li
        </div>
        <div className="agent-right">
          <div className="agent-topbar">
            <span>
              <a>
                ubuntu@VM-0-4-ubuntu
              </a>
            </span>
            <span>
            </span>
          </div>
          <div className="agent-midbar">
            <span>
              <a
                target="_blank"
                href="https://k0s.op.milvzn.com/api/agent/b228174d-2832-4976-94e7-4b67d8306a53/rootfs/home/ubuntu/nftmart-auction-redeem-bot"
              >
                /home/ubuntu/nftmart-auction-redeem-bot
              </a>
            </span>
            <span>
              <a
                target="_blank"
                href="https://k0s.op.milvzn.com/api/agent/b228174d-2832-4976-94e7-4b67d8306a53/rootfs/home/ubuntu"
              >
                ~
              </a>
            </span>
          </div>
          <div className="agent-subbar">
            connected 29 min ago | ecstatic_ellis |
            release-51-20210921-54-g5e07681c |
            <a
              target="_blank"
              href="https://www.wolframalpha.com/input/?i=43.129.65.252 ip geolocation"
            >
              43.129.65.252
            </a>
            <a>
              |
            </a>
            <a
              target="_blank"
              href="https://k0s.op.milvzn.com/api/agent/b228174d-2832-4976-94e7-4b67d8306a53/"
            >
              connect
            </a>
          </div>
        </div>
      </div>
      <div className="agent" id="75933c67-c658-42f3-85e3-767620ff638a">
        <div className="agent-left noauth">
          Li
        </div>
        <div className="agent-right">
          <div className="agent-topbar">
            <span>
              <a>
                ubuntu@VM-0-2-ubuntu
              </a>
            </span>
            <span>
            </span>
          </div>
          <div className="agent-midbar">
            <span>
              <a
                target="_blank"
                href="https://k0s.op.milvzn.com/api/agent/75933c67-c658-42f3-85e3-767620ff638a/rootfs/home/ubuntu/nft/packages/node"
              >
                /home/ubuntu/nft/packages/node
              </a>
            </span>
            <span>
              <a
                target="_blank"
                href="https://k0s.op.milvzn.com/api/agent/75933c67-c658-42f3-85e3-767620ff638a/rootfs/home/ubuntu"
              >
                ~
              </a>
            </span>
          </div>
          <div className="agent-subbar">
            connected 29 min ago | jovial_hodgkin |
            release-51-20210921-54-g5e07681c |
            <a
              target="_blank"
              href="https://www.wolframalpha.com/input/?i=43.129.72.231 ip geolocation"
            >
              43.129.72.231
            </a>
            <a>
              |
            </a>
            <a
              target="_blank"
              href="https://k0s.op.milvzn.com/api/agent/75933c67-c658-42f3-85e3-767620ff638a/"
            >
              connect
            </a>
          </div>
        </div>
      </div>
      <div className="agent" id="54018a9d-5297-401e-b796-11ded64df165">
        <div className="agent-left auth">
          Li
        </div>
        <div className="agent-right">
          <div className="agent-topbar">
            <span>
              <a>
                aaron@blackarcher
              </a>
            </span>
            <span>
              <a className="tag">
                ThinkPad X220
              </a>
            </span>
          </div>
          <div className="agent-midbar">
            <span>
              <a
                target="_blank"
                href="https://k0s.op.milvzn.com/api/agent/54018a9d-5297-401e-b796-11ded64df165/rootfs/home/aaron"
              >
                /home/aaron
              </a>
            </span>
            <span>
              <a
                target="_blank"
                href="https://k0s.op.milvzn.com/api/agent/54018a9d-5297-401e-b796-11ded64df165/rootfs/home/aaron"
              >
                ~
              </a>
            </span>
          </div>
          <div className="agent-subbar">
            connected 24 hour ago | blackarcher | v0.0.14-1-g1513d874-dirty |
            <a
              target="_blank"
              href="https://www.wolframalpha.com/input/?i=111.199.80.67 ip geolocation"
            >
              111.199.80.67
            </a>
            <a>
              |
            </a>
            <a
              target="_blank"
              href="https://k0s.op.milvzn.com/api/agent/54018a9d-5297-401e-b796-11ded64df165/"
            >
              connect
            </a>
          </div>
        </div>
      </div>
      <div className="agent" id="4f81e158-2e87-4234-b449-c1e038a0063c">
        <div className="agent-left noauth">
          Ce
        </div>
        <div className="agent-right">
          <div className="agent-topbar">
            <span>
              <a>
                root@tsinglawpri-172.17.0.105
              </a>
            </span>
            <span>
            </span>
          </div>
          <div className="agent-midbar">
            <span>
              <a
                target="_blank"
                href="https://k0s.op.milvzn.com/api/agent/4f81e158-2e87-4234-b449-c1e038a0063c/rootfs/root"
              >
                /root
              </a>
            </span>
            <span>
              <a
                target="_blank"
                href="https://k0s.op.milvzn.com/api/agent/4f81e158-2e87-4234-b449-c1e038a0063c/rootfs/home/root"
              >
                ~
              </a>
            </span>
          </div>
          <div className="agent-subbar">
            connected 24 hour ago | tsinglawpri-172.17.0.105 | v0.0.6 |
            <a
              target="_blank"
              href="https://www.wolframalpha.com/input/?i=101.200.215.106 ip geolocation"
            >
              101.200.215.106
            </a>
            <a>
              |
            </a>
            <a
              target="_blank"
              href="https://k0s.op.milvzn.com/api/agent/4f81e158-2e87-4234-b449-c1e038a0063c/"
            >
              connect
            </a>
          </div>
        </div>
      </div>
      <div className="agent" id="c88b8a75-c7fc-4c0b-93b1-d5a004c2711a">
        <div className="agent-left noauth">
          Ce
        </div>
        <div className="agent-right">
          <div className="agent-topbar">
            <span>
              <a>
                root@tsinglawpri-172.17.0.104
              </a>
            </span>
            <span>
            </span>
          </div>
          <div className="agent-midbar">
            <span>
              <a
                target="_blank"
                href="https://k0s.op.milvzn.com/api/agent/c88b8a75-c7fc-4c0b-93b1-d5a004c2711a/rootfs/root"
              >
                /root
              </a>
            </span>
            <span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
  */
