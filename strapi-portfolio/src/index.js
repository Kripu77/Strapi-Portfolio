import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./css/style.css"
import { hydrate, render } from "react-dom";



const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
