import React from "react";
import Boat from "./boat";
import AddForm from "./forms/add_form";
import MoveForm from "./forms/move_form";
import RemoveForm from "./forms/remove_form";

export default function Spot(props) {
  const { boat, addNewBoat, moveBoat, removeBoat } = props;

  /*
    When the spot is empty, there is a form to add a new boat to this spot
  */
  let boatItem = null;
  let formSection = (
    <div className="forms-container">
      <AddForm addNewBoat={addNewBoat} />
    </div>
  );

  /*
    When there is a boat, there are forms to move or remove that boat
  */
  if (boat) {
    const { name, length, color } = boat;
    boatItem = <Boat name={name} length={length} color={color} />;
    formSection = (
      <div className="forms-container">
        <MoveForm moveBoat={moveBoat} />
        <RemoveForm removeBoat={removeBoat} />
      </div>
    );
  }

  return (
    <div className="spot-container">
      <p>spot num: {props.spotNum}</p>
      {boatItem}
      {formSection}
    </div>
  );
}
