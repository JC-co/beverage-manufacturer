import React from "react";

const Costs = (props) => {
  return (
    <div id="costsDiv">
      <tr>
        <h3>Costs</h3>
        <hr />
        <p>Container Cost = {props.containerCost}</p>
        <p>Liquid Cost = {props.liquidCost}</p>
      </tr>
    </div>
  );
};

export default Costs;
