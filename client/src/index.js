import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./context/context";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
