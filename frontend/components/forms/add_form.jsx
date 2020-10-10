import React, { useState } from "react";
import ErrorsList from "../errors_list";
import { createBoat } from "../../util/api_utils";

export default function AddForm(props) {
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
  const [name, setName] = useState("");
  const [length, setLength] = useState(10);
  const [color, setColor] = useState(undefined);

  const { loadAllBoatsToAppState, spotNum } = props;

  function updateName(e) {
    setName(e.target.value);
  }

  function updateLength(e) {
    setLength(e.target.value);
  }

  function updateColor(e) {
    setColor(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Make api call to DB
    createBoat({ name, length, color, spot_number: spotNum })
      .then((res) => {
        // Match frontend app state if successful create
        if (res.ok) loadAllBoatsToAppState(); // or res.status === 200
      })
      .catch((errs) => console.error(errs));
  }

  if (opened) {
    return (
      <form className="toggle-form" onSubmit={handleSubmit}>
        {errorsIndex}

        <label htmlFor="nameInput">Name:</label>
        <input
          id="nameInput"
          name="nameInput"
          type="text"
          value={name}
          onChange={updateName}
        />

        <label htmlFor="lengthInput">Length (ft):</label>
        <input
          id="lengthInput"
          name="lengthInput"
          type="number"
          min="10"
          max="216"
          value={length}
          onChange={updateLength}
        />

        <label htmlFor="colorInput">Color:</label>
        <select
          id="colorInput"
          name="colorInput"
          defaultValue
          value={color}
          onChange={updateColor}
        >
          <option disabled value>
            -- Select a Color --
          </option>
          {COLORS.map((col, i) => {
            return (
              <option value={col} key={i}>
                {col}
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
    return <button onClick={openForm}>+ Boat</button>;
  }
}
