import React from "react";
import { Link } from "react-router-dom";

const Card = ({ logement }) => {
  return (
    <Link to={`/logement/${logement.id}`}>
      <li className="card">
        <img src={logement.cover} alt={logement.title} />
        <div className="infos">
          <h2>{logement.title}</h2>
        </div>
      </li>
    </Link>
  );
};

export default Card;
