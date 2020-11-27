import React from "react";

const Storage = (props) => {
  return (
    <div id="storageDiv">
      <tr>
        <h3>Storage</h3>
        <hr />
        <p>Containers Amount = {props.containersAmount}</p>
        <button onClick={props.increaseContainersAmount}>+10</button>
        <p>Liquid Amount = {props.liquidAmount} Litres</p>
        <button onClick={props.increaseLiquidAmount}>+10</button>
      </tr>
    </div>
  );
};

export default Storage;
