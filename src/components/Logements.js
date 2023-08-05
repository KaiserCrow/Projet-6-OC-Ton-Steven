import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Logements = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/logements.json").then((res) => setData(res.data.logements));
  }, []);

  return (
    <div className="logements-container">
      <div className="logements">
        {data.map((logement, id) => (
          <Card key={id} logement={logement} />
        ))}
      </div>
    </div>
  );
};

export default Logements;
