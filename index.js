import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Movie from "./Movie";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Movie />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
