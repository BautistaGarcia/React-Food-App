import React from "react";
import { formatPrice } from '../helpers.js'


import '../styles/Fish.css';

import logo from "../logo.svg";

class Fish extends React.Component {
    render() {
        const { image, name, price, description, status } = this.props.details;
        const isAvailable = status === "available";

        return (
            <>
                <li className="single-Fish">
                    <div className="productImageContainer">
                        <img src={logo} alt={name}></img>
                    </div>
                    <div className="productDescription">
                        <h3 className="name">
                            {name}
                            <span className="price">
                                {formatPrice(price)} £
                            </span>
                        </h3>
                        <p className="productDescription">
                            {description}
                        </p>
                        <span>
                            {status}
                        </span>
                        <button
                            disabled={!isAvailable}
                            onClick={() => this.props.addToOrder(this.props.index)}>
                            {isAvailable ? 'Add To Cart' : 'Sold Out!!'}
                        </button>
                    </div>
                </li>
            </>
        );
    }
}

export default Fish;
