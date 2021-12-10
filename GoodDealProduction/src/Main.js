import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Columns from "react-columns";

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
        <br /><br /><br /><br />
      <div className="bigTitle">
        <h2>Defining Home Styling Since 1996</h2>
      </div>
      <ShowProducts />
      </React.Fragment>
    )
};

function ShowProducts(){
  return (
    <React.Fragment>
    <br /><br /><br />
  <Columns columns="4">
    <img style={{width:"300px"}} src="/products/cologne.jpg" alt="a" />
    <img style={{width:"300px"}} src="/products/cologne.jpg" alt="b" />
    <img style={{width:"300px"}} src="/products/cologne.jpg" alt="c" />
    <img style={{width:"300px"}} src="/products/cologne.jpg" alt="" />
    <p style={{marginLeft:"120px"}}>Dinnerware</p>
    <p style={{marginLeft:"120px"}}>Cookware</p>
    <p style={{marginLeft:"120px"}}>Flatware</p>
    <p style={{marginLeft:"120px"}}>Gift Set</p>
  </Columns>
  </React.Fragment>
  );
}

export default Main;