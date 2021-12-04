import React from "react";
import { Link, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./Home";
import { Cart } from "./Cart";
import Login from "./Login";

export const NavBar = (props) => {
  return (
    <div>
      <Router>
        <div className="navItem">
          <h2>
            <Link to="/" className="Logo">
              Good Deal Production Ent. Inc
            </Link>
          </h2>
          <div className="navCart">
            <Link to="/signin" className="NavLogin">Login</Link>{" \xa0 "}
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} className="faShoppingCart" />
            </Link> {" "}
              {props.itemList
                .map((item) => item.value)
                .reduce((acc, curr) => acc + curr, 0)}{" "}
              items
          </div>
        </div>
        <br />
        <div className="NavBox">
        <nav className="NavBar">
          <Link to="/" className="Nav">Home</Link>{" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
          <Link to="/product" className="Nav">Products</Link>{" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
          <Link to="/about" className="Nav">About</Link>{" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
          <Link to="/contact" className="Nav">Contact</Link>
        </nav>
        </div>

        <Routes>
          <React.Fragment>
          <Route exact path="/product" 
              element={<Home
              itemList={props.itemList}
              handleIncrease={props.handleIncrease}
              handleDecrease={props.handleDecrease}
            />} />
          <Route path="/Cart" element={<Cart itemList={props.itemList} totalvalue={props.totalvalue} />} />
          <Route path="/signin" element= {<Login />}></Route>
          </React.Fragment>
        </Routes>
      </Router>
    </div>
  );
};