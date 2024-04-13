import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.js";

// Créer une racine pour l'arbre React en utilisant ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendre l'application React à l'aide de la fonction root.render()
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Layout>
        <Routes />
      </Layout>
    </React.StrictMode>
  </BrowserRouter>
);
