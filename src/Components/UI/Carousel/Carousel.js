import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img alt='feedback-img' src="./assests/Capture1.PNG" />
                   {/*  <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img alt='feedback-img' src="./assests/Capture2.PNG" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img alt='feedback-img' src="./assests/Capture3.PNG" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img alt='feedback-img' src="./assests/Capture4.PNG" />
                    {/* <p className="legend">Legend 4</p> */}
                </div>
                <div>
                    <img alt='feedback-img' src="./assests/Capture5.png" />
                    {/* <p className="legend">Legend 4</p> */}
                </div>
                <div>
                    <img alt='feedback-img' src="./assests/Capture6.png" />
                    {/* <p className="legend">Legend 4</p> */}
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel