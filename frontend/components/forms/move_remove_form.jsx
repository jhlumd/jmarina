import React, { useState } from "react";
import RemoveForm from "./remove_form";
import ErrorsList from "../errors_list";
import { updateBoat } from "../../util/api_utils";

export default function MoveRemoveForm(props) {
  /*
    Handle toggleable form
  */
  const [opened, setOpened] = useState(false);

  function openForm() {
    setOpened(true);
  }

  function closeForm() {
    setOpened(false);
  }

  /*
    Display errors
  */
  const [errors, setErrors] = useState([]);

  const errorsIndex = errors.length > 0 ? <ErrorsList errors={errors} /> : null;

  /*
    Form/submit handling
  */
  const [destSpotNum, setDestSpotNum] = useState(undefined);

  const { loadAllBoatsToAppState, spotNum, boatId } = props;

  const possibleSpots = [];

  for (let i = 1; i <= NUM_SPOTS; i++) {
    if (i !== spotNum) possibleSpots.push(i);
  }

  function updateDestSpotNum(e) {
    setDestSpotNum(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Make api call to DB
    updateBoat(boatId, destSpotNum)
      .then((res) => {
        // Match frontend app state if successful create
        if (res.ok) {
          // or res.status === 200
          setDestSpotNum(undefined);
          closeForm();
          loadAllBoatsToAppState();
        }
      })
      .catch((errs) => console.error(errs));
  }

  if (opened) {
    return (
      <form className="toggle-form" onSubmit={handleSubmit}>
        {errorsIndex}

        <label htmlFor="destinationSpot">Move to Spot #:</label>
        <select
          id="destinationSpot"
          name="destinationSpot"
          defaultValue
          value={destSpotNum}
          onChange={updateDestSpotNum}
        >
          <option disabled value>#</option>
          {possibleSpots.map((spotNum, i) => {
            return (
              <option value={spotNum} key={i}>
                {spotNum}
              </option>
            );
          })}
        </select>

        <div>
          <input className="blue" type="submit" />
          <button onClick={closeForm}>Cancel</button>
        </div>
      </form>
    );
  } else {
    return (
      <div className="move-remove">
        <RemoveForm
          loadAllBoatsToAppState={loadAllBoatsToAppState}
          boatId={boatId}
        />
        <button onClick={openForm}>Move</button>
      </div>
    );
  }
}
