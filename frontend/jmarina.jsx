import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

// Note: Considered using Redux even for this simple app because it makes
// modularizing components easier, but ultimatedly decided it was unnecessary
// with an app with only one view component.

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
