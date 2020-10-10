import React from "react";

export default function Boat(props) {
  const { name, length, color } = props;

  let height = "50px";
  if (length < 50) {
    height = `${length * 0.75}px`;
  }

  const boatStyle = {
    width: `${length}px`,
    backgroundColor: color,
    height,
    borderRadius: "1.25rem",
    boxShadow: "0.5rem 0.5rem 1.5rem royalblue",
    marginTop: "8px",
  };

  return (
    <div className="boat-container">
      <p>
        {name} ({length} ft)
      </p>
      <div style={boatStyle}></div>
    </div>
  );
}
