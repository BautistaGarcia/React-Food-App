import React from "react";
import { formatPrice } from '../scripts/helpers.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'


import '../scripts/fish.js'
import '../styles/Fish.css';

import logo from "../logo.svg";

class Fish extends React.Component {
    render() {
        const { image, name, price, discount, description, status } = this.props.details;
        const isAvailable = status === "available";

        return (
            <>
                <li className="food-card pointer" id="foodCard">
                    <div className="offer-timing-container">
                        <dd>Ends in:</dd>
                        <FontAwesomeIcon icon={faStopwatch} />
                        <div id="timer">
                            <span id="hours">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span>
                        </div>
                    </div>
                    <img src={image ? `${image}` : logo} alt={name}></img>
                    <div className="product-image-container">
                        <a href="/products/productDetail/3">
                            <p>
                                {formatPrice(price)} 
                                <span>
                                    {discount ? ` - ${discount}%` : ''}
                                </span>
                            </p>
                            <span className="offer-info">
                                {name}
                            </span>
                        </a>
                        <span>
                            {description}
                        </span>

                        <div className="btn-pay-object property-TNotSelect">
                            <a href="#">
                                <button disabled={!isAvailable}
                                    onClick={() => this.props.addToOrder(this.props.index)}>
                                    {isAvailable ? 'Add To Cart' : 'Sold Out!!'}
                                </button>
                            </a>
                        </div>
                    </div>
                </li >
            </>
        );
    }
}

export default Fish;
