import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel"; 
import ApartmentData from "../data/apartments.json"; 
import Collapse from "../components/Collapse"; 
import ApartmentsInfo from "../components/ApartmentInfo"; 
import "../sass/pages/Apartment.scss"; 

const Apartment = () => {
  const urlParams = useParams(); // Récupère les paramètres de l'URL, dans ce cas, l'ID du logement
  const navigate = useNavigate(); // Fonction de navigation pour changer d'URL

  useEffect(() => {
    // Effectue une action lorsque l'ID du logement dans l'URL change
    const matchingApartment = ApartmentData.find(apartment => urlParams.id === apartment.id);
    if (!matchingApartment) {
      navigate("*"); // Si aucun logement ne correspond à l'ID dans l'URL, redirige vers la page d'erreur (*)
    }
  }, [urlParams.id, navigate]);

  return (
    <>
      {ApartmentData.filter(apartment => apartment.id === urlParams.id).map(apartment => {
        const { title, location, tags, host, rating, description, equipments } = apartment;

        return (
          <main key={title}>
            <div className="apartment_display">
            <Carousel pictures={apartment.pictures} /> {/* Affiche le carousel avec les images du logement */}
            {/* Affiche les informations sur le logement, telles que le titre, la localisation, les tags, le nom de l'hôte et les avis */}
            <ApartmentsInfo
              title={title}
              location={location}
              tags={tags}
              host={host}
              rating={rating}
            />
            <section className="collapses_Container">
              <div className="collapse ">
                <Collapse title="Description" content={description} /> {/* Affiche la description du logement avec une espèce d'affichage déroulant */}
              </div>
              <div className="collapse equipement">
                <Collapse // Affiche les équipements du logement avec un affichage déroulant
                  title="Équipements"
                  content={equipments.map((equipment, index) => (
                    <span className="apartment_equipement" key={index}>
                      {equipment}
                    </span>
                  ))}
                /> 
              </div>
            </section>
            </div>
          </main>
        );
      })}
    </>
  );
};

export default Apartment;
