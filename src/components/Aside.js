import React from 'react';
import logo from '../logo.svg';
import '../styles/Aside.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faCirclePlus, faGear } from '@fortawesome/free-solid-svg-icons'


class Aside extends React.Component {
  render() {
    return (
      <aside>
        <div className='navAside'>
          <p className='navAside-icons'><FontAwesomeIcon icon={faBars} /></p>
          <p className='navAside-icons'><FontAwesomeIcon icon={faCartShopping} /></p>
          <p className='navAside-icons'>h</p>
          <p className='navAside-icons'>kj</p>
        </div>

        <div className='navProfile'>
          <p className='navAside-icons'><FontAwesomeIcon icon={faCirclePlus} /></p>
          <div className="userImage-container">
            <img className='userImage' src={logo} alt='user main image'></img>
          </div>
          <p className='navAside-icons'><FontAwesomeIcon icon={faGear} /></p>
        </div>
      </aside>
    );
  }
}

export default Aside;