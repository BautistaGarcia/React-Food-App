import React from 'react';
import logo from '../logo.svg';
import '../styles/Aside.css';

class Aside extends React.Component {
render () {
    return (
      <aside>
        <div className='navAside'>
        <p>k</p>
        <p>k</p>
        <p>h</p>
        <p>kj</p>
        </div>

        <div className='navProfile'>
        <p>+</p>
        <img src={logo}></img>
        </div>
      </aside>
    );
}
}

export default Aside;