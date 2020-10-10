import React, { useState, useEffect } from "react";
import Spot from "./spot";
import ErrorsList from "./errors_list";
import { fetchAllBoats } from "../util/api_utils";

export default function App() {
  const [spots, setSpots] = useState({});
  const [errors, setErrors] = useState([]);

  /*
    Initialize state with all boats from DB
  */
  function loadAllBoatsToAppState() {
    fetchAllBoats()
      .then((res) => res.json())
      .then((allBoatsJson) => setSpots(allBoatsJson))
      .catch((errs) => setErrors(errs));
  }

  useEffect(() => {
    loadAllBoatsToAppState();
  }, []);

  /*
    Prepare all spots list
  */
  const spotArray = [];

  for (let i = 1; i <= NUM_SPOTS; i++) {
    const boat = spots[i];
    spotArray.push(boat);
  }

  const spotItems = spotArray.map((boat, i) => (
    <Spot
      key={i}
      spotNum={i + 1}
      boat={boat}
      loadAllBoatsToAppState={loadAllBoatsToAppState}
    />
  ));

  /*
    Display errors for DB fetch
  */
  const errorsIndex = errors.length > 0 ? <ErrorsList errors={errors} /> : null;

  return (
    <div className="app-container">
      <div className="header">
        <h1>Marina</h1>
      </div>
      {errorsIndex}
      <div className="spots-grid">
        {spotItems}
      </div>
    </div>
  );
}
