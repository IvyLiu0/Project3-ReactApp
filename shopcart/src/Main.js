import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const slideImages = [
  '/products/cologne.jpg',
  '/products/iwatch.jpg',
  '/products/mug.jpg'
];

const Main = () => {
    return (
        <React.Fragment>
      <div>
          <br /><br /><br />
        <Slide easing="ease" className="slide">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
        <br /><br />
      <div className="bigTitle">
        <h3>Defining Home Styling Since 1996</h3>
      </div>
      </React.Fragment>
    )
};

export default Main;