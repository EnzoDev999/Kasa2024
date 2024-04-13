import React, { useState } from "react"; // Importe la bibliothèque React et la fonction useState pour gérer l'état local du composant
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importe la bibliothèque FontAwesome pour utiliser des icônes
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"; // Importe des icônes de flèches de FontAwesome
import "../sass/components/Collapse.scss"; // Importe le fichier de styles CSS pour le composant

const Collapse = ({ title, content }) => {
  // Déclare le composant Collapse qui prend deux propriétés : 'title' et 'content'

  const ArrowDown = <FontAwesomeIcon icon={faChevronDown} />;
  const ArrowUp = <FontAwesomeIcon icon={faChevronUp} />;

  const [text, setText] = useState(false); //Initialise l'état local de 'text' à FALSE, qui réprésente l'état d'affichage du contenu de la section (setText qui est la fonction de modification)

  const display = () => {
    // Ici on va définir la fonction pour afficher OU masquer le contenu d'une section
    setText(!text); // Met à jour l'état local de 'text' pour basculer entre les états true (afficher le contenu) et false (masquer le contenu)
  };

  return (
    <div className="container">
      {/* Crée un conteneur pour le composant Collapse */}
      <div className="title" onClick={display}>
        {/* Crée une section qui affiche le titre et l'icône de flèche, et qui permet de déclencher l'affichage ou le masquage du contenu */}
        <h3>{title}</h3>
        <div className="collapse_icon">{text ? ArrowUp : ArrowDown}</div>
        {/* Affiche l'icône de flèche vers le haut si le contenu est affiché (état 'text' à true), ou l'icône de flèche vers le bas sinon (état 'text' à false) */}
      </div>
      <div>
        {text && (
          <div className="content animated">
            <p>{content}</p>
          </div>
        )}
        {/* Ici si text est truthy(donc true) alors notre div et son contenu sera affiché, sinon rien ne se passe */}
      </div>
    </div>
  );
};

export default Collapse;
