import React from "react";
import { Link, BrowserRouter, Route, Routes} from "react-router-dom";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Homecook} from "./Homecook";
import {Homedinner} from "./Homedinner";
import { Homeflat } from "./Homeflat";
import { Homegift } from "./Homegift";
import { Cart } from "./Cart";
import Login from "./Login";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import {AllProducts} from "./AllProducts";

export const NavBar = (props) => {
  return (
    <div>
      <BrowserRouter>
        <div className="navItem">
          <h2>
            <Link to="/" className="Logo">
              Good Deal Production Ent. Inc
            </Link>
          </h2>
          <div className="navCart">
            {/* <Link to="/signin" className="NavLogin">Login</Link>{" \xa0 "} */}
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} className="faShoppingCart" />
            </Link> {" "}
              {props.cookList
                .map((item) => item.value)
                .reduce((acc, curr) => acc + curr, 0)}{" "}
              items
          </div>
        </div>
        <br /><br />
        <div className="NavBox">
        <nav className="NavBar">
          <Link to="/" className="Nav">Home</Link>{" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
          <Link to="/allproducts" className="Nav">Products</Link>{" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
          <Link to="/about" className="Nav">About</Link>{" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
          <Link to="/contact" className="Nav">Contact</Link>{" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
          <Link to="/signin" className="Nav">Login</Link>
        </nav>
        </div>

        <Routes>
          <React.Fragment>
            <Route path="/" element={<Main />} />
            <Route path="/allproducts" element={<AllProducts />} />
             <Route path="/cookware" 
              element={<Homecook
              cookList={props.cookList}
              handleIncrease={props.handleIncrease}
              handleDecrease={props.handleDecrease}
              sortprice={props.sortprice}
            />} />
            <Route path="/dinnerware" 
              element={<Homedinner
              dinnerList={props.dinnerList}
              handleIncrease={props.handleIncrease}
              handleDecrease={props.handleDecrease}
              sortprice1={props.sortprice1}
            />} />
            <Route exact path="/flatware" 
              element={<Homeflat
              flatList={props.flatList}
              handleIncrease={props.handleIncrease}
              handleDecrease={props.handleDecrease}
              sortprice2={props.sortprice2}
            />} />
            <Route exact path="/giftset" 
              element={<Homegift
              giftList={props.giftList}
              handleIncrease={props.handleIncrease}
              handleDecrease={props.handleDecrease}
              sortprice3={props.sortprice3}
            />} />
          <Route path="/Cart" element={<Cart cookList={props.cookList} 
          dinnerList={props.dinnerList}
          flatList={props.flatList}
          giftList={props.giftList}
          totalvalue={props.totalvalue} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element= {<Login />}></Route>
          </React.Fragment>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
};