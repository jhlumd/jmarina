import React from "react";

export default function ErrorsList(props) {
  return (
    <ul className="errors-container">
      {props.errors.map((error, i) => (<li key={i}>{error}</li>))}
    </ul>
  );
}
