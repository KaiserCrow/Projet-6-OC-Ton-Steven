import React from "react";
import AboutBanner from "../components/AboutBanner";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <div className="about-container">
      <AboutBanner />
      <div className="liste-about">
        <div className="about-collapse">
          <Collapse id="fiabilite" title="Fiabilité">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </Collapse>
        </div>
        <div className="about-collapse">
          <Collapse id="respect" title="Respect">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </Collapse>
        </div>

        <div className="about-collapse">
          <Collapse id="service" title="Service">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </Collapse>
        </div>

        <div className="about-collapse">
          <Collapse id="securite" title="Sécurité">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default About;
