import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faArrowLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import '../styles/Header.css';

import logo from "../logo.svg";


const Header = props => (
    <header>

        <a href="/" className="goBack-btn-769px">
            <FontAwesomeIcon icon={faArrowLeft} />
        </a>

        <nav>
            <a href="/" className="logo-container">
                <img src={logo} alt="Food Funnel Main Logo" />
                <input type="search" name="search" id="search" placeholder="Search products" />
            </a>
            <div className="navBar-MinW769px">
                <ul className="navBarUl">
                    <li>
                        <a className="navBar-link pointer" href="">Restaurants
                            <FontAwesomeIcon icon={faChevronDown} />
                        </a>
                        <div className="dropdown__menu">
                            <ul>
                                <li>
                                    Dean and dennys
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    <ul id="dropdown__menu_right" className="dropdown__menu_right">
                                        <li>
                                            <a href="#">Team-1</a>
                                            <a href="#">Team-1</a>
                                            <a href="#">Team-1</a>
                                            <a href="#">Team-4</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>Mc Donnalds<FontAwesomeIcon icon={faChevronRight} /></li>
                                <li>Tomasso<FontAwesomeIcon icon={faChevronRight} /></li>
                                <li>sssss<FontAwesomeIcon icon={faChevronRight} /></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a className="navBar-link pointer" href="">Categories
                            <FontAwesomeIcon icon={faChevronDown} />
                        </a>
                        <div className="dropdown__menu">
                            <ul>
                                <li>Burguer<FontAwesomeIcon icon={faChevronRight} /></li>
                                <li>Pizza<FontAwesomeIcon icon={faChevronRight} /></li>
                                <li>Ice Cream<FontAwesomeIcon icon={faChevronRight} /></li>
                                <li>sssss</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a className="navBar-link pointer" href="">link
                        <FontAwesomeIcon icon={faChevronDown} />
                        </a>
                        <div className="dropdown__menu">
                            <ul>
                                <li>Burguer<FontAwesomeIcon icon={faChevronRight} /></li>
                                <li>Pizza<FontAwesomeIcon icon={faChevronRight} /></li>
                                <li>Ice Cream<FontAwesomeIcon icon={faChevronRight} /></li>
                                <li>sssss</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a className="navBar-link pointer" href="">link
                        <FontAwesomeIcon icon={faChevronDown} />
                        </a>
                    </li>
                </ul>
                <i className="fa-solid fa-ellipsis-vertical pointer" id="btnMenu"></i>
            </div>
            <div className="navBar-MaxW769px">
                <a href="/products/search"><i className="fa-solid fa-magnifying-glass pointer"></i></a>
                <a href="/" className="FoodFunnelText">Food Funnel </a>
                <i className="fa-solid fa-ellipsis-vertical pointer" id="btnMenu"></i>
            </div>

        </nav>
    </header>
)

export default Header;