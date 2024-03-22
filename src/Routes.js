import { Routes, Route } from "react-router-dom";
import React from "react";
import Appartements from "./pages/Appartements";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// La fonction `App` qui va afficher le code HTML/CSS/JS de chacune de nos pages
function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route vers la page d'accueil */}
        <Route path="/" element={<Home />} />

        {/*Route vers la page de détail de chaque appartement*/}
        <Route path="/appartements/:id" element={<Appartements />} />

        {/*Route vers la page "A propos"*/}
        <Route path="/about" element={<About />} />

        {/*Route vers la page d'erreur 404*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
