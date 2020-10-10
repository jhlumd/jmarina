import React from "react";
import Boat from "./boat";
import AddForm from "./forms/add_form";
import MoveForm from "./forms/move_form";
import RemoveForm from "./forms/remove_form";

export default function Spot(props) {
  const { boat, spotNum, loadAllBoatsToAppState } = props;

  /*
    When the spot is empty, there is a form to add a new boat to this spot
  */
  let boatItem = null;
  let formSection = (
    <div className="forms-container">
      <AddForm
        loadAllBoatsToAppState={loadAllBoatsToAppState}
        spotNum={spotNum}
      />
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
        <MoveForm
          loadAllBoatsToAppState={loadAllBoatsToAppState}
          spotNum={spotNum}
          boatId={boat.id}
        />
        <RemoveForm
          loadAllBoatsToAppState={loadAllBoatsToAppState}
          boatId={boat.id}
        />
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
