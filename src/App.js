import React from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Aside from './components/Aside.js';
import Order from './components/Order.js';
import AddFishForm from './components/AddFishForm.js'
import Fish from './components/Fish.js'

import MainSlider from './components/MainSlider.js'
import BrandSlider from './components/BrandSlider.js'
import HeroSlider from './components/HeroSlider.js';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'




/*                            __                                                     __
_______   ____ _____    _____/  |_          _____________  ____ ___.__. ____   _____/  |_ 
\_  __ \_/ __ \\__  \ _/ ___\   __\         \____ \_  __ \/  _ <   |  |/ __ \_/ ___\   __\
 |  | \/\  ___/ / __ \\  \___|  |           |  |_> >  | \(  <_> )___  \  ___/\  \___|  |  
 |__|    \___  >____  /\___  >__|           |   __/|__|   \____// ____|\___  >\___  >__|  
             \/     \/     \/               |__|                \/         \/     \/       
             https://patorjk.com/software/taag/#p=display&f=Graffiti&t=posh%20oner*/

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    const fishes = { ...this.state.fishes };

    fishes[`fish${Date.now()}`] = fish;

    this.setState({
      fishes: fishes
    });
  };

  addToOrder = key => {
    const order = { ...this.state.order }

    order[key] = order[key] + 1 || 1;

    this.setState({ order: order });
  }

  render() {
    return (
      <>
        <Header userLogged='BautistaGO' />

        <Aside />
        {/*  <Order totalAmount={24.00} fishes={this.state.fishes} order={this.state.order} /> */}

        <section className="IndexSectionsContainer">
          <HeroSlider />
          <MainSlider fishes={this.state.fishes} addToOrder={this.addToOrder} />
          <MainSlider fishes={this.state.fishes} addToOrder={this.addToOrder} />
          <BrandSlider />
          <nav id="navBar-container" >
            <ul className="nav-bar">
              <li>
                <a className="nav-bar-links" data-click="Burguers" href="#Burguers">
                  <FontAwesomeIcon icon={faStopwatch} />
                  Burguers
                </a>
              </li>
              <li>
                <a className="nav-bar-links" data-click="Pizzas" href="#Pizzas">
                  <FontAwesomeIcon icon={faStopwatch} />
                  Pizzas

                </a>
              </li>
              <li>
                <a className="nav-bar-links" data-click="Drinks" href="#Drinks">
                <FontAwesomeIcon icon={faStopwatch} />
                  Drinks

                </a>
              </li>
              <li>
                <a className="nav-bar-links" data-click="contact-me" href="#contact-me">
                  <FontAwesomeIcon icon={faStopwatch} />
                  contact

                </a>
              </li>
              <li>
                <a className="nav-bar-links" data-click="skills" href="#skills" >
                  <FontAwesomeIcon icon={faStopwatch} />
                  skills

                </a>
              </li>
              <li>
                <a className="nav-bar-links" data-click="all" href="#all" >
                  <FontAwesomeIcon icon={faStopwatch} />
                  all

                </a>
              </li>
            </ul>
          </nav>
          <MainSlider fishes={this.state.fishes} addToOrder={this.addToOrder} />

        </section>

        <AddFishForm addFish={this.addFish} />
        <footer className='footer-container'>
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;
