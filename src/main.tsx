import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* Import CSS/SCSS */
import "./styles/Home.scss";
import "./styles/Authentication.scss";
import "./styles/Branch.scss";
import "./styles/Users.scss";

const Render = () => {
  const rootElement = document.getElementById("root");

  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
};
Render();
