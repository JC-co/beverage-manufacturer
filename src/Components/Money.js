import React from "react";

const Money = (props) => {
  return (
    <div id="moneyDiv">
      <tr>
        <h3>Money</h3>
        <p>{props.money}</p>
        <hr />
      </tr>
    </div>
  );
};

export default Money;
