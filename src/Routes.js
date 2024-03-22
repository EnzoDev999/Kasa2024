import logo from "./logo.svg";
import "./App.css";
import React from "react";
import appartement from "./data/appartements.json";

function App() {
  console.log(appartement); // Affiche les données dans la console pour vérification
  return (
    <div>
      <h1>Appartements Kasa</h1>
      {/* Tu peux boucler sur les données ici pour les afficher */}
    </div>
  );
}

export default App;
