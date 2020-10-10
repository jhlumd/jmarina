import React from "react";
import Boat from "./boat";

export default function Spot(props) {
  const { boat } = props;
  let boatItem = null;
  if (boat) {
    const { name, length, color } = boat;
    boatItem = <Boat name={name} length={length} color={color} />;
  }

  return (
    <div>
      <p>spot here</p>
      {boatItem}
    </div>
  );
}
