import React from "react";

export default function Boat(props) {
  const { name, length, color } = props;

  return (
    <div className="boat-container">
      <p>Im a BOAT!</p>
      <p>{name}</p>
      <p>{length}</p>
      <p>{color}</p>
    </div>
  );
}
