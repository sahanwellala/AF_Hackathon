import React, {Component} from 'react';

//import img_04 from '../resources/images/image_04.jpg';


export default class List_container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className="background">
                <div className="container">
                    <div className="panel pricing-table">

                        <div className="pricing-plan">
                            <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" className="pricing-img"/>
                            <h2 className="pricing-header">Topic 01</h2>
                            <ul className="pricing-features">
                                <li className="pricing-features-item">Sub topic</li>
                                <li className="pricing-features-item">Description</li>
                            </ul>
                            {/*<span className="pricing-price">Let's Clean</span>*/}
                            <a href="#/" className="pricing-button">Join</a>
                        </div>

                        <div className="pricing-plan">
                            <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" className="pricing-img"/>
                            <h2 className="pricing-header">Topic 02</h2>
                            <ul className="pricing-features">
                                <li className="pricing-features-item">Sub topic 02</li>
                                <li className="pricing-features-item">Description</li>
                            </ul>
                            <span className="pricing-price"></span>
                            <a href="#/" className="pricing-button is-featured">Let's work</a>
                        </div>

                        <div className="pricing-plan">
                            <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" className="pricing-img"/>
                            <h2 className="pricing-header">Topic 03</h2>
                            <ul className="pricing-features">
                                <li className="pricing-features-item">Sub Topic</li>
                                <li className="pricing-features-item">Description</li>
                            </ul>
                            <span className="pricing-price"></span>
                            <a href="#/" className="pricing-button">Join</a>
                        </div>

                    </div>
                </div>
            </div>


        </div>;
    }
}