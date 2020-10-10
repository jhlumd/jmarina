import React, { useState } from "react";
import Spot from "./spot";

export default function App() {
  // Marina spots state:
  const NUM_SPOTS = 20;
  const [spots, setSpots] = useState({
    3: { name: "Serenity", length: 55, color: "red" },
    5: { name: "Freedom", length: 24, color: "orange" },
    6: { name: "Carpe Diem", length: 106, color: "yellow" },
    8: { name: "Invictus", length: 216, color: "green" },
    11: { name: "My Way", length: 132, color: "blue" },
    13: { name: "Andiamo", length: 78, color: "navy" },
    19: { name: "Destiny", length: 93, color: "purple" },
  });

  const spotArray = [];
  for (let i = 1; i <= NUM_SPOTS; i++) {
    const boat = spots[i];
    spotArray.push(boat);
  }

  const spotItems = spotArray.map((boat, i) => (
    <Spot key={i} spotNum={i + 1} boat={boat} />
  ));

  return (
    <div className="app-container">
      <h1>Marina</h1>
      {spotItems}
    </div>
  );
}
