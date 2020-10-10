import React from "react";
import Boat from "./boat";

export default function Spot(props) {
  let boatItem = null;
  const { boat } = props;

  if (boat) {
    const { name, length, color } = boat;
    boatItem = <Boat name={name} length={length} color={color} />;
  }

  return (
    <div className="spot-container">
      <p>spot num: {props.spotNum}</p>
      {boatItem}
    </div>
  );
}
