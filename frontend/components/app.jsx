import React, { useState } from "react";
import Spot from "./spot";

export default function App() {
  // Marina spots state:
  const NUM_SPOTS = 20;
  const [spots, setSpots] = useState({});

  const spotArray = [];
  for (let i = 1; i <= NUM_SPOTS; i++) {
    const boat = spots[i];
  }

  const spotItems = spotArray.map((boat, i) => <Spot key={i} boat={boat} />);

  return (
    <div>
      <h1>Marina</h1>
      {spotItems}
    </div>
  );
}
