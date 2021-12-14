import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
// import { Dinnerware } from "./data/dinnerware";
// import {Cookware} from "./data/cookware";
// import {Flatware} from "./data/flatware";
// import {Giftset} from "./data/giftset";
import { Alldata } from "./data/alldata";
import { NavBar } from "./Navbar";
import { Footer } from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Alldata.Cookware
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

  sortprice = (items, sortType) => {
    items.sort((a, b) => {
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

  sortprice = (items1, sortType) => {
    items1.sort((a, b) => {
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

  sortprice = (items2, sortType) => {
    items2.sort((a, b) => {
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

  sortprice = (items3, sortType) => {
    items3.sort((a, b) => {
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
          itemList={this.state.items}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          sortprice={this.sortprice}
        />
        <Footer />
      </div>
    );
  }
}

export default App;