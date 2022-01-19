import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Use React 18 root
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);

// Use before React 18 root
// const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement);
