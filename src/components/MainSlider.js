import React from "react";
import '../styles/MainSlider.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Fish from './Fish.js'

class MainSlider extends React.Component {
    render() {
        return (
            <>
                <section className="hotSale-carousel">
                    <h3 className="hotSale-tittle property-TNotSelect">Hot sale
                        <FontAwesomeIcon icon={faCircleQuestion} />
                        <p className="see-all-offerts pointer">See more</p>
                    </h3>
                    <div className="btnsCards btnsCards-right">
                    <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className="btnsCards btnsCards-left">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div className="overflow-container">
                        {Object.keys(this.props.fishes).map(key => (
                            <Fish
                                key={key}
                                details={this.props.fishes[key]}
                                addToOrder={this.props.addToOrder}
                                index={key}
                            />
                        ))}

                    </div>
                </section>
            </>
        );
    }
}

export default MainSlider