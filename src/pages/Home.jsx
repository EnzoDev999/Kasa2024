import React from "react";
import Banner from "../components/Banner.js"; 
import Card from "../components/Card.js"; 
import BannerImgDesktop from "../assets/home_bg_banner.png"; 
import "../sass/pages/Home.scss";
import DataProperty from "../data/apartments.json"; // Import des données des logements stockées dans un fichier JSON

export default function Home() { // Définition du composant fonctionnel Home
  document.title = "Kasa - Accueil"; // Changement du titre de la page

  return ( // Rendu de la page
    <main className="display_home"> {/* Début de la section principale de la page */}
      <Banner
        img={BannerImgDesktop}
        texte1={"Chez vous,"}
        texte2={"partout et ailleurs"}
        alt="Image Accueil"
      /> {/* Affichage de la bannière avec l'image de fond et les textes */}
      <div className="display_card"> {/* Section de la page affichant les cartes */}
        <div className="card_container">
          {DataProperty.map(property => <Card key={property.id} property={property} /> )}
        </div>
      </div>
    </main>
  );
}
