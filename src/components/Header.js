import React from "react";
import '../styles/Header.css';

const Header = props => (
            <header>
                <section className="navBar">
                    <ul className="left-navBar">
                        <li>pp</li>
                        <li>pp</li>
                        <li>pp</li>
                    </ul>
                    <ul className="right-navBar">
                        <li>Welcome back { props.userLogged }</li>
                        <li><a href="#">Log in</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </section>
            </header>
        )

export default Header;