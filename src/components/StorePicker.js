import React from "react";
import logo from "../logo.svg";
import '../styles/StorePicker.css';

class StorePicker extends React.Component {
  render() {
    return (
      <section className="storePicker">
        <article className="product">
          <div className="productImageContainer">
            <img src={logo}></img>
          </div>
          <div className="productDescription">
            <span className="name">
              Escalopes de veau
            </span>
            <span className="price">
              15 £
            </span>
            <p className="productDescription">
              Les escalopes de veau sont des escalopes de veau tres bonnes atr perro cumbia cajeteala piola gato
            </p>
            <button>Add To Order</button>
          </div>
        </article>
      <ul className="storePicker2">
      
      </ul>
      </section>
    );
  }
}

export default StorePicker;
