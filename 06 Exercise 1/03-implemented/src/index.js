import React from "react";
import ReactDOM from "react-dom";
import { Router } from "./router";
import { UserProvider } from "./user.context";
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      <UserProvider>
        <Router />
      </UserProvider>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
