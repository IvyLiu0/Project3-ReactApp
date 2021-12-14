import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Columns from "react-columns";
import {Link} from "react-router-dom"

const slideImages = [
  '/products/3.jpg',
  '/products/2.jpg',
  '/products/1.jpg'
];

const Main = () => {
    return (
        <React.Fragment>
      <div>
          <br /><br />
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
    <Link to="/allproducts" className="linkproduct"><img style={{width:"300px", marginLeft:"30px"}} src="/products/8.jpg" alt="a" /></Link>
    <Link to="/allproducts" className="linkproduct"><img style={{width:"300px"}} src="/products/12.jpg" alt="b" /> </Link>
    <Link to="/allproducts" className="linkproduct"><img style={{width:"300px"}} src="/products/15.jpg" alt="c" /></Link>
    <Link to="/allproducts" className="linkproduct"><img style={{width:"300px"}} src="/products/4.jpg" alt="d" /></Link>
    <p style={{marginLeft:"140px"}}>Cookware</p>
    <p style={{marginLeft:"120px"}}>Dinnerware</p>
    <p style={{marginLeft:"120px"}}>Flatware</p>
    <p style={{marginLeft:"120px"}}>Gift Set</p>
  </Columns>
  </React.Fragment>
  );
}

export default Main;