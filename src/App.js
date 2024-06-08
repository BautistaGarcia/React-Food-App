import React from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Aside from './components/Aside.js';
import Order from './components/Order.js';
import AddFishForm from './components/AddFishForm.js'
import Fish from './components/Fish.js'

import './styles/StorePicker.css'





/*
_______   ____ _____    _____/  |_  _____________  ____ ___.__. ____   _____/  |_ 
\_  __ \_/ __ \\__  \ _/ ___\   __\ \____ \_  __ \/  _ <   |  |/ __ \_/ ___\   __\
 |  | \/\  ___/ / __ \\  \___|  |   |  |_> >  | \(  <_> )___  \  ___/\  \___|  |  
 |__|    \___  >____  /\___  >__|   |   __/|__|   \____// ____|\___  >\___  >__|  
             \/     \/     \/       |__|                \/         \/     \/       
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
        <div className='header-container'>
          <Header userLogged='BautistaGO' />
        </div>

        {/* <Aside /> */}
        {/* <Order totalAmount={24.00} fishes={this.state.fishes} order={this.state.order} /> */}
        <ul className="fishes">
          <h3 className='StorePickertitle'>StorePicker !</h3>
          {
            Object.keys(this.state.fishes)
              .map(key => <Fish
                key={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
                index={key}
              />)
          }
        </ul>
          {/* <AddFishForm addFish={this.addFish} /> */}
          <footer className='footer-container'>
            <Footer />
          </footer>
        </>
        );
  }
}

        export default App;
