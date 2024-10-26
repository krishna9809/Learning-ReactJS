// div div div child
import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement("h1", {id: "heading" }, "Namastey");

//JSX

const jsxheading = <h1>Namestey in JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);