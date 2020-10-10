import React from "react";
import { deleteBoat } from "../../util/api_utils";

export default function RemoveForm(props) {
  const { loadAllBoatsToAppState, boatId } = props;

  function handleRemoveBoat(e) {
    e.preventDefault();

    // Make api call to DB
    deleteBoat(boatId)
      .then((res) => {
        // Match frontend app state if successful destroy
        if (res.ok) loadAllBoatsToAppState(); // or res.status === 200
      })
      .catch((err) => console.error(err));
  }

  return (
    <button className="orange" onClick={handleRemoveBoat}>Destroy</button>
  );
}
