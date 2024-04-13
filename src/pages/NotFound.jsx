import React from "react";
import { Link } from "react-router-dom";
import "../sass/pages/NotFound.scss";

// Ici on a le composant Error 404

// A chaque url mal marqué / inexistante, on renvoi à cette page

const Error = () => {
    document.title = "Kasa - Page introuvable";
    return(
        <main>
            <div className="error_container">
                <h1>404</h1>
                    <h2>Oups! La page que vous demandez n'existe pas.</h2>
                    {/* Ici on utilise Link pour afficher un lien de retour vers la page d'accueil */}
                    <Link to="/">
                        <p className="homeLink">Retourner sur la page d'accueil</p>
                    </Link>
            </div>
        </main>
    );
};

export default Error;