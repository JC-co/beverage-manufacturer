import React from "react";

const Product = (props) => {
  return (
    <div id="productDiv">
      <tr>
        <h3>Product</h3>
        <hr />
        <p>Beverage Stock = {props.bevStock}</p>
        <div>
          <p>Beverage Price = £{props.bevPrice.toFixed(2)}</p>
          <button onClick={props.priceAdd10}>+10p</button>
          <button onClick={props.priceSubtract10}>-10p</button>
        </div>
        <p>Demand = {props.demand} per hour</p>
      </tr>
    </div>
  );
};

export default Product;
