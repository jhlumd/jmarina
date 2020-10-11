import React, { useState, useEffect } from "react";
import Spot from "./spot";
import ErrorsList from "./errors_list";
import { fetchAllBoats } from "../util/api_utils";

export default function App() {
  const NUM_SPOTS = 20;
  const [spots, setSpots] = useState({});
  const [errors, setErrors] = useState([]);

  /*
    Initialize state with all boats from DB
  */
  function loadAllBoatsToState() {
    fetchAllBoats()
      .then((res) => res.json())
      .then((allBoatsJson) => setSpots(allBoatsJson))
      .catch((errs) => setErrors(errs));
  }

  useEffect(() => {
    loadAllBoatsToState();
  }, []);

  /*
    Handle adding, moving, and removing a boat
  */

  function addNewBoat() {

  }

  function moveBoat() {

  }

  function removeBoat() {

  }

  /*
    Prepare all spots index view
  */
  const spotArray = [];

  for (let i = 1; i <= NUM_SPOTS; i++) {
    const boat = spots[i];
    spotArray.push(boat);
  }

  const spotItems = spotArray.map((boat, i) => (
    <Spot
      key={i} spotNum={i + 1} boat={boat}
      addNewBoat={addNewBoat}
      moveBoat={moveBoat}
      removeBoat={removeBoat}
    />
  ));

  /*
    Display errors
  */
  const errorsIndex = errors.length > 0 ? <ErrorsList errors={errors} /> : null;

  return (
    <div className="app-container">
      <h1>Marina</h1>
      {errorsIndex}
      {spotItems}
    </div>
  );
}
