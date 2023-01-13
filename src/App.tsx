import React, { useEffect } from "react";
import useSWR, { mutate } from "swr";
import term from "./term.svg";
import "./App.css";
import DataTable from "react-data-table-component";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface Row {
  host: string;
  created_at: string;
  updated_at?: string;
}

function Profile() {
  let host = window.location.host.split(".").slice(1).join(".");
  console.log(host);
  let api = `//${host}/`;
  if (
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "localhost"
  ) {
    api = "//ufo.k0s.io/";
  }

  const { data, error, isLoading } = useSWR(api, fetcher);

  useEffect(() => {
    setInterval(() => {
      mutate(api);
      console.log(new Date(), "refreshing...");
    }, 5000);
  }, []);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  // console.table(data.map(x=>[x.host,x.created_at]));
  console.table(data.map((x: Row) => {
    return {
      host: "https://" + x.host,
      createdAt: x.created_at,
      updatedAt: new Date(),
    };
  }));
  const columns = [
    {
      name: "host",
      selector: (x: Row) => x.host,
      cell: (x: Row) => <a href={"https://" + x.host}>{x.host}</a>,
      sortable: true,
    },
    {
      name: "created at",
      selector: (x: Row) => x.created_at,
      cell: (x: Row) => <p>{(new Date(x.created_at)).toLocaleString()}</p>,
      sortable: true,
    },
    {
      name: "updated at",
      selector: (x: Row) => x.updated_at!,
      cell: (x: Row) => <p>{(new Date(x.updated_at!)).toLocaleString()}</p>,
      sortable: true,
    },
  ];
  // console.table(data);
  return (data.length
    ? (
      <DataTable
        columns={columns}
        data={data.sort((x: Row, y: Row) =>
          x.created_at > y.created_at ? -1 : 1
        ).map((x: Row) => {
          return {
            ...x,
            updated_at: new Date(),
          };
        })}
      />
    )
    : null);
}

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
      </header>
    </div>
  );
}
