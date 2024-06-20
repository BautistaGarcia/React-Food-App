import React from "react";
import { formatPrice } from '../scripts/helpers.js'

import '../styles/Order.css';

class Order extends React.Component {

  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish.status === 'available';


    if(!isAvailable){
      return <li key={key}>
        Sorry { fish ? fish.name : 'the plate' } is no longer available
      </li>
    }

    return <li key={key}>
      {count} lbs {fish.name}

      {formatPrice(count * fish.price)}
    </li>

  }

  render() {
    // Add this conditional check
    if (!this.props.order) {
      return null;
    }

    const orderIds = Object.keys(this.props.order);

    const totalAmount = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal = count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order">
        <div className="totalOrder">
          <span>
            Your Order:
            <span>{formatPrice(totalAmount)}</span>
          </span>
        </div>

        <ul className="orderSlider">
          {orderIds.map(this.renderOrder)}
        </ul>

        <div className="submit-email">
          <form action="" className="submitOrder">
            <input type="submit"></input>
          </form>
          <span className="profileEmail">bautista.garcia.oliver@gmail.com</span>
        </div>
      </div>
    );
  }
}

export default Order;