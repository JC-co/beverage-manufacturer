import React from "react";
import Header from "./Components/Header";
import Product from "./Components/Product";
import Storage from "./Components/Storage";
import Costs from "./Components/Costs";
import Money from "./Components/Money";

class App extends React.Component {
  state = {
    bevStock: 0,
    bevPrice: 1.0,
    demand: 1,
    containersAmount: 0,
    liquidAmount: 0,
    containerCost: 1.0,
    liquidCost: 1.0,
    money: 1,
  };

  priceAdd10() {
    this.setState((currentState) => {
      const newPrice = currentState.bevPrice + 0.1;
      const newState = { bevPrice: newPrice };
      return newState;
    });
  }

  priceSubtract10() {
    this.setState((currentState) => {
      const newPrice = currentState.bevPrice - 0.1;
      const newState = { bevPrice: newPrice };
      return newState;
    });
  }

  increaseContainersAmount() {
    this.setState((currentState) => {
      const newAmount = currentState.containersAmount + 10;
      const newState = { containersAmount: newAmount };
      return newState;
    });
  }

  increaseLiquidAmount() {
    this.setState((currentState) => {
      const newAmount = currentState.liquidAmount + 10;
      const newState = { liquidAmount: newAmount };
      return newState;
    });
  }

  increaseStock() {
    this.setState((currentState) => {
      if (currentState.containersAmount > 0 && currentState.liquidAmount > 0) {
        const newContainerState = currentState.containersAmount - 1;
        const newLiquidState = currentState.liquidAmount - 1;
        const newStockState = currentState.bevStock + 1;

        const newState = {
          containersAmount: newContainerState,
          liquidAmount: newLiquidState,
          bevStock: newStockState,
        };
        return newState;
      }
    });
  }

  stockUpdate() {
    setInterval(this.increaseStock, 1000);
  }

  //demandRate();

  reset() {
    localStorage.clear("state");
  }

  componentDidMount() {
    this.stockUpdate();

    const localState = localStorage.getItem("state");

    if (localState) {
      const newState = JSON.parse(localState);
      this.setState(newState);
    }
  }

  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state));
  }

  render() {
    return (
      <div id="main">
        <Header />
        <Product
          bevStock={this.state.bevStock}
          bevPrice={this.state.bevPrice}
          demand={this.state.demand}
          priceAdd10={this.priceAdd10}
          priceSubtract10={this.priceSubtract10}
        />
        <Storage
          containersAmount={this.state.containersAmount}
          liquidAmount={this.state.liquidAmount}
          increaseContainersAmount={this.increaseContainersAmount}
          increaseLiquidAmount={this.increaseLiquidAmount}
        />
        <Costs
          containerCost={this.state.containerCost}
          liquidCost={this.state.liquidCost}
        />
        <Money money={this.state.money} />

        <button onClick={this.reset}>Reset!</button>
      </div>
    );
  }
}

export default App;
