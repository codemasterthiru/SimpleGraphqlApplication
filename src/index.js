import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Graphql } from "./Graphql";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Graphql />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
