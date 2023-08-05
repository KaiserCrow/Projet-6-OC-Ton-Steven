import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

const Fiche = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/logements.json")
      .then((res) => res.json())
      .then((data) => {
        const foundLogement = data.logements.find(
          (logement) => logement.id === id
        );
        if (!foundLogement) {
          navigate("/error");
        } else {
          setLogement(foundLogement);
        }
      });
  }, [id, navigate]);

  return logement ? (
    <div className="fiche-container">
      <div className="carrousel-container">
        <Carrousel images={logement.pictures} />
      </div>
      <div className="firstpart-container">
        <div className="fichetitle-container">
          <h2>{logement.title}</h2>
          <h3>{logement.location}</h3>
        </div>

        <div className="name-container">
          <p>{logement.host.name}</p>
          <div className="circle-container">
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
        </div>
      </div>
      <div className="secondpart-container">
        <div className="tags-container">
          {logement.tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>

        <div className="rating-container">
          <Rating rating={logement.rating} />
          <div className="name-container-bis">
            <p>{logement.host.name}</p>
            <div className="circle-container-bis">
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>
        </div>
      </div>
      <div className="thirdpart-container">
        <Collapse id="description" title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse id="equipments" title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  ) : (
    <div className="loading">
      <p>Chargement...</p>
    </div>
  );
};

export default Fiche;
