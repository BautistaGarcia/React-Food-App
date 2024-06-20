import React from "react";

import '../styles/BrandSlider.css';

import logo from "../logo.svg";

const BrandSlider = props => (
            <>
                <section id="brands-prom" className="main__section-brands-prom property-TNotSelect">
                    <h3 className="hotSale-tittle property-TNotSelect ">Restaurants :
                        <i className="fa-solid fa-question help" id="questionMark4" aria-hidden="true"></i>
                    </h3>

                    <section className="main__section-brands-slider ">
                        <div className="div__brands-box">
                            <div className="div__logos-slide">
                                <a href="/brands/BOSS" className="a__content-image">
                                    <img src={logo} /></a>
                                <a href="/brands/DAddario" className="a__content-image">
                                    <img src={logo} /></a>
                                <a href="/brands/Epiphone" className="a__content-image">
                                    <img src={logo} /></a>
                                <a href="/brands/Gibson" className="a__content-image">
                                    <img src={logo} /></a>
                                <a href="/brands/Marshall" className="a__content-image">
                                    <img src={logo} /></a>
                                <a href="/brands/Yamaha" className="a__content-image">
                                    <img src={logo} /></a>
                                <a href="/brands/Zildjian" className="a__content-image">
                                    <img src={logo} /></a>
                                <a href="/brands/BOSS" className="a__content-image">
                                    <img src={logo} /></a>
                                <a href="/brands/DAddario" className="a__content-image">
                                    <img src={logo} /></a>
                                <a href="/brands/Epiphone" className="a__content-image">
                                    <img src={logo} /></a>
                                <a href="/brands/Gibson" className="a__content-image">
                                    <img src={logo} /></a>
                                <a href="/brands/Marshall" className="a__content-image">
                                    <img src={logo} /></a>
                                <a href="/brands/Yamaha" className="a__content-image">
                                    <img src={logo} /></a>
                                <a href="/brands/Zildjian" className="a__content-image">
                                    <img src={logo} /></a>
                            </div>
                        </div>
                    </section>
                    <div className="expand-offert-banner pointer" id="expand-offert-banner1">
                        <p>see more</p>
                    </div>
                </section>
            </>
        );

export default BrandSlider;
