import React from "react";
import Rate from "./Rate";
import Tag from "./Tag";

import "../sass/components/ApartmentInfo.scss";

// Composant qui réunit les informations du logement avec le titre, la localisation, les différents tags et informations diverses (étoiles & host)

// Le composant LogementsInfo s'appuie sur les props "title", "location", "tags", "host", "rating" passées via la page Apartment
const ApartmentInfo = ({ title, location, tags, host, rating }) => {
  return (
    <div className="sections">
      <section className="ApartmentInfos">
        <h1 className="ApartmentTitle">{title}</h1>
        <h2 className="ApartmentLocation">{location}</h2>
        <div>
          <Tag tags={tags} />
        </div>
      </section>
      <section className="hostAndRatingInfos">
        <div className="host">
          <p className="hostName">{host.name}</p>
          <img className="hostPicture" src={host.picture} alt={host.name} />
        </div>
        <div className="rating">
          {/* La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée. */}
          <Rate rating={parseInt(rating)} />
        </div>
      </section>
    </div>
  );
};

export default ApartmentInfo;
