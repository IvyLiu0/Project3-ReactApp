import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { Dinnerware } from "./data/dinnerware";
import {Cookware} from "./data/cookware";
import {Flatware} from "./data/flatware";
import {Giftset} from "./data/giftset";
// import { Alldata } from "./data/alldata";
import { NavBar } from "./Navbar";
import { Footer } from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookware: Cookware,
      dinnerware: Dinnerware,
      flatware: Flatware,
      giftset: Giftset
    };
  }

  handleIncrease = (item) => {
    const updateValue = item.value++;
    this.setState({ updateValue });
  };

  handleDecrease = (item) => {
    if (item.value > 0) {
      const updateValue = item.value--;
      this.setState({ updateValue });
    }
  };

  sortprice = (cookware, sortType) => {
    cookware.sort((a, b) => {
      switch (sortType) {
        case "normal":
          return a.id - b.id;
        case "lowest":
          return a.price - b.price;
        case "highest":
          return b.price - a.price;
        default:
          return a.id - b.id ;
      }
    });
    this.setState({ sortType });
  };

  sortprice1 = (dinnerware, sortType) => {
    dinnerware.sort((a, b) => {
      switch (sortType) {
        case "normal":
          return a.id - b.id;
        case "lowest":
          return a.price - b.price;
        case "highest":
          return b.price - a.price;
        default:
          return a.id - b.id ;
      }
    });
    this.setState({ sortType });
  };

  sortprice2 = (flatware, sortType) => {
    flatware.sort((a, b) => {
      switch (sortType) {
        case "normal":
          return a.id - b.id;
        case "lowest":
          return a.price - b.price;
        case "highest":
          return b.price - a.price;
        default:
          return a.id - b.id ;
      }
    });
    this.setState({ sortType });
  };

  sortprice3 = (giftset, sortType) => {
    giftset.sort((a, b) => {
      switch (sortType) {
        case "normal":
          return a.id - b.id;
        case "lowest":
          return a.price - b.price;
        case "highest":
          return b.price - a.price;
        default:
          return a.id - b.id ;
      }
    });
    this.setState({ sortType });
  };


  render() {
    return (
      <div>
        <NavBar
          cookList={this.state.cookware}
          dinnerList={this.state.dinnerware}
          flatList={this.state.flatware}
          giftList={this.state.giftset}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          sortprice={this.sortprice}
          sortprice1={this.sortprice1}
          sortprice2={this.sortprice2}
          sortprice3={this.sortprice3}
        />
        <Footer />
      </div>
    );
  }
}

export default App;